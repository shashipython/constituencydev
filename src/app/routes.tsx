import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { AdminPanel } from "./components/AdminPanel";
import { About } from "./components/pages/About";
import { Leadership } from "./components/pages/Leadership";
import { Activities } from "./components/pages/Activities";
import { Schemes } from "./components/pages/Schemes";
import { Development } from "./components/pages/Development";
import { Gallery } from "./components/pages/Gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "leadership", element: <Leadership /> },
      { path: "activities", element: <Activities /> },
      { path: "schemes", element: <Schemes /> },
      { path: "development", element: <Development /> },
      { path: "gallery", element: <Gallery /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminPanel />,
  },
]);