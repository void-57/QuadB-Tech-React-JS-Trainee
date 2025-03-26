import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, selectAuthStatus, selectAuthError } from '../features/auth/authSlice';
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  CircularProgress,
  InputAdornment,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    showPassword: false
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(selectAuthStatus);
  const error = useSelector(selectAuthError);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isLoading = status === 'loading';

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(credentials)).unwrap();
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setCredentials({
      ...credentials,
      showPassword: !credentials.showPassword
    });
  };

  return (
    <Container 
      maxWidth="xs"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        py: 4
      }}
    >
      <Box
        sx={{
          p: isMobile ? 2 : 4,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          boxShadow: 1
        }}
      >
        <Typography 
          variant={isMobile ? 'h5' : 'h4'} 
          component="h1" 
          gutterBottom 
          sx={{ textAlign: 'center', mb: 3 }}
        >
          Login
        </Typography>

        {error && (
          <Box 
            sx={{ 
              bgcolor: 'error.light', 
              color: 'error.contrastText', 
              p: 2, 
              mb: 3, 
              borderRadius: 1 
            }}
          >
            <Typography variant="body2">{error}</Typography>
          </Box>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            margin="normal"
            required
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type={credentials.showPassword ? 'text' : 'password'}
            value={credentials.password}
            onChange={handleChange}
            margin="normal"
            required
            sx={{ mb: 3 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={togglePasswordVisibility}
                    edge="end"
                  >
                    {credentials.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            size={isMobile ? 'medium' : 'large'}
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Sign In'
            )}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;