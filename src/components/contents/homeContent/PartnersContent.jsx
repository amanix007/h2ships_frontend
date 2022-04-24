/* eslint-disable jsx-a11y/anchor-is-valid */
//import OwlCarousel from "react-owl-carousel";
import eifer from "../../../assets/images/eifer.png";
import tatasteel from "../../../assets/images/tatasteel.png";
import transportenv from "../../../assets/images/transportenv.png";
import steinbeis from "../../../assets/images/steinbeis.png";
import portofams from "../../../assets/images/portofams.png";
import syctom from "../../../assets/images/syctom.png";
import tud from "../../../assets/images/tud.png";
import hynamics from "../../../assets/images/hynamics.png";
import hydrogeneu from "../../../assets/images/hydrogeneu.png";
import haropa from "../../../assets/images/haropa.png";
import oostende from "../../../assets/images/oostende.png";
import navalu from "../../../assets/images/navalu.png";
import unibirm from "../../../assets/images/unibirm.png";

function PartnersContent() {
  //  const owlOptions = {
  //    margin: 80,
  //    loop: true,
  //    responsiveClass: true,
  //    nav: false,
  //    dots: false,
  //    autoplay: true,
  //    autoplayTimeout: 2000,
  //    smartSpeed: 1000,
  //    responsive: {
  //      0: {
  //        items: 2,
  //      },
  //      400: {
  //        items: 2,
  //      },
  //      600: {
  //        items: 2,
  //      },
  //      700: {
  //        items: 2,
  //      },
  //      1000: {
  //        items: 5,
  //      },
  //    },
  //  };
  return (
    <div className="partnersContent container-fluid">
      <h1 className="partnersContent__title text-center">Our partners</h1>
      <div className="partnersContent__logoDiv row">
        <div className="partnersContent__partnerLogo col-md-2 col-6">
          <a href="https://www.eifer.kit.edu" target="_blank" rel="noreferrer">
            <img src={eifer} alt="" />
          </a>
        </div>

        <div className="partnersContent__partnerLogo col-md-2 col-6">
          <a
            href="https://www.tatasteeleurope.com/de/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tatasteel} alt="" />
          </a>
        </div>

        <div className="partnersContent__partnerLogo col-md-2 col-6">
          <a
            href="https://www.transportenvironment.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={transportenv} alt="" />
          </a>
        </div>

        <div className="partnersContent__partnerLogo col-md-2 col-6">
          <a
            href="https://www.steinbeis-europa.de/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={steinbeis} alt="" />
          </a>
        </div>
        <div className="partnersContent__partnerLogo col-md-2 col-12">
          <a
            href="https://www.birmingham.ac.uk/index.aspx"
            target="_blank"
            rel="noreferrer"
          >
            <img src={unibirm} alt="" />
          </a>
        </div>
      </div>

      <div className="partnersContent__logoDiv row">
        <div className="partnersContent__partnerLogo col-md-2 col-6">
          <a
            href="https://www.syctom-paris.fr/accueil.html"
            target="_blank"
            rel="noreferrer"
          >
            <img src={syctom} alt="" />
          </a>
        </div>

        <div className="partnersContent__partnerLogo col-md-2 col-6">
          <a
            href="https://www.tudelft.nl/en/3me/about/departments/maritime-and-transport-technology/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tud} alt="" />
          </a>
        </div>

        <div className="partnersContent__partnerLogo col-md-2 col-6">
          <a href="https://hynamics.com/" target="_blank" rel="noreferrer">
            <img src={hynamics} alt="" />
          </a>
        </div>

        <div className="partnersContent__partnerLogo col-md-2 col-6">
          <a href="https://hydrogeneurope.eu/" target="_blank" rel="noreferrer">
            <img src={hydrogeneu} alt="" />
          </a>
        </div>
      </div>

      <div className="partnersContent__logoDiv row">
        <div className="partnersContent__partnerLogo col-md-2 col-6">
          <a
            href="https://www.haropaports.com/en/paris"
            target="_blank"
            rel="noreferrer"
          >
            <img src={haropa} alt="" />
          </a>
        </div>
        <div className="partnersContent__partnerLogo col-md-2 col-6">
          <a
            href="https://www.portofoostende.be/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={oostende} alt="" />
          </a>
        </div>
        <div className="partnersContent__partnerLogo col-md-2 col-6">
          <a href="http://www.navalu.fr/" target="_blank" rel="noreferrer">
            <img src={navalu} alt="" />
          </a>
        </div>

        <div className="partnersContent__partnerLogo col-md-2 col-6">
          <a
            href="https://www.iala-aism.org/organisation/port-authority-of-amsterdam/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={portofams} alt="" />
          </a>
        </div>
      </div>

      {/*<OwlCarousel className="owl-theme" {...owlOptions}>
        <div className="partnersContent__partnerLogo item">
          <img src={eifer} alt="" />
        </div>
        <div className="partnersContent__partnerLogo item">
          <img src={tatasteel} alt="" />
        </div>
        <div className="partnersContent__partnerLogo item">
          <img src={transportenv} alt="" />
        </div>
        <div className="partnersContent__partnerLogo item">
          <img src={steinbeis} alt="" />
        </div>

        <div className="partnersContent__partnerLogo item">
          <img src={portofams} alt="" />
        </div>
        <div className="partnersContent__partnerLogo item">
          <img src={syctom} alt="" />
        </div>
        <div className="partnersContent__partnerLogo item">
          <img src={tud} alt="" />
        </div>
        <div className="partnersContent__partnerLogo item">
          <img src={hynamics} alt="" />
        </div>

        <div className="partnersContent__partnerLogo item">
          <img src={hydrogeneu} alt="" />
        </div>
        <div className="partnersContent__partnerLogo item">
          <img src={haropa} alt="" />
        </div>
        <div className="partnersContent__partnerLogo item">
          <img src={oostende} alt="" />
        </div>
        <div className="partnersContent__partnerLogo item">
          <img src={navalu} alt="" />
        </div>
      </OwlCarousel>*/}
    </div>
  );
}

export default PartnersContent;
