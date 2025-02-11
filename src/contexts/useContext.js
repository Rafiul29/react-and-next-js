import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { TasksConext } from "./TaskContext";

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    return;
  }

  return theme;
};

export const useTaskContext = () => {
  const data = useContext(TasksConext);

  if (!data) return;
  return data;
};
