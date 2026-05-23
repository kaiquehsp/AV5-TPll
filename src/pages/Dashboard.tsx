import { Typography, Box, Card, CardContent } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import HotelIcon from '@mui/icons-material/Hotel';
import { useArmazem } from '../contexts/ArmazemContext';

export const Dashboard = () => {
  const { clientes, acomodacoes, hospedagens } = useArmazem();

  const cardsIndicadores = [
    { titulo: "Hóspedes Cadastrados", valor: clientes.length, icone: <PeopleIcon sx={{ fontSize: 48, color: '#1976d2' }} /> },
    { titulo: "Total de Acomodações", valor: acomodacoes.length, icone: <MeetingRoomIcon sx={{ fontSize: 48, color: '#9c27b0' }} /> },
    { titulo: "Hospedagens Ativas", valor: hospedagens.length, icone: <HotelIcon sx={{ fontSize: 48, color: '#2e7d32' }} /> },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: '#333' }}>
        Painel de Controle
      </Typography>
      
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
        {cardsIndicadores.map((card, index) => (
          <Card 
            elevation={0} 
            key={index} 
            sx={{ 
              borderRadius: 4, 
              border: '1px solid #e0e0e0',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 24px rgba(0,0,0,0.1)' }
            }}
          >
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 4 }}>
              <Box>
                <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 500 }}>
                  {card.titulo}
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, color: '#222' }}>
                  {card.valor}
                </Typography>
              </Box>
              <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: '50%' }}>
                {card.icone}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};