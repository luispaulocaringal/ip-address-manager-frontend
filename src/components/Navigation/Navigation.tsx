import { NavLink, Link } from 'react-router-dom';

import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow mb-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img className="logo" src={"https://techlint.com/assets/icon-long.svg"} alt="BroByte" height={50} /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav nav-pills me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => (isActive && "active") + " nav-link"} end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => (isActive && "active") + " nav-link"}>IP List</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Hello, Louie
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/profile" className="dropdown-item">Profile</Link></li>
                <li><Link to="/setting" className="dropdown-item">Settings</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link to="/login" className="dropdown-item">Logout</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;