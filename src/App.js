import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import './style.scss';

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";

function App() {

  const { currentUser } = useContext(AuthContext);
  
  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to='/login'/>
    }
    return children
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Home/></ProtectedRoute>,
    },
    {
      path: "register",
      element: <Register/>,
    },
    {
      path: "login",
      element: <Login/>,
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
