



import React, { useState } from 'react'
import Navbar from '../components/navbar'
import { NavLink, Outlet } from 'react-router-dom';
import useMangementHook from '../Hook/useMangementHook';

function MainLayoutes() {


    const {setsidebar, sidebar} = useMangementHook();


  return (
    <div>
        <header>
            <Navbar/>
            
        </header>
        <main className='grid grid-cols-12'>

            <section className={`col-span-2border min-h-screen ${sidebar && ''} `}>

                <ul className={`bg-gray-100 p-4 transform transition-transform duration-300  ${
              sidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            }`}>
                <NavLink to={'/'}>Home</NavLink>

               
                </ul>
            </section>


            <section className='border col-span-10 w-full'>

                <Outlet/>

            </section>
        </main>
        
        





    </div>
  )
}

export default MainLayoutes