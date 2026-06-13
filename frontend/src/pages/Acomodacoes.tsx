import { useState } from 'react';
import {
  Typography, Box, Card, CardContent, Chip, IconButton,
  Tooltip, Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Switch, FormControlLabel, Button, MenuItem, Autocomplete
} from '@mui/material';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BedIcon from '@mui/icons-material/Bed';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BathtubIcon from '@mui/icons-material/Bathtub';
import { useArmazem } from '../contexts/ArmazemContext';
import type { Acomodacao } from '../models/types';

const NOMES_SUGERIDOS = [
  'Solteiro Simples',
  'Solteiro Mais',
  'Casal Simples',
  'Família Simples',
  'Família Mais',
  'Família Super',
];

export const Acomodacoes = () => {
  const { acomodacoes, loading, adicionarAcomodacao, atualizarAcomodacaoCtx, removerAcomodacao } = useArmazem();

  const [modalAberto, setModalAberto] = useState(false);
  const [modoModal, setModoModal] = useState<'criar' | 'editar'>('criar');
  const [selecionada, setSelecionada] = useState<Acomodacao | null>(null);

  const [nomeAcomadacao, setNomeAcomadacao] = useState('');
  const [camaCasal, setCamaCasal] = useState(0);
  const [camaSolteiro, setCamaSolteiro] = useState(0);
  const [suite, setSuite] = useState(0);
  const [climatizacao, setClimatizacao] = useState(false);
  const [garagem, setGaragem] = useState(0);

  const resetForm = () => {
    setNomeAcomadacao('');
    setCamaCasal(0);
    setCamaSolteiro(0);
    setSuite(0);
    setClimatizacao(false);
    setGaragem(0);
    setSelecionada(null);
  };

  const abrirCriar = () => {
    resetForm();
    setModoModal('criar');
    setModalAberto(true);
  };

  const abrirEditar = (quarto: Acomodacao) => {
    setSelecionada(quarto);
    setNomeAcomadacao(quarto.nomeAcomadacao);
    setCamaCasal(quarto.camaCasal);
    setCamaSolteiro(quarto.camaSolteiro);
    setSuite(quarto.suite);
    setClimatizacao(quarto.climatizacao);
    setGaragem(quarto.garagem);
    setModoModal('editar');
    setModalAberto(true);
  };

  const handleSalvar = async () => {
    if (!nomeAcomadacao.trim()) {
      alert('O nome da acomodação é obrigatório.');
      return;
    }
    const payload = { nomeAcomadacao, camaCasal, camaSolteiro, suite, climatizacao, garagem };
    if (modoModal === 'criar') {
      await adicionarAcomodacao(payload);
    } else if (selecionada) {
      await atualizarAcomodacaoCtx(selecionada.id, payload);
    }
    setModalAberto(false);
  };

const handleRemover = async (quarto: Acomodacao) => {
  if (window.confirm(`Deseja remover "${quarto.nomeAcomadacao}" do inventário?`)) {
    try {
      await removerAcomodacao(quarto.id);
    } catch (error: any) {
      const mensagem = error?.response?.data?.erro || 'Erro ao remover acomodação.';
      alert(mensagem);
    }
  }
};

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <MeetingRoomIcon sx={{ color: '#1976d2', fontSize: 40 }} />
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#333' }}>
            Inventário de Acomodações
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddBusinessIcon />}
          onClick={abrirCriar}
          sx={{ borderRadius: 2 }}
        >
          Nova Acomodação
        </Button>
      </Box>

      {loading ? (
        <Typography color="text.secondary">Carregando acomodações...</Typography>
      ) : (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 3 }}>
          {acomodacoes.length === 0 ? (
            <Typography color="text.secondary">Nenhuma acomodação cadastrada.</Typography>
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
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#222' }}>
                      {quarto.nomeAcomadacao}
                    </Typography>
                    <Box>
                      <Tooltip title="Editar">
                        <IconButton size="small" color="warning" onClick={() => abrirEditar(quarto)}>
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Excluir">
                        <IconButton size="small" color="error" onClick={() => handleRemover(quarto)}>
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Chip icon={<BedIcon />} label={`${quarto.camaCasal} Casal | ${quarto.camaSolteiro} Solt.`} variant="outlined" size="small" sx={{ borderRadius: 2 }} />
                    <Chip icon={<BathtubIcon />} label={`${quarto.suite} Suíte(s)`} variant="outlined" size="small" sx={{ borderRadius: 2 }} />
                    <Chip icon={<DirectionsCarIcon />} label={`${quarto.garagem} Vaga(s)`} variant="outlined" size="small" sx={{ borderRadius: 2 }} />
                    <Chip icon={<AcUnitIcon />} label={quarto.climatizacao ? 'Climatizado' : 'S/ Ar'} color={quarto.climatizacao ? 'info' : 'default'} variant={quarto.climatizacao ? 'filled' : 'outlined'} size="small" sx={{ borderRadius: 2 }} />
                  </Box>
                </CardContent>
              </Card>
            ))
          )}
        </Box>
      )}

      <Dialog open={modalAberto} onClose={() => setModalAberto(false)} maxWidth="sm" fullWidth sx={{ '& .MuiDialog-paper': { borderRadius: 3 } }}>
        <DialogTitle sx={{ fontWeight: 700 }}>
          {modoModal === 'criar' ? 'Nova Acomodação' : 'Editar Acomodação'}
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 1 }}>

            <Autocomplete
              freeSolo
              options={NOMES_SUGERIDOS}
              value={nomeAcomadacao}
              onInputChange={(_, valor) => setNomeAcomadacao(valor)}
              renderInput={(params) => (
                <TextField {...params} label="Nome da Acomodação *" fullWidth
                  helperText="Escolha um dos padrões ou digite um nome personalizado" />
              )}
            />

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField label="Camas Casal" type="number" fullWidth value={camaCasal}
                onChange={(e) => setCamaCasal(Number(e.target.value))}
                slotProps={{ htmlInput: { min: 0 } }} />
              <TextField label="Camas Solteiro" type="number" fullWidth value={camaSolteiro}
                onChange={(e) => setCamaSolteiro(Number(e.target.value))}
                slotProps={{ htmlInput: { min: 0 } }} />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField label="Suítes" type="number" fullWidth value={suite}
                onChange={(e) => setSuite(Number(e.target.value))}
                slotProps={{ htmlInput: { min: 0 } }} />
              <TextField label="Vagas Garagem" type="number" fullWidth value={garagem}
                onChange={(e) => setGaragem(Number(e.target.value))}
                slotProps={{ htmlInput: { min: 0 } }} />
            </Box>
            <FormControlLabel
              control={<Switch checked={climatizacao} onChange={(e) => setClimatizacao(e.target.checked)} color="info" />}
              label="Possui Climatização"
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setModalAberto(false)} color="inherit" sx={{ borderRadius: 2 }}>Cancelar</Button>
          <Button onClick={handleSalvar} variant="contained" color="secondary" sx={{ borderRadius: 2 }}>
            {modoModal === 'criar' ? 'Cadastrar' : 'Salvar Alterações'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};