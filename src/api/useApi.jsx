


import React from 'react'
import axios from 'axios'

export const useaxiosapi = axios.create({
    baseURL:'http://localhost:5000',
})
function useApi() {


  return useaxiosapi;

}

export default useApi