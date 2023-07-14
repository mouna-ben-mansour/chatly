import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import './style.scss';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
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
