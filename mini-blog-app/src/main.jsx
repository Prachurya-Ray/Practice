import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import "./index.css";
import Body from "./components/Body.jsx";
import Header from "./components/Header.jsx";
import CreateBlog from "./components/CreateBlog.jsx";
import Blog from "./components/Blog.jsx";

const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
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
        element: <Body />,
      },
      {
        path: "/blogCreation",
        element: <CreateBlog />,
      },
      {
        path: "/blogs/:id",
        element: <Blog />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
