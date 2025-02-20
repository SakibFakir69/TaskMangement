import React, { useState } from "react";

function Home() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const addTaskbutton = (event) => {
    event.preventDefault();

    alert("add task");
    const TaskAddBYUser = {
      Title: title,
      Description: description,
      Category: category,
      Timestam: new Date().toISOString(),
    };
    console.log(TaskAddBYUser);
  };

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
                  className="btn"
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
        <div className="border">
          <h1>Todo</h1>
          <div>start</div>
        </div>

        <div className="border">
          <h2>Processing</h2>
          <div>start</div>
        </div>
        <div className="border">
          <h2>Done</h2>

          <div>start</div>
        </div>
      </section>
    </div>
  );
}

export default Home;
