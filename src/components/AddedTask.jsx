import React from "react";
import useAddTask from "../Hook/useAddTask";
import { useDroppable } from "@dnd-kit/core";

useDroppable
function AddedTask() {
  const { task } = useAddTask();

  const ToDo = task.filter((item) => item.category === "ToDo");
  const InProcessing = task.filter((item) => item.category === "InProcessing");
  const Done = task.filter((item) => item.category === "Done");

  console.log(ToDo);
  console.log(InProcessing);
  console.log(Done);
  console.log(task, "task");

  //   drop

  const {isOver , sentNodeRef} = useDroppable({
    id: "id",

  })
  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <div>
      <section className="grid grid-cols-3 gap-4 py-10 px-4">
        <div className="border flex flex-col gap-2 cursor-grab">
          {ToDo.map((item, key) => (
            <div key={key} className="border" ref={sentNodeRef} style={style}>
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>{item.category}</p>
            </div>
          ))}
        </div>

        <div className="border flex gap-2  cursor-grab">
          {InProcessing.map((item, key) => (
            <div key={key} className="border">
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>{item.category}</p>
            </div>
          ))}
        </div>

        <div className="border flex gap-2 cursor-grab">
          {Done.map((item, key) => (
            <div key={key}>
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>{item.category}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AddedTask;
