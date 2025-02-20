




import React from 'react'
import useApi from '../api/useApi'
import { useQuery } from '@tanstack/react-query';


function useAddTask() {

    const useaxiosApi =useApi();
    const {data:task=[]} = useQuery({
        queryKey:['darta'],
        queryFn: async()=>{
            const res = await useaxiosApi.get('tasks')
            return res.data;


        }
    })
    console.log(task,"D");
  return {task};
}

export default useAddTask