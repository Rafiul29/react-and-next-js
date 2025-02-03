import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { initialTasks } from ".././data/data,js";
import { useState } from "react";

const TaskApp = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextId = (data) => {
    if (data.length > 0) return 1;
    const maxId = data?.reduce(
      (prev, curr) => (prev && prev.id > curr.id ? prev.id : curr.id),
      0
    );
    return maxId + 1;
  };

  const addTaskHandle = (text) => {
    setTasks([
      ...tasks,
      {
        text,
        id: getNextId(tasks),
        done: false,
      },
    ]);
  };

  const handleEdit = (task) => {
    setTasks(tasks.map((t) => (t.id == task.id ? task : t)));
  };

  const deleteHandle = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={addTaskHandle} />
      <TaskList tasks={tasks} onDelete={deleteHandle} oneEdit={handleEdit} />
    </>
  );
};

export default TaskApp;
