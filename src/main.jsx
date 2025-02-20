import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { route } from "./router/Route.jsx";
import ManagementContext from "./context/ManagementContext.jsx";
import { DndContext, useDndMonitor } from "@dnd-kit/core";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ManagementContext>
      <QueryClientProvider client={queryClient}>
        <DndContext>
          <RouterProvider router={route} />
        </DndContext>
      </QueryClientProvider>
    </ManagementContext>
  </StrictMode>
);
