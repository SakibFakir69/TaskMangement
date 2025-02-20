import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../Layouts/MainLayoutes";
import Home from "../components/Home";





export const route = createBrowserRouter([
  {
    path:'/',
    element:<MainLayoutes/>,
    children:[
      {
        path:"/",
        element:<Home/>
      }
    ]
  }
])