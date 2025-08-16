import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";

function RootLayout() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Outlet/>
      </div>
    </>
  )
}

export default RootLayout;