import aboutIntro from "../../../assets/images/aboutIntro.jpeg";

function AboutIntro() {
  return (
    <div className="aboutIntro container mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/*<h2 className="aboutIntro__title mb-5">About Us</h2>*/}
          <p className="aboutIntro__details">
            The (H2020) PROMINENT project found inland waterways and maritime
            transport sectors have great potential to become more
            environmentally friendly. Breakthrough alternatives are needed.
            Hydrogen (H2) propulsion is the only option that allows total
            decarbonisation of waterborne transport providing high efficiency
            and energy density with no local GHG emissions. A dedicated
            infrastructure close to end users is required and with predictable
            routes and proximity with other industries, water transport proves
            particularly well adapted to H2.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={aboutIntro}
            alt="about-intro"
            className="aboutIntro__img shadow rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutIntro;
