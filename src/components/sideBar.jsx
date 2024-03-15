import React from "react";
import './sideBar.css'
/*import 'bootstrap/dist/css/bootstrap.min.css';*/

function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto flex-column">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Another Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
