import React from "react";
import useApi from "../api/useApi";
import AddedTask from "./AddedTask";

function Home() {




  //// add task 

  const useaxiosApi = useApi();


  const hadneltask = (event) =>{

    event.preventDefault();

    const form = new FormData(event.target);
    const form_data = Object.fromEntries(form);
    const {title , description , category} = form_data;

    const addtaskData ={
      title : title,
      description : description,
      category:category,
    }


    useaxiosApi.post('/tasks',addtaskData)
    .then((res)=>{
      console.log(addtaskData);
      
    })
    .catch((error)=>{
      console.log(error);
    })





  }





  return (
    <div>
      <section>
        <div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            open modal
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              
              <form className="flex flex-col gap-4" onSubmit={hadneltask}>

                <input type="text" name="title" placeholder="Enter your title"/>
                <textarea type="text" name="description" placeholder="Enter your description"/>
                <select name="category">
                  <option value={"ToDo"}>To Do</option>
                  <option value={"InProcessing"}>In Processing</option>
                  <option value={"Done"}>Done</option>
                </select>

                <button  onClick={() => document.getElementById("my_modal_1").close() }type="submit" className="btn btn-primary">Added</button>

              </form>



              

             


            </div>
          </dialog>
        </div>
      </section>

      <section>
        <AddedTask/>
      </section>


    </div>
  );
}

export default Home;
