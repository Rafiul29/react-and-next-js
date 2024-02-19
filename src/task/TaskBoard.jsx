import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "I want to Learn React such that I can treat it like my slve and ake it do whatever I want to do",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavourite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddMoal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  // add task
  function handleAddEditTask(newTask, isAdd) {
    setTaskToUpdate(null);
    if (isAdd) {
      setTaskToUpdate(null);
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          } else {
            return task;
          }
        })
      );
    }
    setShowAddModal(!showAddMoal);
  }

  // edit task
  function handleEdit(task) {
    setTaskToUpdate(task);
    setShowAddModal(!showAddMoal);
  }

  function handleDelete(id) {
    const filterTask = tasks.filter((task) => task.id !== id);
    setTasks(filterTask);
  }

  function handleClose() {
    setShowAddModal(!showAddMoal);
    setTaskToUpdate(null);
  }

  function handleDeleteAllClick() {
    tasks.length = 0;
    setTasks([...tasks]);
  }

  function handleFav(favTask) {
    const taskIndex = tasks.findIndex((task) => task.id === favTask.id);

    const newTask = [...tasks];

    newTask[taskIndex].isFavourite = !newTask[taskIndex].isFavourite;

    setTasks(newTask);

    // const allTask = tasks.map((task) => {
    //   if (task.id === favTask.id) {
    //     return {
    //       ...favTask,
    //       isFavourite: !favTask.isFavourite,
    //     };
    //   } else {
    //     return task;
    //   }
    // });
    // setTasks(allTask);
  }

  function handleSearch(searchTerm) {
    console.log(searchTerm);
    const filtered = tasks.filter((task) =>
      task.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setTasks([...filtered]);
  }
  return (
    <section className="mb-20" id="tasks">
      {showAddMoal && (
        <AddTaskModal
          onSave={handleAddEditTask}
          taskToUpdate={taskToUpdate}
          onCloseClick={handleClose}
        />
      )}
      <div className="container mx-auto">
        <div className="p-2 flex justify-end">
          <SearchTask onSearch={handleSearch} />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            onAddClick={() => setShowAddModal(!showAddMoal)}
            onAllTasksDelete={handleDeleteAllClick}
          />

          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onFav={handleFav}
            />
          ) : (
            <NoTaskFound />
          )}
          
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
