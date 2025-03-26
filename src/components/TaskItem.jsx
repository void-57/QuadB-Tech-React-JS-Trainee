import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/tasksSlice';
import {ListItem,ListItemText,ListItemSecondaryAction,IconButton,Chip} from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";

import WeatherInfo from './WeatherInfo';
import { format } from 'date-fns';

const priorityColors = {
  high: 'error',
  medium: 'warning',
  low: 'success',
};

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <ListItem>
      <ListItemText
        primary={task.text}
        secondary={
          <>
            {format(new Date(task.createdAt), 'MMM d, yyyy - h:mm a')}
            {task.weather && <WeatherInfo weather={task.weather} />}
          </>
        }
      />
      <Chip
        label={task.priority}
        color={priorityColors[task.priority]}
        size="small"
        sx={{ mr: 2 }}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskItem;