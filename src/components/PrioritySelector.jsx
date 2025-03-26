import { MenuItem, Select, Chip } from '@mui/material';
import { useDispatch } from 'react-redux';

const priorityColors = {
  High: 'error',
  Medium: 'warning',
  Low: 'success'
};

const PrioritySelector = ({ currentPriority, taskId }) => {
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    dispatch(updateTaskPriority({
      id: taskId,
      priority: e.target.value
    }));
  };

  return (
    <Select
      value={currentPriority}
      onChange={handleChange}
      size="small"
      sx={{ minWidth: 110 }}
      renderValue={(selected) => (
        <Chip 
          label={selected} 
          color={priorityColors[selected]} 
          size="small" 
        />
      )}
    >
      <MenuItem value="High">
        <Chip label="High" color="error" size="small" />
      </MenuItem>
      <MenuItem value="Medium">
        <Chip label="Medium" color="warning" size="small" />
      </MenuItem>
      <MenuItem value="Low">
        <Chip label="Low" color="success" size="small" />
      </MenuItem>
    </Select>
  );
};

export default PrioritySelector;