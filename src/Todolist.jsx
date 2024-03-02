// Loom video on how the UI works

// https://www.loom.com/share/2eee8a59f92547beb888635df6f69a93?sid=df495bc8-f0ff-4447-90a9-c38823262157

import React, { useState } from "react";
import owner from "./assets/Ellipse 2.png";
import trophy from "./assets/Group 27.png";

const Todolist = () => {
  const [tasks, setTasks] = useState([
    "Training at the gym",
    "Study for exam",
    "Finish project",
  ]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedInput, setEditedInput] = useState("");

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleAddTask = () => {
    if (editedInput.trim() !== "") {
      setTasks([...tasks, editedInput]);
      setEditedInput("");
    }
  };

  const handleSave = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex] = editedInput;
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditedInput("");
  };

  const handleDelete = () => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(editingIndex, 1);
    setTasks(updatedTasks);
    setEditingIndex(null);
  };

  return (
    <div className="flex justify-center mt-[50px]">
      <div className="flex flex-col shadow-xl gap-10">
        <div>
          <div className="bg-[#3556AB] flex gap-5 h-[60px] text-white">
            <img
              src={owner}
              alt="this the owner of the task"
              className="flex p-3"
            />
            <div style={{ fontFamily: "roboto" }} className=" p-2">
              <p>Hello John</p>
              <p className="flex text-[gray] italic">
                What are your plans today?
              </p>
            </div>
          </div>
          <div className=" bg-[#CDE53D] flex justify-between p-2 gap-5">
            <img src={trophy} alt="this is a trophy" />
            <p>Go Pro Upgrade Now</p>
            <p className="bg-[#071D55;] text-[#F2C94C] p-3 relative bottom-2">
              &#36;1
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 px-5">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex justify-between shadow-2xl p-3 bg-white"
            >
              <input type="checkbox" />
              {editingIndex === index ? <>{task}</> : <p>{task}</p>}
              {editingIndex === index ? (
                <button
                  className="border-2 p-1"
                  onClick={() => handleSave(index)}
                >
                  Save
                </button>
              ) : (
                <button
                  className="border-2 p-1"
                  onClick={() => handleEdit(index, task)}
                >
                  Edit
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-end p-5">
          <button
            className="bg-[#3556AB] rounded-full h-[40px] w-[40px] flex justify-center items-center text-white text-[19px]"
            onClick={() => handleAddTask()}
          >
            +
          </button>
        </div>
      </div>
      <div className="bg-[#fff] shadow-xl w-[500px]">
        <div className="flex justify-center items-center bg-[#3556AB] h-[60px] text-white">
          <p>Create/Edit Task</p>
        </div>
        <div className="flex flex-col gap-[280px] bg-[#fff p-5">
          <div>
            <p>Create/Edit Task</p>
            <input
              type="text"
              className=" flex p-3 border-2 rounded-md w-full"
              value={editedInput}
              onChange={(e) => setEditedInput(e.target.value)}
            />
          </div>
          <div className="flex justify-center gap-4 text-white">
            <button
              className="flex justify-center items-center bg-red-500 p-3 rounded-md w-[30%] border border-black"
              onClick={() => handleDelete()}
            >
              Delete
            </button>
            <button
              className="bg-[#3556AB] p-3 rounded-md w-[70%]"
              onClick={() => handleSave()}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
