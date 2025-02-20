import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import React, { useState } from "react";
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

  const deleteButton = (id) => {
    useaxiosapi
      .delete(`/tasks/${id}`)
      .then((res) => {
        alert("delted");
      })
      .catch((error) => {
        alert("error on deleted");
      });
    console.log(id);
    alert(id);
  };

  // update opration
  const [ title , settitle ] = useState("");
  const [ description , setdescription ] = useState("");
  const [ category  , setcategory ] = useState("");

  const updateButton = (id) => {

    const updatetask = {
        Title : title,
        Description : description,
        Category: category,
    }

    useaxiosapi
      .put(`/tasks/${id}`,updatetask)
      .then((res) => {
        console.log(res);
        alert("taks update");
      })
      .catch((error) => {
        console.log("faled");
      });

    alert("task clicked");
  };

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
        <button className="btn" onClick={() => deleteButton(task._id)}>
          delete
        </button>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <section>
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          open modal
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <section className="flex flex-col gap-4 p-2 w-full">
              <input
                type="text"
                placeholder="Enter your title"
                maxLength={"50"}
                onChange={(e) => settitle(e.target.value)}
              />

              <textarea
                className="min-h-20"
                onChange={(e) => setdescription(e.target.value)}
                maxLength={"2000"}
              />

              <select
                name=""
                id=""
                onChange={(e) => setcategory(e.target.value)}
              >
                <option value={"To-Do"}>To-Do</option>
                <option value={"In Progress"}>In Progress</option>
                <option value={"Done"}>Done</option>
              </select>
            </section>

            <div className="modal-action">
              <form method="dialog" >
                <button
                  className="btn" type="submit"
                  onClick={() => document.getElementById("my_modal_1").close()}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>



      </section>


      </div>
    </div>
  );
};

export default Task;
