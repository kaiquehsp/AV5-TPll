import { useState } from 'react';
import { 
  Typography, Box, Button, Paper, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Dialog, DialogTitle, DialogContent, DialogActions, 
  TextField, Divider, MenuItem, IconButton, Tooltip, Chip
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useArmazem } from '../contexts/ArmazemContext';
import type { Cliente, TipoDocumento } from '../models/types';

export const Clientes = () => {
  const { clientes, adicionarCliente, atualizarClienteCtx, removerCliente } = useArmazem();
  
  const [modalAberto, setModalAberto] = useState(false);
  const [modoModal, setModoModal] = useState<'criar' | 'editar' | 'visualizar'>('criar');
  const [idSelecionado, setIdSelecionado] = useState<string | null>(null);

  const [nome, setNome] = useState('');
  const [nomeSocial, setNomeSocial] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [tipoDoc, setTipoDoc] = useState<TipoDocumento>('CPF');
  const [numeroDoc, setNumeroDoc] = useState('');
  const [ddd, setDdd] = useState('');
  const [telefone, setTelefone] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('Brasil');
  const [codigoPostal, setCodigoPostal] = useState('');

  const handleApenasLetras = (valor: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter(valor.replace(/[0-9]/g, ''));
  };

  const handleApenasNumeros = (valor: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter(valor.replace(/\D/g, ''));
  };

  const handleDocumentoChange = (valor: string) => {
    if (tipoDoc === 'CPF' || tipoDoc === 'RG') {
      setNumeroDoc(valor.replace(/\D/g, ''));
    } else if (tipoDoc === 'Passaporte') {
      setNumeroDoc(valor.replace(/[^a-zA-Z0-9]/g, '').toUpperCase());
    }
  };

  const getMaxLengthDoc = () => {
    if (tipoDoc === 'CPF') return 11;
    if (tipoDoc === 'RG') return 9;
    if (tipoDoc === 'Passaporte') return 8;
    return 14;
  };

  const abrirModal = (modo: 'criar' | 'editar' | 'visualizar', cliente?: Cliente) => {
    setModoModal(modo);
    if (cliente) {
      setIdSelecionado(cliente.id);
      setNome(cliente.nome);
      setNomeSocial(cliente.nomeSocial || '');
      const dataFormatada = String(cliente.dataNascimento).split('T')[0];
      setDataNascimento(dataFormatada);
      setTipoDoc(cliente.documentos[0]?.tipo || 'CPF');
      setNumeroDoc(cliente.documentos[0]?.numero || '');
      setDdd(cliente.telefones?.[0]?.ddd || '');
      setTelefone(cliente.telefones?.[0]?.numero || '');
      setRua(cliente.endereco?.rua || '');
      setBairro(cliente.endereco?.bairro || '');
      setCidade(cliente.endereco?.cidade || '');
      setEstado(cliente.endereco?.estado || '');
      setPais(cliente.endereco?.pais || 'Brasil');
      setCodigoPostal(cliente.endereco?.codigoPostal || '');
    } else {
      setIdSelecionado(null);
      setNome(''); setNomeSocial(''); setDataNascimento('');
      setTipoDoc('CPF'); setNumeroDoc(''); setDdd(''); setTelefone('');
      setRua(''); setBairro(''); setCidade(''); setEstado(''); setPais('Brasil'); setCodigoPostal('');
    }
    setModalAberto(true);
  };

  const handleSalvar = () => {
    if (!nome || !dataNascimento || !numeroDoc) {
      alert("Campos obrigatórios ausentes.");
      return;
    }
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    if (nascimento > hoje) {
      alert("Erro de Validação: A data de nascimento não pode ser no futuro.");
      return;
    }
    if (tipoDoc === 'CPF' && numeroDoc.length !== 11) {
      alert("Erro de Validação: O CPF deve conter exatamente 11 dígitos.");
      return;
    }
    if (tipoDoc === 'RG' && (numeroDoc.length < 7 || numeroDoc.length > 9)) {
      alert("Erro de Validação: O RG deve conter entre 7 e 9 dígitos.");
      return;
    }
    if (tipoDoc === 'Passaporte' && numeroDoc.length !== 8) {
      alert("Erro de Validação: O Passaporte deve conter 8 caracteres.");
      return;
    }
    if (modoModal === 'criar') {
      const documentoJaExiste = clientes.some(c => c.documentos.some(d => d.numero === numeroDoc));
      if (documentoJaExiste) {
        alert(`Integridade violada: Este número de ${tipoDoc} já está cadastrado.`);
        return;
      }
    }

    const payload = {
      nome,
      nomeSocial,
      dataNascimento,
      telefones: ddd && telefone ? [{ id: crypto.randomUUID(), ddd, numero: telefone }] : [],
      documentos: [{ id: crypto.randomUUID(), tipo: tipoDoc, numero: numeroDoc, dataExpedicao: new Date().toISOString() }],
      endereco: { rua, bairro, cidade, estado, pais, codigoPostal },
    };

    if (modoModal === 'editar' && idSelecionado) {
      atualizarClienteCtx(idSelecionado, payload);
    } else {
      adicionarCliente(payload);
    }
    setModalAberto(false);
  };

  const isDesabilitado = modoModal === 'visualizar';
  const hojeString = new Date().toISOString().split('T')[0];

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: '#333' }}>Gestão de Hóspedes</Typography>
        <Button 
          variant="contained" 
          startIcon={<PersonAddIcon />} 
          onClick={() => abrirModal('criar')}
          sx={{ borderRadius: 2, px: 3, py: 1 }}
        >
          Novo Hóspede
        </Button>
      </Box>

      <TableContainer component={Paper} elevation={0} sx={{ borderRadius: 3, border: '1px solid #e0e0e0' }}>
        <Table>
          <TableHead sx={{ bgcolor: '#f8f9fa' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Nome Completo</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Documentação</TableCell>
              <TableCell align="right" sx={{ fontWeight: 600 }}>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes.length === 0 ? (
              <TableRow><TableCell colSpan={3} align="center" sx={{ py: 4, color: 'text.secondary' }}>Nenhum hóspede cadastrado.</TableCell></TableRow>
            ) : (
              clientes.map((cliente) => (
                <TableRow key={cliente.id} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>{cliente.nome}</Typography>
                    {cliente.nomeSocial && <Typography variant="caption" color="text.secondary">Social: {cliente.nomeSocial}</Typography>}
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Chip label={cliente.documentos[0]?.tipo} size="small" color="primary" variant="outlined" />
                      <Typography variant="body2">{cliente.documentos[0]?.numero}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Visualizar"><IconButton color="info" onClick={() => abrirModal('visualizar', cliente)}><VisibilityIcon /></IconButton></Tooltip>
                    <Tooltip title="Editar"><IconButton color="warning" onClick={() => abrirModal('editar', cliente)}><EditIcon /></IconButton></Tooltip>
                    <Tooltip title="Excluir">
  <IconButton color="error" onClick={async () => {
    if (window.confirm(`Deseja excluir ${cliente.nome}?`)) {
      try {
        await removerCliente(cliente.id);
      } catch (error: any) {
        const mensagem = error?.response?.data?.erro || 'Erro ao remover cliente.';
        alert(mensagem);
      }
    }
  }}>
    <DeleteIcon />
  </IconButton>
</Tooltip>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={modalAberto} onClose={() => setModalAberto(false)} maxWidth="md" fullWidth sx={{ '& .MuiDialog-paper': { borderRadius: 3 } }}>
        <DialogTitle sx={{ fontWeight: 700, pb: 1 }}>
          {modoModal === 'criar' ? 'Cadastrar Novo Hóspede' : modoModal === 'editar' ? 'Editar Dossiê do Hóspede' : 'Ficha Cadastral'}
        </DialogTitle>
        <DialogContent dividers>
          <Divider sx={{ mb: 3, mt: 1 }} textAlign="left"><Chip label="Dados Pessoais" size="small" /></Divider>
          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            <TextField label="Nome Completo *" fullWidth value={nome} disabled={isDesabilitado} onChange={(e) => handleApenasLetras(e.target.value, setNome)} />
            <TextField label="Nome Social" fullWidth value={nomeSocial} disabled={isDesabilitado} onChange={(e) => handleApenasLetras(e.target.value, setNomeSocial)} />
            <TextField label="Nascimento *" type="date" fullWidth value={dataNascimento} disabled={isDesabilitado} onChange={(e) => setDataNascimento(e.target.value)} slotProps={{ inputLabel: { shrink: true }, htmlInput: { max: hojeString } }} />
          </Box>

          <Divider sx={{ mb: 3 }} textAlign="left"><Chip label="Documentação" size="small" /></Divider>
          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            <TextField select label="Tipo *" value={tipoDoc} disabled={isDesabilitado || modoModal === 'editar'} onChange={(e) => { setTipoDoc(e.target.value as TipoDocumento); setNumeroDoc(''); }} sx={{ width: '30%' }}>
              <MenuItem value="CPF">CPF</MenuItem>
              <MenuItem value="RG">RG</MenuItem>
              <MenuItem value="Passaporte">Passaporte</MenuItem>
            </TextField>
            <TextField label={`Número do(a) ${tipoDoc} *`} fullWidth value={numeroDoc} disabled={isDesabilitado || modoModal === 'editar'} onChange={(e) => handleDocumentoChange(e.target.value)} slotProps={{ htmlInput: { maxLength: getMaxLengthDoc() } }} helperText={isDesabilitado ? "" : `Limite: ${getMaxLengthDoc()} caracteres.`} />
          </Box>

          <Divider sx={{ mb: 3 }} textAlign="left"><Chip label="Endereço e Contato" size="small" /></Divider>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
            <TextField label="Rua *" value={rua} disabled={isDesabilitado} onChange={(e) => handleApenasLetras(e.target.value, setRua)} sx={{ flexGrow: 1 }} />
            <TextField label="Bairro *" value={bairro} disabled={isDesabilitado} onChange={(e) => handleApenasLetras(e.target.value, setBairro)} sx={{ flexGrow: 1 }} />
          </Box>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField label="Cidade *" fullWidth value={cidade} disabled={isDesabilitado} onChange={(e) => handleApenasLetras(e.target.value, setCidade)} />
            <TextField label="UF *" value={estado} disabled={isDesabilitado} onChange={(e) => handleApenasLetras(e.target.value, setEstado)} slotProps={{ htmlInput: { maxLength: 2 } }} sx={{ width: '20%' }} />
            <TextField label="País *" value={pais} disabled={isDesabilitado} onChange={(e) => handleApenasLetras(e.target.value, setPais)} sx={{ width: '30%' }} />
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField label="CEP *" value={codigoPostal} disabled={isDesabilitado} onChange={(e) => handleApenasNumeros(e.target.value, setCodigoPostal)} slotProps={{ htmlInput: { maxLength: 8 } }} sx={{ width: '30%' }} />
            <TextField label="DDD" value={ddd} disabled={isDesabilitado} onChange={(e) => handleApenasNumeros(e.target.value, setDdd)} slotProps={{ htmlInput: { maxLength: 2 } }} sx={{ width: '20%' }} />
            <TextField label="Telefone" fullWidth value={telefone} disabled={isDesabilitado} onChange={(e) => handleApenasNumeros(e.target.value, setTelefone)} slotProps={{ htmlInput: { maxLength: 9 } }} />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setModalAberto(false)} color="inherit" sx={{ borderRadius: 2 }}>Fechar</Button>
          {!isDesabilitado && <Button onClick={handleSalvar} variant="contained" color="primary" sx={{ borderRadius: 2 }}>Confirmar Salvar</Button>}
        </DialogActions>
      </Dialog>
    </Box>
  );
};