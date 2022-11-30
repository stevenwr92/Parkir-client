import { createBrowserRouter } from "react-router-dom";
import PageLayout from "../componnents/PageLayout";
import Home from "../pages/Home";
import History from "../pages/History";

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "history",
        element: <History />,
      },
    ],
  },
]);

export default router;
