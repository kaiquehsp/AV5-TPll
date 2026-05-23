import { useState } from 'react';
import { 
  Typography, Box, Button, Paper, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Dialog, DialogTitle, DialogContent, DialogActions, TextField, MenuItem, Chip 
} from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LogoutIcon from '@mui/icons-material/Logout';
import { useArmazem } from '../contexts/ArmazemContext';
import type { Hospedagem } from '../models/types';

export const Hospedagens = () => {
  const { clientes, acomodacoes, hospedagens, adicionarHospedagem, removerHospedagem } = useArmazem();
  const [modalAberto, setModalAberto] = useState(false);
  const [clienteSelecionado, setClienteSelecionado] = useState('');
  const [acomodacaoSelecionada, setAcomodacaoSelecionada] = useState('');

  const hospedesDisponiveis = clientes.filter(c => !hospedagens.some(h => h.clienteId === c.id));
  const quartosDisponiveis = acomodacoes.filter(a => !hospedagens.some(h => h.acomodacaoId === a.id));

  const handleCheckIn = () => {
    if (!clienteSelecionado || !acomodacaoSelecionada) {
      alert("Preencha todos os campos.");
      return;
    }
    const novaHospedagem: Hospedagem = {
      id: crypto.randomUUID(),
      clienteId: clienteSelecionado,
      acomodacaoId: acomodacaoSelecionada,
      dataEntrada: new Date().toISOString()
    };
    adicionarHospedagem(novaHospedagem);
    setModalAberto(false);
    setClienteSelecionado('');
    setAcomodacaoSelecionada('');
  };

  const getNomeCliente = (id: string) => clientes.find(c => c.id === id)?.nome || 'Desconhecido';
  const getNomeQuarto = (id: string) => acomodacoes.find(a => a.id === id)?.nomeAcomadacao || 'Desconhecido';

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: '#333' }}>Ocupação e Check-in</Typography>
        <Button 
          variant="contained" 
          color="success"
          startIcon={<AssignmentTurnedInIcon />}
          onClick={() => setModalAberto(true)}
          disabled={hospedesDisponiveis.length === 0 || quartosDisponiveis.length === 0}
          sx={{ borderRadius: 2, px: 3, py: 1 }}
        >
          Check-in
        </Button>
      </Box>

      <TableContainer component={Paper} elevation={0} sx={{ borderRadius: 3, border: '1px solid #e0e0e0' }}>
        <Table>
          <TableHead sx={{ bgcolor: '#f8f9fa' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Hóspede Alocado</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Quarto</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Entrada</TableCell>
              <TableCell align="right" sx={{ fontWeight: 600 }}>Gerenciar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hospedagens.length === 0 ? (
              <TableRow><TableCell colSpan={4} align="center" sx={{ py: 4, color: 'text.secondary' }}>Não há ocupações ativas.</TableCell></TableRow>
            ) : (
              hospedagens.map((hosp) => (
                <TableRow key={hosp.id} hover>
                  <TableCell sx={{ fontWeight: 500 }}>{getNomeCliente(hosp.clienteId)}</TableCell>
                  <TableCell><Chip label={getNomeQuarto(hosp.acomodacaoId)} color="secondary" variant="outlined" size="small" sx={{ borderRadius: 2 }} /></TableCell>
                  <TableCell sx={{ color: 'text.secondary' }}>{new Date(hosp.dataEntrada).toLocaleString('pt-BR')}</TableCell>
                  <TableCell align="right">
                    <Button 
                      size="small" 
                      color="error" 
                      variant="outlined"
                      startIcon={<LogoutIcon />}
                      sx={{ borderRadius: 2 }}
                      onClick={() => { if(window.confirm("Confirmar check-out?")) removerHospedagem(hosp.id); }}
                    >
                      Check-out
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={modalAberto} onClose={() => setModalAberto(false)} maxWidth="sm" fullWidth sx={{ '& .MuiDialog-paper': { borderRadius: 3 } }}>
        <DialogTitle sx={{ fontWeight: 700 }}>Vincular Hóspede</DialogTitle>
        <DialogContent dividers>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 1 }}>
            <TextField select label="Hóspede Livre *" value={clienteSelecionado} onChange={(e) => setClienteSelecionado(e.target.value)} fullWidth>
              {hospedesDisponiveis.map((c) => <MenuItem key={c.id} value={c.id}>{c.nome}</MenuItem>)}
            </TextField>
            <TextField select label="Quarto Vago *" value={acomodacaoSelecionada} onChange={(e) => setAcomodacaoSelecionada(e.target.value)} fullWidth>
              {quartosDisponiveis.map((a) => <MenuItem key={a.id} value={a.id}>{a.nomeAcomadacao}</MenuItem>)}
            </TextField>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setModalAberto(false)} color="inherit" sx={{ borderRadius: 2 }}>Cancelar</Button>
          <Button onClick={handleCheckIn} variant="contained" color="success" sx={{ borderRadius: 2 }}>Efetivar Check-in</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};