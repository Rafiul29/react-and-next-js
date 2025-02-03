import React, { useState } from "react";

const Task = ({ task, onDelete, oneEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

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
            oneEdit({
              ...task,
              text: e.target.value,
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
          oneEdit({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {content}
      <button
        className="px-3 bg-gray-200 rounded"
        onClick={() => onDelete(task.id)}
      >
        delete
      </button>
    </div>
  );
};

export default Task;
