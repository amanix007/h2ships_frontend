import Fade from "react-reveal/Zoom";
import heroVideo from "../../assets/video/heroVideo.mp4";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__banner">
        <div className="hero__title">
          <Fade>
            <h1 className="hero__headTitle hero__titleCLip">
              THE H2SHIPS PLATFORM
            </h1>

            <h5 className="hero__subTitle hero__titleCLip">
              System-Based Solutions for H2-Fuelled Water Transport in
              North-West Europe
            </h5>
          </Fade>
        </div>
        {/*<img src={HeroBanner} alt="hero-banner" className="hero__bannerImg" />*/}
        <div className="hero__videoContainer">
          <div className="hero__videoOverlay"></div>
          <video loop autoPlay muted className="hero__videoDiv">
            <source src={heroVideo} type="video/mp4" />
            <source src={heroVideo} type="video/ogg" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Hero;
