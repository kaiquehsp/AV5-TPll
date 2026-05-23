import { useState } from 'react';
import { 
  Typography, Box, Button, Card, CardContent, 
  Dialog, DialogTitle, DialogContent, DialogActions, TextField, MenuItem, Divider, Chip
} from '@mui/material';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import BedIcon from '@mui/icons-material/Bed';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BathtubIcon from '@mui/icons-material/Bathtub';
import { useArmazem } from '../contexts/ArmazemContext';
import type { Acomodacao, NomeAcomadacao } from '../models/types';

const especificacoesQuartos: Record<NomeAcomadacao, Omit<Acomodacao, 'id' | 'nomeAcomadacao'>> = {
  "Casal Simples": { camaCasal: 1, camaSolteiro: 0, suite: 1, climatizacao: true, garagem: 1 },
  "Família Mais": { camaCasal: 1, camaSolteiro: 2, suite: 1, climatizacao: true, garagem: 2 },
  "Família Simples": { camaCasal: 1, camaSolteiro: 2, suite: 0, climatizacao: false, garagem: 1 },
  "Família Super": { camaCasal: 2, camaSolteiro: 2, suite: 2, climatizacao: true, garagem: 2 },
  "Solteiro Mais": { camaCasal: 0, camaSolteiro: 1, suite: 1, climatizacao: true, garagem: 1 },
  "Solteiro Simples": { camaCasal: 0, camaSolteiro: 1, suite: 0, climatizacao: false, garagem: 0 },
};

export const Acomodacoes = () => {
  const { acomodacoes, adicionarAcomodacao } = useArmazem();
  const [modalAberto, setModalAberto] = useState(false);
  const [tipoSelecionado, setTipoSelecionado] = useState<NomeAcomadacao>("Casal Simples");

  const handleSalvar = () => {
    const tipoJaCadastrado = acomodacoes.some((quarto) => quarto.nomeAcomadacao === tipoSelecionado);
    if (tipoJaCadastrado) {
      alert(`Erro: O modelo "${tipoSelecionado}" já está catalogado.`);
      return; 
    }
    const specs = especificacoesQuartos[tipoSelecionado];
    const novaAcomodacao: Acomodacao = { id: crypto.randomUUID(), nomeAcomadacao: tipoSelecionado, ...specs };
    adicionarAcomodacao(novaAcomodacao);
    setModalAberto(false);
    setTipoSelecionado("Casal Simples");
  };

  const specVisualizacao = especificacoesQuartos[tipoSelecionado];

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <MeetingRoomIcon sx={{ color: '#1976d2', fontSize: 40 }} />
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#333' }}>Inventário de Acomodações</Typography>
        </Box>
        <Button variant="contained" color="secondary" startIcon={<AddBusinessIcon />} onClick={() => setModalAberto(true)} sx={{ borderRadius: 2 }}>
          Nova Planta
        </Button>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 3 }}>
        {acomodacoes.length === 0 ? (
          <Typography color="text.secondary">Nenhuma acomodação cadastrada no inventário.</Typography>
        ) : (
          acomodacoes.map((quarto) => (
            <Card 
              key={quarto.id} 
              elevation={0} 
              sx={{ 
                border: '1px solid #e0e0e0', 
                borderTop: '6px solid #1976d2', 
                borderRadius: 3,
                transition: 'transform 0.2s',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#222', mb: 3 }}>
                  {quarto.nomeAcomadacao}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Chip icon={<BedIcon />} label={`${quarto.camaCasal} Casal | ${quarto.camaSolteiro} Solt.`} variant="outlined" size="small" sx={{ borderRadius: 2 }} />
                  <Chip icon={<BathtubIcon />} label={`${quarto.suite} Suíte(s)`} variant="outlined" size="small" sx={{ borderRadius: 2 }} />
                  <Chip icon={<DirectionsCarIcon />} label={`${quarto.garagem} Vaga(s)`} variant="outlined" size="small" sx={{ borderRadius: 2 }} />
                  <Chip icon={<AcUnitIcon />} label={quarto.climatizacao ? "Climatizado" : "S/ Ar"} color={quarto.climatizacao ? "info" : "default"} variant={quarto.climatizacao ? "filled" : "outlined"} size="small" sx={{ borderRadius: 2 }} />
                </Box>
              </CardContent>
            </Card>
          ))
        )}
      </Box>

      <Dialog open={modalAberto} onClose={() => setModalAberto(false)} maxWidth="sm" fullWidth sx={{ '& .MuiDialog-paper': { borderRadius: 3 } }}>
        <DialogTitle sx={{ fontWeight: 700 }}>Catalogar Unidade</DialogTitle>
        <DialogContent dividers>
          <TextField select label="Planta Base *" value={tipoSelecionado} onChange={(e) => setTipoSelecionado(e.target.value as NomeAcomadacao)} fullWidth sx={{ mt: 1, mb: 4 }}>
            {Object.keys(especificacoesQuartos).map((opcao) => (
              <MenuItem key={opcao} value={opcao}>{opcao}</MenuItem>
            ))}
          </TextField>
          <Divider sx={{ mb: 3 }}><Chip label="Especificações Físicas" size="small" /></Divider>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <TextField label="Camas Casal" value={specVisualizacao.camaCasal} disabled size="small" sx={{ width: '47%' }}/>
            <TextField label="Camas Solteiro" value={specVisualizacao.camaSolteiro} disabled size="small" sx={{ width: '47%' }}/>
            <TextField label="Suítes" value={specVisualizacao.suite} disabled size="small" sx={{ width: '47%' }}/>
            <TextField label="Vagas Garagem" value={specVisualizacao.garagem} disabled size="small" sx={{ width: '47%' }}/>
            <TextField label="Climatização" value={specVisualizacao.climatizacao ? "Possui Ar Cond." : "Ventilador"} disabled size="small" sx={{ width: '97%' }}/>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setModalAberto(false)} color="inherit" sx={{ borderRadius: 2 }}>Cancelar</Button>
          <Button onClick={handleSalvar} variant="contained" color="secondary" sx={{ borderRadius: 2 }}>Confirmar Registro</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};