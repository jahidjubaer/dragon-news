import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import AuthLayout from "../layout/AuthLayout";
import NewsLayout from "../layout/NewsLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";

// create router and and route all the layout ;
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/category/:id",
        Component: HomePage,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
  },
  {
    path: "/news",
    element: <NewsLayout></NewsLayout>,
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
