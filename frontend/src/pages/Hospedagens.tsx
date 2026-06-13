import { useState } from 'react';
import {
  Typography, Box, Button, Paper, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, MenuItem, Chip, IconButton, Tooltip
} from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useArmazem } from '../contexts/ArmazemContext';
import type { Hospedagem } from '../models/types';

export const Hospedagens = () => {
  const { clientes, acomodacoes, hospedagens, adicionarHospedagem, atualizarHospedagemCtx, removerHospedagem } = useArmazem();

  const [modalAberto, setModalAberto] = useState(false);
  const [modoModal, setModoModal] = useState<'criar' | 'editar' | 'visualizar'>('criar');
  const [selecionada, setSelecionada] = useState<Hospedagem | null>(null);
  const [clienteSelecionado, setClienteSelecionado] = useState('');
  const [acomodacaoSelecionada, setAcomodacaoSelecionada] = useState('');

  const hospedesDisponiveis = clientes.filter(c => !hospedagens.some(h => h.clienteId === c.id && !h.dataSaida));
  const quartosDisponiveis = acomodacoes.filter(a => !hospedagens.some(h => h.acomodacaoId === a.id && !h.dataSaida));

  const abrirCriar = () => {
    setSelecionada(null);
    setClienteSelecionado('');
    setAcomodacaoSelecionada('');
    setModoModal('criar');
    setModalAberto(true);
  };

  const abrirEditar = (hosp: Hospedagem) => {
    setSelecionada(hosp);
    setClienteSelecionado(hosp.clienteId);
    setAcomodacaoSelecionada(hosp.acomodacaoId);
    setModoModal('editar');
    setModalAberto(true);
  };

  const abrirVisualizar = (hosp: Hospedagem) => {
    setSelecionada(hosp);
    setClienteSelecionado(hosp.clienteId);
    setAcomodacaoSelecionada(hosp.acomodacaoId);
    setModoModal('visualizar');
    setModalAberto(true);
  };

  const handleSalvar = () => {
    if (!clienteSelecionado || !acomodacaoSelecionada) {
      alert("Preencha todos os campos.");
      return;
    }
    if (modoModal === 'criar') {
      adicionarHospedagem(clienteSelecionado, acomodacaoSelecionada);
    } else if (modoModal === 'editar' && selecionada) {
      atualizarHospedagemCtx(selecionada.id, clienteSelecionado, acomodacaoSelecionada);
    }
    setModalAberto(false);
  };

  const getNomeCliente = (id: string) => clientes.find(c => c.id === id)?.nome || 'Desconhecido';
  const getNomeQuarto = (id: string) => acomodacoes.find(a => a.id === id)?.nomeAcomadacao || 'Desconhecido';

  const clientesParaEdicao = modoModal === 'editar' && selecionada
    ? clientes.filter(c => c.id === selecionada.clienteId || !hospedagens.some(h => h.clienteId === c.id && !h.dataSaida))
    : hospedesDisponiveis;

  const quartosParaEdicao = modoModal === 'editar' && selecionada
    ? acomodacoes.filter(a => a.id === selecionada.acomodacaoId || !hospedagens.some(h => h.acomodacaoId === a.id && !h.dataSaida))
    : quartosDisponiveis;

  const isDesabilitado = modoModal === 'visualizar';

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: '#333' }}>Ocupação e Check-in</Typography>
        <Button
          variant="contained"
          color="success"
          startIcon={<AssignmentTurnedInIcon />}
          onClick={abrirCriar}
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
              <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
              <TableCell align="right" sx={{ fontWeight: 600 }}>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hospedagens.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ py: 4, color: 'text.secondary' }}>
                  Não há ocupações registradas.
                </TableCell>
              </TableRow>
            ) : (
              hospedagens.map((hosp) => (
                <TableRow key={hosp.id} hover>
                  <TableCell sx={{ fontWeight: 500 }}>{getNomeCliente(hosp.clienteId)}</TableCell>
                  <TableCell>
                    <Chip label={getNomeQuarto(hosp.acomodacaoId)} color="secondary" variant="outlined" size="small" sx={{ borderRadius: 2 }} />
                  </TableCell>
                  <TableCell sx={{ color: 'text.secondary' }}>
                    {new Date(hosp.dataEntrada).toLocaleString('pt-BR')}
                  </TableCell>
                  <TableCell>
                    {hosp.dataSaida
                      ? <Chip label={`Saída: ${new Date(hosp.dataSaida).toLocaleDateString('pt-BR')}`} color="default" size="small" sx={{ borderRadius: 2 }} />
                      : <Chip label="Ativo" color="success" size="small" sx={{ borderRadius: 2 }} />}
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Visualizar">
                      <IconButton size="small" color="info" onClick={() => abrirVisualizar(hosp)}>
                        <VisibilityIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    {!hosp.dataSaida && (
                      <Tooltip title="Editar">
                        <IconButton size="small" color="warning" onClick={() => abrirEditar(hosp)}>
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    )}
                    {!hosp.dataSaida && (
                      <Tooltip title="Check-out">
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => { if (window.confirm("Confirmar check-out?")) removerHospedagem(hosp.id); }}
                        >
                          <LogoutIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={modalAberto} onClose={() => setModalAberto(false)} maxWidth="sm" fullWidth sx={{ '& .MuiDialog-paper': { borderRadius: 3 } }}>
        <DialogTitle sx={{ fontWeight: 700 }}>
          {modoModal === 'criar' ? 'Novo Check-in' : modoModal === 'editar' ? 'Editar Hospedagem' : 'Detalhes da Hospedagem'}
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 1 }}>
            <TextField
              select
              label="Hóspede *"
              value={clienteSelecionado}
              onChange={(e) => setClienteSelecionado(e.target.value)}
              fullWidth
              disabled={isDesabilitado}
            >
              {clientesParaEdicao.map((c) => (
                <MenuItem key={c.id} value={c.id}>{c.nome}</MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Quarto *"
              value={acomodacaoSelecionada}
              onChange={(e) => setAcomodacaoSelecionada(e.target.value)}
              fullWidth
              disabled={isDesabilitado}
            >
              {quartosParaEdicao.map((a) => (
                <MenuItem key={a.id} value={a.id}>{a.nomeAcomadacao}</MenuItem>
              ))}
            </TextField>
            {modoModal !== 'criar' && selecionada && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="caption" color="text.secondary">
                  Entrada: {new Date(selecionada.dataEntrada).toLocaleString('pt-BR')}
                </Typography>
                {selecionada.dataSaida && (
                  <Typography variant="caption" color="text.secondary">
                    Saída: {new Date(selecionada.dataSaida).toLocaleString('pt-BR')}
                  </Typography>
                )}
              </Box>
            )}
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setModalAberto(false)} color="inherit" sx={{ borderRadius: 2 }}>
            {isDesabilitado ? 'Fechar' : 'Cancelar'}
          </Button>
          {!isDesabilitado && (
            <Button onClick={handleSalvar} variant="contained" color="success" sx={{ borderRadius: 2 }}>
              {modoModal === 'criar' ? 'Efetivar Check-in' : 'Salvar Alterações'}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};