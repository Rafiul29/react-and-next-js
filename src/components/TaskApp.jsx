import AddTask from "./AddTask";
import TaskList from "./TaskList";

const TaskApp = () => {
  return (
    <div>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default TaskApp;
