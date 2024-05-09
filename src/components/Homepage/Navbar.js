import React from "react";
import "./navbar.css";
import Logo from "../../Logo.js";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-mint">
        <div className="container-fluid">
          {/* <a href="index.html" style={{ paddingRight: "10px" }}>
            <svg
              id="logo-89"
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="ccustom"
                d="M39.9449 21.4998H32.8003C26.5594 21.4998 21.5003 26.559 21.5003 32.7998V39.9444C31.3502 39.214 39.2145 31.3497 39.9449 21.4998Z"
                fill="#775732"
              ></path>
              <path
                class="ccustom"
                d="M18.5003 39.9444V32.7998C18.5003 26.559 13.4411 21.4998 7.20026 21.4998H0.0556641C0.785998 31.3497 8.65036 39.214 18.5003 39.9444Z"
                fill="#775732"
              ></path>
              <path
                class="ccustom"
                d="M39.9449 18.4998C39.2145 8.64987 31.3502 0.78551 21.5003 0.0551758V7.19977C21.5003 13.4406 26.5594 18.4998 32.8003 18.4998H39.9449Z"
                fill="#775732"
              ></path>
              <path
                class="ccustom"
                d="M18.5003 0.0551758C8.65036 0.78551 0.785998 8.64987 0.0556641 18.4998H7.20026C13.4411 18.4998 18.5003 13.4406 18.5003 7.19977V0.0551758Z"
                fill="#775732"
              ></path>
              <path
                class="ccustom"
                d="M13.583 19.9998C16.3555 18.6145 18.615 16.355 20.0002 13.5825C21.3855 16.355 23.6449 18.6145 26.4175 19.9998C23.6449 21.385 21.3855 23.6445 20.0002 26.417C18.615 23.6445 16.3555 21.385 13.583 19.9998Z"
                fill="#CA9352"
              ></path>
            </svg>
          </a> */}

          <a className="navbar-brand" href="#">
            <Logo />
            <span style={{ paddingLeft: "5px" }}>PakZone</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div className="navbar-buttons">
              <button className="btn profile-btn" onClick={handleLogin}>
                <Profile />
              </button>
              <button className="btn cart-btn" onClick={handleCart}>
                <Cart />
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

function handleLogin() {
  // Handle login button click
}

function handleCart() {
  // Handle cart button click
}
function Cart() {
  return (
      <img src="../images/cart-btn.png" width={20} height={20} alt="cart" />
 
  );
}
function Profile() {
  return (
    <img src="../images/user-btn.png" width={20} height={20} alt="profile" />
  
  );
}
export default Navbar;
