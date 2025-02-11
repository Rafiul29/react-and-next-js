import { useTaskContext } from "../contexts/useContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useTaskContext();

  return (
    <>
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </>
  );
};

export default TaskList;
