import React, {useEffect} from 'react';
import { Container, Typography, Box ,Link} from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import { Link as RouterLink } from 'react-router-dom';
export default function Welcome() {
  const { userEmail } = useAuth();
  useEffect(() => {
    console.log('Welcome page email:', userEmail); // Debugging line
  }, [userEmail]);
  return (
    <Container component="main">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
        }}
      >
        <Link component={RouterLink} to="/" >Go to Home Page</Link>
        <Typography component="h1" variant="h4" sx={{ textAlign: 'center', color: '#1B4B66' }}>
          Welcome to Our E-commerce Website
        </Typography>
        {userEmail && (
          <Typography component="h2" variant="h6" sx={{ textAlign: 'center', marginTop: 2 }}>
            Your email: {userEmail}
          </Typography>
        )}
      </Box>
    </Container>
  );
}
