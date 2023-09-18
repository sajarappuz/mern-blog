import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Layout from "./Layout";
import Register from "./components/Register";
import IndexPage from "./pages/IndexPage";



export default function App() {
 
      const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <IndexPage />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  }
]);

return (
    
  <RouterProvider router={router} />
);

      
    
  
}