import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import Home from "./page/Home";
import UserHomeSector from "./page/UserHomeSector";
import AdminHomeSector from "./page/AdminHomeSector";
import Owner from "./page/Owner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/owner",
        element: <Owner />
      },
      {
        path: "/User",
        element: <UserHomeSector />
      },
      {
        path: "/admin",
        element: <AdminHomeSector />
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

