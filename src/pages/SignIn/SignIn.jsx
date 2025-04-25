import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Box,
  Grid,
  Typography,
  Container
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const { login } = useAuth();
  const [serverError, setServerError] = useState('');
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post('https://backend-final-g1-955g.onrender.com/api/auth/login', data)
      .then((response) => {
        login(response.data.token, data.email); // Pass email along with token
        navigate('/welcome'); // Use navigate instead of window.location.href
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          const data = error.response.data;

          if (data.Message) {
            setServerError(data.Message);
          }
        } else {
          console.error('Error:', error.message);
          setServerError('An unexpected error occurred');
        }
      });
  };



  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: 'Email is required', pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address'
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ''}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: 'Password is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : ''}
                />
              )}
            />

            {serverError && (
              <Typography color="error" align="center" sx={{ mt: 2 }}>
                {serverError}
              </Typography>
            )}

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5, mb: 3 }} />
      </Container>
    </ThemeProvider>
  );
}