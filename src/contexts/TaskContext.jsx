import { createContext, useReducer } from "react";
import { initialTasks } from "../components/data/data";
import { tasksReducer } from "../components/taskReducer";

export const TasksConext = createContext(null);

export const TasksProvider = ({ children }) => {

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksConext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksConext.Provider>
  );
};
