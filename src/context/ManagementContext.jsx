



import React, { createContext } from 'react'
import { useState } from 'react';
export const MYcontext = createContext();

function ManagementContext({children}) {

    const [ sidebar , setsidebar ] = useState(true);
    const authInfo = {
        sidebar, setsidebar,
    }
  return (
    <div>

        <MYcontext.Provider value={authInfo}>
            {children}

        </MYcontext.Provider>



    </div>
  )
}

export default ManagementContext