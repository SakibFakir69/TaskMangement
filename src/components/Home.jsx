import React, { useEffect, useState } from "react";
import useApi from "../api/useApi";
import axios from "axios";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Task from "./Task";
import TaskColumn from "./TaskColumn";

function Home() {
  
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("To-Do");
  const [ todo , settodo ] = useState([]);

  const useaxiosapi = useApi();





  const addTaskbutton =async (event) => {
    event.preventDefault();

    alert("add task");
    
    const TaskAddBYUser = {
      Title: title,
      Description: description,
      Category: category,
      Timestam: new Date().toISOString(),
    };

    // add task to backend 

    await useaxiosapi.post('/tasks',TaskAddBYUser)

    .then((res)=>{
      if(res.status===200)
      {
        alert("added")
        setcategory("");
        setdescription("");
        settitle("");
      }else{
        alert("failed");
      }
    });





    console.log(TaskAddBYUser);
  };


  // send to todo 
  const [ Tasks , setTasks ] = useState([]);

  useEffect(()=>{
    useaxiosapi.get('/tasks')
    .then((res)=>{
      setTasks(res.data);
      console.log(res);
    }).catch(error=>{
      console.log(error.message)
    })

  },[])

  console.log(Tasks ,"d");

  





  // move task
  const moveTask = async (taskId, oldCategory, newCategory) => {
    // Update locally first
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === taskId ? { ...task, Category: newCategory } : task
      )
    );
  }
  const x = Tasks.filter((tasks)=> tasks.
  Description
  );
  console.log(x,'doxz');

  


  return (
    <div className="px-6 py-10">
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
              <form method="dialog" onSubmit={addTaskbutton}>
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

      {/* 3 section  */}

      <section className="grid w-full lg:grid-cols-3 border gap-4 md:grid-cols-2 py-6">
        <TaskColumn

        

        tasks={Tasks.filter((tasks)=> tasks.Category==='To-Do')}

        category="To-Do"

        moveTask={moveTask}

     


        />
         <TaskColumn 
        

         tasks={Tasks.filter((task) => task.Category === "In Progress")}


        

            category="In Progress"

            moveTask={moveTask}


          />
          <TaskColumn
         
            tasks={Tasks.filter((task) => task.Category ==="Done")}


            category="Done"
            moveTask={moveTask}
          
          />

        

      </section>
    </div>
  );
}

export default Home;
