import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthLayout from "./pages/Auth/Auth";
import RootLayout from "./pages/Root/Root";
import Login, { action as loginAction } from "./pages/Login/Login";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";

import './App.css'
import IPList from "./pages/IPList/IPList";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      errorElement: <Error/>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "ip-list",
          element: <IPList />
        },
      ]
    },
    {
      path: "login",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <Login />,
          action: loginAction
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
