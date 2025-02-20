import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { route } from './router/Route.jsx'
import ManagementContext from './context/ManagementContext.jsx'





createRoot(document.getElementById('root')).render(

  <StrictMode>

   <ManagementContext>
   <RouterProvider router={route}/>
   </ManagementContext>


  </StrictMode>,
)
