


import React from "react";
import { useDrop } from "react-dnd";
import Task from "./Task";

const ItemType = {
  TASK: "task",
};

const TaskColumn = ({ title, tasks, category, moveTask, }) => {

    console.log(tasks);

  const [{ isOver }, drop] = useDrop({

    accept: ItemType.TASK,
    drop: (item) => moveTask(item.id, item.category, category),

    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  console.log(tasks,category);



  return (
    <div

      ref={drop}
      className={`border p-4 w-full min-h-[200px] ${
        isOver ? "bg-gray-200" : "bg-gray-100"
      }`}
    >
      <h2 className="font-bold text-lg">{category}</h2>

      {tasks.map((task, index) => (

        <Task key={task._id} task={task} index={index}   />

      ))}
    </div>
  );
};

export default TaskColumn;
