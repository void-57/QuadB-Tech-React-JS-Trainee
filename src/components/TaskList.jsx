import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  selectTasksLoading,
  selectTasksError,
} from "../features/tasks/tasksSlice";
import { setTasks } from "../features/tasks/tasksSlice";
import { loadTasksFromLocalStorage } from "../services/localStorage";
import TaskItem from "./TaskItem";

import "../styles/TaskList.css";
import { Alert, CircularProgress, List } from "@mui/material";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
   // sorting logic 
   const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
  const loading = useSelector(selectTasksLoading);
  const error = useSelector(selectTasksError);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTasks = loadTasksFromLocalStorage();
    if (savedTasks.length > 0) {
      dispatch(setTasks(savedTasks));
    }
  }, [dispatch]);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <List className="task-list">
      {tasks.length === 0 ? (
        <Alert severity="info">No tasks yet. Add one above!</Alert>
      ) : (
        sortedTasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </List>
  );
};

export default TaskList;
