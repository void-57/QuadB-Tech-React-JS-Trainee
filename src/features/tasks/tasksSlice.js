import { createSlice } from '@reduxjs/toolkit';
import { fetchWeather } from '../../services/weather';
import { saveTasksToLocalStorage } from '../../services/localStorage';

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTaskStart(state) {
      state.loading = true;
      state.error = null;
    },
    addTaskSuccess(state, action) {
      state.tasks.push(action.payload);
      state.loading = false;
      saveTasksToLocalStorage(state.tasks);
    },
    addTaskFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    setTasks(state, action) {
      state.tasks = action.payload;
    },
  },
});

export const { addTaskStart, addTaskSuccess, addTaskFailure, deleteTask, setTasks } = tasksSlice.actions;

export const addTask = (taskData) => async (dispatch) => {
  try {
    dispatch(addTaskStart());
    
    // Add weather data if task contains location info
    let weather = null;
    if (taskData.location) {
      try {
        weather = await fetchWeather(taskData.location);
      } catch (error) {
        console.error('Failed to fetch weather:', error);
      }
    }

    const newTask = {
      id: Date.now(),
      text: taskData.text,
      priority: taskData.priority || 'medium',
      completed: false,
      createdAt: new Date().toISOString(),
      weather,
    };

    dispatch(addTaskSuccess(newTask));
  } catch (error) {
    dispatch(addTaskFailure(error.message));
  }
};

export const selectTasks = (state) => state.tasks.tasks;
export const selectTasksLoading = (state) => state.tasks.loading;
export const selectTasksError = (state) => state.tasks.error;

export default tasksSlice.reducer;