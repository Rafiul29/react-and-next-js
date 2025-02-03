import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { initialTasks } from ".././data/data,js";
import { useReducer, useState } from "react";
import { tasksReducer } from "./tasksReducer";

const TaskApp = () => {
  // const [tasks, setTasks] = useState(initialTasks);
  const [tasks,dispatch]=useReducer(tasksReducer,initialTasks)

  const getNextId = (data) => {
    if (data.length > 0) return 1;
    const maxId = data?.reduce(
      (prev, curr) => (prev && prev.id > curr.id ? prev.id : curr.id),
      0
    );
    return maxId + 1;
  };

  const addTaskHandle = (text) => {
    dispatch({
      type:"added",
      id:getNextId(tasks),
      text:text
    })
  };

  const handleEdit = (task) => {
   dispatch({
    type:'change',
    task:task,
   })
  };

  const deleteHandle = (id) => {
    dispatch({
      type:'deleted',
      id:id,
     })
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
