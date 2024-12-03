import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Games from "./pages/Games/Games";
import Chat from "./pages/Chat/Chat";
import { Toaster } from "sonner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Profile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Games",
    element: <Games />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Chat",
    element: <Chat />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-center" expand={false} richColors />
    <RouterProvider router={router} />
  </StrictMode>
);
