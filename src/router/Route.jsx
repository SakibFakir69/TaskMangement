import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../Layouts/MainLayoutes";
import Home from "../components/Home";
import AddedTask from "../components/AddedTask";





export const route = createBrowserRouter([
  {
    path:'/',
    element:<MainLayoutes/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:'/',
        element : <AddedTask/>
      }
    ]
  }
])