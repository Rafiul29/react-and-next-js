import Task from "./Task";

const TaskList = ({ tasks ,onDelete,oneEdit }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} key={task.id}  onDelete={onDelete} oneEdit={oneEdit}/>
      ))}
    </>
  );
};

export default TaskList;
