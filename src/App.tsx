import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthLayout from "./pages/Auth/Auth";
import RootLayout from "./pages/Root/Root";
import Login, { action as loginAction } from "./pages/Login/Login";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";

// IP Components
import IPList, { loader as ipListLoader } from "./pages/IP/IPList/IPList";
import AddIP from "./pages/IP/AddIP/AddIP";
import EditIP from "./pages/IP/EditIP/EditIP";
import DeleteIP, { action as deleteIPAction } from "./pages/IP/DeleteIP/DeleteIP";
import ViewIP, { loader as ipDetailLoader } from "./pages/IP/ViewIP/ViewIP";
import { action as submitIPAction } from "./components/IPForm/IPForm";

// Audit Logs Components
import AuditLogs, { loader as auditLogsLoader } from "./pages/AuditLogs/AuditLogs";

import './App.css'

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
          children: [
            {
              index: true,
              element: <IPList />,
              loader: ipListLoader
            },
            {
              path: ":id",
              children: [
                {
                  index: true,
                  element: <ViewIP />,
                  loader: ipDetailLoader,
                },
                {
                  path: "edit",
                  element: <EditIP />,
                  loader: ipDetailLoader,
                  action: submitIPAction
                },
                {
                  path: "delete",
                  element: <DeleteIP />,
                  loader: ipDetailLoader,
                  action: deleteIPAction
                },
              ]
            },
            {
              path: "add",
              element: <AddIP />,
              action: submitIPAction
            },
          ]
        },
        {
          path: "audit-logs",
          element: <AuditLogs />,
          loader: auditLogsLoader
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
