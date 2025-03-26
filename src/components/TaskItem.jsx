import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/tasksSlice';
import {
  ListItem,
  ListItemText,
  IconButton,
  Chip,
  Box,
  Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const priorityColors = {
  high: 'error',
  medium: 'warning',
  low: 'success'
};

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const formattedDate = new Date(task.createdAt).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <ListItem
      secondaryAction={
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Chip 
            label={task.priority} 
            color={priorityColors[task.priority.toLowerCase()]} 
            size="small"
          />
          <IconButton edge="end" onClick={() => dispatch(deleteTask(task.id))}>
            <DeleteIcon />
          </IconButton>
        </Box>
      }
    >
      <ListItemText
        primary={
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {task.text}
          </Typography>
        }
        secondary={
          <Box component="span" sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body2" color="text.secondary">
              {formattedDate}
            </Typography>
            {task.weather && (
              <Typography variant="body2" color="text.secondary">
                {task.weather.temp}°C {task.weather.city && `in ${task.weather.city}`}
              </Typography>
            )}
          </Box>
        }
      />
    </ListItem>
  );
};

export default TaskItem;