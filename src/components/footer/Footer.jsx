/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
export default function Footer() {
  return (
    //<div classNameName="footer">
    //  <div classNameName="footer__menu">
    //    <a
    //      href="https://www.birmingham.ac.uk/privacy/index.aspx"
    //      target="_blank"
    //      rel="noreferrer"
    //    >
    //      Privacy
    //    </a>
    //    <a
    //      href="https://www.birmingham.ac.uk/legal/index.aspx"
    //      target="_blank"
    //      rel="noreferrer"
    //    >
    //      Legal
    //    </a>
    //    <a href="#" target="_blank" rel="noreferrer">
    //      Contact
    //    </a>
    //  </div>
    //  <span classNameName="footer__copyrightText">
    //    Copyright © University of Birmingham 2022 - All rights reserved
    //  </span>
    //</div>

    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6">
            <h4 className="mb-3 text-white footer__colTitle footer__underline">
              Address
            </h4>
            <div className="footer__contact footer__col">
              <h5 className="my-0">
                <i className="fas fa-map-marker-alt text-white"></i>
              </h5>
              <div>
                <p className="mb-2 text-white fw-bold">Lead partner</p>
                <p>
                  EIfER Europäisches Institut für Energieforschung EDF-KIT EWIV
                  11 Emmy Noether Strasse Karlsruhe 76131 Germany
                  www.eifer.kit.edu
                </p>
              </div>
            </div>
            {/*<div classNameName="d-flex align-items-center contact-div my-3">
              <h5 className="my-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  classNameName="bi bi-envelope-check-fill me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z" />
                  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                </svg>
                contact@h2shipsdemo.com
              </h5>
              
            </div>*/}
          </div>

          <div className="col-md-3 col-6">
            <h4 className="text-white mb-4 footer__colTitle footer__underline">
              Get in touch
            </h4>
            <div className="footer__col footer__colOne mt-3">
              <a
                href="https://twitter.com/H2Ships"
                target="_blank"
                className="mx-2 text-white"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/interreg-nwe-projekt-h2ships-83b64918b/"
                target="_blank"
                className="mx-2 text-white"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <h4 className="mb-3 text-white footer__colTitle footer__underline">
              Useful links
            </h4>
            <div className="footer__col footer__colTwo">
              <p>
                <a
                  href="https://www.birmingham.ac.uk/privacy/index.aspx"
                  target="_blank"
                  className="my-2 text-white"
                  rel="noreferrer"
                >
                  Privacy
                </a>
              </p>
              <p>
                <a
                  href="https://www.birmingham.ac.uk/legal/index.aspx"
                  target="_blank"
                  className="my-2 text-white"
                  rel="noreferrer"
                >
                  Legal
                </a>
              </p>
              <p>
                <a href="#" className="my-2  text-white">
                  Contact
                </a>
              </p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <h4 className="mb-3 text-white footer__colTitle footer__underline">
              More research
            </h4>
            <div className="footer__colThree footer__col">
              <p>
                <a href="#" className="my-2 text-white">
                  Research link 1
                </a>
              </p>
              <p>
                <a href="#" className="my-2 text-white">
                  Research link 2
                </a>
              </p>
              <p>
                <a href="#" className="my-2 text-white">
                  Research link 3
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer__copyrightText">
          Copyright © University of Birmingham 2022 - All rights reserved
        </div>
      </div>
    </footer>
  );
}
