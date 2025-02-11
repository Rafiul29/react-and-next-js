import React, { useState } from "react";
import { useTaskContext } from "../contexts/useContext";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { dispatch } = useTaskContext();

  let content;

  if (!isEditing) {
    content = (
      <>
        {task.text}
        <button
          className="px-3 bg-gray-200 rounded"
          onClick={(e) => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      </>
    );
  } else {
    content = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "change",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
          className="border p-1 rounded-md"
        />
        <button
          onClick={() => {
            setIsEditing(false);
          }}
          className="px-3 bg-gray-200 rounded"
        >
          Save
        </button>
      </>
    );
  }

  return (
    <div className="space-y-2 space-x-2">
      <input
        type="checkbox"
        name=""
        id=""
        checked={task.done}
        onChange={(e) => {
          dispatch({
            task: {
              ...task,
              done: e.target.checked,
            },
            type: "change",
          });
        }}
      />
      {content}
      <button
        className="px-3 bg-gray-200 rounded"
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        delete
      </button>
    </div>
  );
};

export default Task;
