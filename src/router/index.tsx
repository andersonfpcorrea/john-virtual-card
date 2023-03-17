import { createBrowserRouter } from "react-router-dom";
import { Home, Details } from "../pages";
import { Redirect } from "../pages/redirect/Redirect";

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
    element: <Redirect />,
  },
]);
