import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import React from "react";
import useApi from "../api/useApi";

const ItemType = {
  TASK: "task", // Define the task type for drag and drop
};

const Task = ({ task, index }) => {

    const useaxiosapi = useApi();
  const [{ isDragging }, drag] = useDrag({
    type: ItemType.TASK,

    item: { id: task._id, index, category: task.Category },

    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const deleteButton = (id) =>{
    useaxiosapi.delete(`/tasks/${id}`)
    .then((res)=>{
        alert("delted")
    })
    .catch(error=>{
        alert("error on deleted")
    })
    console.log(id);
    alert(id);

  }

  return (
    <div
      ref={drag}
      className="border p-2 my-2 bg-white shadow-md cursor-grab flex w-full gap-2"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div className="w-4/5 border">
        <p>{task.Title}</p>
        <p>{task.Description}</p>
        <p>{task.category}</p>
      </div>

      <div className="flex gap-2">
        <button className="btn" onClick={()=> deleteButton(task._id)}>delete</button>
        <button className="btn">Update</button>
      </div>

    </div>
  );
};

export default Task;
