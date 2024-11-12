import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Reports from "../pages/Reports";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
