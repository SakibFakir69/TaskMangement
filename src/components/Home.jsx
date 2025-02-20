



import React from 'react'

function Home() {

    const addTaskbutton = () =>{
        alert("add task")
    }

  return (
    <div className='px-6 py-10'>
        <section>
           
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">

        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </section>


        {/* 3 section  */}

        <section className='grid w-full lg:grid-cols-3 border gap-4 md:grid-cols-2 py-6' >

            <div className='border'>
                <h1>Todo</h1>
                <div>
                    start
                </div>
            </div>

            <div className='border'>
                <h2>Processing</h2>
                <div>
                    start
                </div>
            </div>
            <div className='border'>
                <h2>Done</h2>

                <div>
                    start
                </div>
            </div>
        </section>

        
        
    </div>
  )
}

export default Home