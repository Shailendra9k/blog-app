import React from "react";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="https://shailendra.netlify.com/">
            Portfolio
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://drive.google.com/file/d/1yclnD9iKoK50AdGjB3VNkdoHeeDKQ43g/view"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/Shailendra9k">
                  GitHub
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/shailendra-kushwaha/"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
