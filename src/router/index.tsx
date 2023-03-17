import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { Details } from "../pages/details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:name",
    element: <Details />,
  },
]);
