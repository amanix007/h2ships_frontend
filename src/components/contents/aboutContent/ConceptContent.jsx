import conceptimg from "../../../assets/images/conceptimg.jpg";
import concepticon from "../../../assets/images/concepticon.png";

function ConceptContent() {
  return (
    <div className="conceptContent">
      <div className="container-fluid conceptContent__fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="conceptContent__why">
              <h4 className="conceptContent__whyTitle">Why H2SHIPS?</h4>
              <p className="text-white conceptContent__whyDesc">
                Reducing GHG emissions in the transport sector is crucial for
                climate change and air quality. Water transport plays a key role
                for persons and goods in North-West Europe, which concentrates
                84% of European inland freight. However, almost 100 % of inland
                vessels are fuelled by gasoil which, similar to diesel, emits
                CO2, nitrogen oxides (NOx), particulate matter (PM) and sulphur
                dioxide (SO2). Inland waterways and maritime transport sectors
                thus have large potentials to become more environmentally
                friendly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="conceptContent__solution">
              <div className="conceptContent__solutionText">
                <h2>The Hydrogen Solution</h2>
                <p>
                  Advantages of hydrogen propulsion technologies over
                  conventional combustion engines are considerable: Hydrogen can
                  be converted into mechanical or electrical energy completely
                  free of any emission. In addition, hydrogen propulsion systems
                  operate silently and require less maintenance. Hydrogen
                  propulsion is already close to full market maturity and is the
                  only option that allows total decarbonisation of waterborne
                  transport with high efficiency and high energy density. Its
                  uptake requires dedicated infrastructure, close to end users.
                  With predictable routes and proximity with other industries,
                  water transport proves particularly well suited to hydrogen
                  solutions. H2SHIPS aims to kick-start the necessary value
                  chain.
                </p>
              </div>

              <div className="conceptContent__img">
                <img
                  src={conceptimg}
                  alt="hydrogen-solution"
                  className="shadow-sm rounded"
                />
                <div className="conceptContent__imgBox"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid conceptContent__list">
        <h2 className="text-center">Main Project Outputs</h2>
        <div className="row conceptContent__listRow g-0">
          <div className="col-md-3 col-12">
            <img src={concepticon} alt="" />
            <p>
              A demonstration project for H2-powered water transport of
              passengers (Dutch Pilot)
            </p>
          </div>
          <div className="col-md-3 col-12">
            <img src={concepticon} alt="" />
            <p>
              A demonstration project for H2 infrastructure maintenance vessels
              (Belgian Pilot)
            </p>
          </div>
          <div className="col-md-3 col-12">
            <img src={concepticon} alt="" />
            <p>A replication study for inland cargo ships</p>
          </div>

          <div className="col-md-3 col-12">
            <img src={concepticon} alt="" />
            <p>
              An action plan for the implementation of a pilot in Paris in
              2021-2022
            </p>
          </div>
          <div className="col-md-3 col-12">
            <img src={concepticon} alt="" />
            <p>
              {" "}
              The creation of an H2 value chain that supports transport
              operators in implementing H2 products/services developed by
              enterprise-research cooperation
            </p>
          </div>
          <div className="col-md-3 col-12">
            <img src={concepticon} alt="" />
            <p>
              A blueprint for the uptake of a new hydrogen-based transport
              system in North-West Europe
            </p>
          </div>

          <div className="col-md-3 col-12">
            <img src={concepticon} alt="" />
            <p>
              Several jobs created within the new H2-powered water transport
              industry
            </p>
          </div>
          <div className="col-md-3 col-12">
            <img src={concepticon} alt="" />
            <p>
              At project end, direct decrease of GHG emissions enabling a
              longer-term reduction trend following market uptake
            </p>
          </div>
          <div className="col-md-3 col-12">
            <img src={concepticon} alt="" />
            <p>
              Positive impacts on the water transport sector and port cities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConceptContent;
