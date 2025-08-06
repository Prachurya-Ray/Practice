import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import Body from "./components/Body.jsx";
import Header from "./components/Header.jsx";
import CreateBlog from "./components/CreateBlog.jsx";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path:'/blogCreation',
        element: <CreateBlog/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter}/>);
