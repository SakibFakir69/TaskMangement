import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { route } from "./router/Route.jsx";
import ManagementContext from "./context/ManagementContext.jsx";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <ManagementContext>
      <DndProvider backend={HTML5Backend}>
        <RouterProvider router={route} />
      </DndProvider>
    </ManagementContext>
  </StrictMode>
);
