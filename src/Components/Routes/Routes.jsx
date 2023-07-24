import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../../LayOut/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import SingleItCompany from "../Pages/Home/TopItCompany/SingleItCompany";
import PrivateRoutes from "./PrivateRoute/PrivateRoutes";
import Register from "../Pages/SingUp/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/about',
          element: <About></About>
        },
        {
          path:'/singUp',
          element: <Register></Register>
        },
        {
          path:'/viewDetailsLocal:id',
          element: <PrivateRoutes><SingleItCompany></SingleItCompany></PrivateRoutes>
        }
      ]
    },
  ]);
  export default router;