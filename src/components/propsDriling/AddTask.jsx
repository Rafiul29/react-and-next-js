import React, { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");

  return (
    <div className="space-x-2">
      {" "}
      <input
        className="border p-1 rounded-md"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        className="px-3 bg-gray-200 rounded"
        onClick={(e) => {
          setText("");
          onAddTask(text);
        }}
      >
        Save
      </button>
    </div>
  );
};

export default AddTask;
