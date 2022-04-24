/* eslint-disable jsx-a11y/anchor-is-valid */
//import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import navLogo from "../../assets/images/navLogo.png";

export default function Header() {
  //  const location = useLocation();

  return (
    <>
      <div id="main_nav" className="topMenu text-end fixed-top">
        <div className="topMenu__bgdiv">
          <Link to="/" className="navbar-brand navbar__logo navbar__link">
            <img src={navLogo} alt="nav-logo" />
          </Link>
          <div className="topMenu__authBtn">
            <Link to="login">
              <span className="btn btn-sm btn-secondary">Login</span>
            </Link>

            <Link to="signup">
              <span className="btn btn-sm btn-dark">Sign up</span>
            </Link>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light border-bottom">
          <div className="btn btn-primary">
            <i className="fa fa-calculator"></i> Open Calculator
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse text-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link to="/" className="navbar__link">
                <li className="nav-item">
                  <span
                    className="nav-link navbar__nav-link"
                    aria-current="page"
                  >
                    Home
                  </span>
                </li>
              </Link>
              {/*
          <Link to="about" className="navbar__link">
            <li className="nav-item">
              <span className="nav-link navbar__nav-link">About Us</span>
             
            </li>
          </Link>*/}

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle navbar__nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <ul
                  className="dropdown-menu navbar__dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <Link to="overview" className="navbar__link">
                    <li>
                      <span className="dropdown-item navbar__nav-link">
                        Project Overview
                      </span>
                    </li>
                  </Link>

                  <Link to="concepts" className="navbar__link">
                    <li>
                      <span className="dropdown-item navbar__nav-link">
                        Concepts
                      </span>
                    </li>
                  </Link>

                  <Link to="pilots" className="navbar__link">
                    <li>
                      <span className="dropdown-item navbar__nav-link">
                        Pilots
                      </span>
                    </li>
                  </Link>
                </ul>
              </li>

              <Link to="news" className="navbar__link">
                <li className="nav-item">
                  <span className="nav-link navbar__nav-link">
                    News & Events
                  </span>
                </li>
              </Link>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle navbar__nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Get invloved
                </a>
                <ul
                  className="dropdown-menu navbar__dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <Link to="subscribe" className="navbar__link">
                    <li>
                      <span className="dropdown-item navbar__nav-link">
                        Subscribe
                      </span>
                    </li>
                  </Link>

                  <Link to="enquiry" className="navbar__link">
                    <li>
                      <span className="dropdown-item navbar__nav-link">
                        Enquiries
                      </span>
                    </li>
                  </Link>

                  <Link to="join" className="navbar__link">
                    <li>
                      <span className="dropdown-item navbar__nav-link">
                        Apply to join
                      </span>
                    </li>
                  </Link>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle navbar__nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ports
                </a>
                <ul
                  className="dropdown-menu navbar__dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <Link to="port" className="navbar__link">
                    <li>
                      <span className="dropdown-item navbar__nav-link">
                        Port of Amsterdam
                      </span>
                    </li>
                  </Link>

                  <Link to="port" className="navbar__link">
                    <li>
                      <span className="dropdown-item navbar__nav-link">
                        Port of Oostende
                      </span>
                    </li>
                  </Link>

                  <Link to="port" className="navbar__link">
                    <li>
                      <span className="dropdown-item navbar__nav-link">
                        Port of Paris
                      </span>
                    </li>
                  </Link>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle navbar__nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul
                  className="dropdown-menu navbar__dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <Link to="reports" className="navbar__link">
                    <li>
                      <span className="dropdown-item navbar__nav-link">
                        Reports
                      </span>
                    </li>
                  </Link>

                  <li>
                    <a className="dropdown-item navbar__nav-link" href="#">
                      Legislative
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item navbar__nav-link" href="#">
                      Education Materials
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle navbar__nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Links
                </a>
                <ul
                  className="dropdown-menu navbar__dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item navbar__nav-link" href="#">
                      Shipping Projects
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item navbar__nav-link" href="#">
                      Initiatives & Workshops
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item navbar__nav-link" href="#">
                      Funds & Research
                    </a>
                  </li>
                </ul>
              </li>

              <Link to="faq" className="navbar__link">
                <li className="nav-item">
                  <span
                    className="nav-link navbar__nav-link"
                    aria-current="page"
                  >
                    FAQs
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
