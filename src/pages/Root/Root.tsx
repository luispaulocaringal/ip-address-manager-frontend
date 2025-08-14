import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";

function RootLayout() {
  return (
    <>
      <Navigation />
      <div className="container-fluid">
        <Outlet/>
      </div>
    </>
  )
}

export default RootLayout;