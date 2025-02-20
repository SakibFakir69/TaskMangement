



import React, { useContext } from 'react'
import { MYcontext } from '../context/ManagementContext'

function useMangementHook() {

    const hook = useContext(MYcontext);


  return hook;
}

export default useMangementHook