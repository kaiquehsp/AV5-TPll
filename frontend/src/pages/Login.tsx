import { Box, Button, Card, Typography, TextField, InputAdornment, Container } from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  

  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        bgcolor: '#1976d2',
        p: 2
      }}
    >
      <Container maxWidth="xs">
        <Card 
          elevation={10} 
          sx={{ 
            borderRadius: 5, 
            bgcolor: '#ffffff',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)'
          }}
        >
          <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box 
              sx={{ 
                width: 80, 
                height: 80, 
                bgcolor: '#1976d2', 
                borderRadius: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                mb: 3,
                transform: 'rotate(-5deg)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
              }}
            >
              <HotelIcon sx={{ fontSize: 45, color: '#fff' }} />
            </Box>

            <Typography variant="h4" sx={{ fontWeight: 800, color: '#1e293b', mb: 1 }}>
              Atlantis
            </Typography>
            <Typography variant="body2" sx={{ mb: 5, color: '#64748b', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Gestão Hoteleira
            </Typography>

            <Box component="form" onSubmit={handleLogin} sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                fullWidth
                label="Usuário"
                variant="outlined"
                defaultValue="admin"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="primary" />
                      </InputAdornment>
                    ),
                    sx: { borderRadius: 3 }
                  }
                }}
              />
              <TextField
                fullWidth
                label="Senha"
                type="password"
                variant="outlined"
                defaultValue="123456"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon color="primary" />
                      </InputAdornment>
                    ),
                    sx: { borderRadius: 3 }
                  }
                }}
              />
              
              <Button 
                type="submit" 
                fullWidth 
                variant="contained" 
                size="large"
                sx={{ 
                  mt: 2, 
                  py: 1.8, 
                  borderRadius: 3, 
                  fontSize: '1rem',
                  fontWeight: 700,
                  textTransform: 'none',
                  boxShadow: '0 6px 12px rgba(25, 118, 210, 0.2)'
                }}
              >
                Entrar
              </Button>
            </Box>
          </Box>
          <Box sx={{ p: 2, bgcolor: '#f8fafc', textAlign: 'center', borderTop: '1px solid #e2e8f0' }}>
            <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 600 }}>
              © 2026 Atlantis Spa & Resorts
            </Typography>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};