import { useDispatch, useSelector } from 'react-redux';
import { logout, selectCurrentUser } from '../features/auth/authSlice';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Container,
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Logout } from '@mui/icons-material';
import TaskList from '../components/TaskList';
import TaskInput from '../components/TaskInput';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant={isMobile ? 'h6' : 'h5'} component="div" sx={{ flexGrow: 1 }}>
            Task Manager
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body1" sx={{ display: { xs: 'none', sm: 'block' } }}>
              {user?.username}
            </Typography>
            <IconButton color="inherit" onClick={handleLogout}>
              <Logout />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Container 
        maxWidth="lg" 
        sx={{ 
          py: isMobile ? 2 : 4,
          flex: 1 
        }}
      >
        <Typography 
          variant={isMobile ? 'h5' : 'h4'} 
          gutterBottom
        >
          Welcome, {user?.username}!
        </Typography>
        <TaskInput />
        <TaskList />
      </Container>
    </Box>
  );
};

export default Home;