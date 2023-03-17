import { createBrowserRouter } from "react-router-dom";
import { Home, Details } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:name",
    element: <Details />,
  },
  {
    path: "/redirect?",
  },
]);
