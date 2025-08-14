import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <Outlet/>
      </div>
    </>
  )
}

export default AuthLayout;