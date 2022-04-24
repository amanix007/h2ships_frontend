/* eslint-disable jsx-a11y/anchor-is-valid */
import pilotone from "../../../assets/images/pilotone.jpg";
import pilottwo from "../../../assets/images/pilottwo.jpg";

function pilotContent() {
  return (
    <div className="pilotContent container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <div className="pilotContent__intro">
            <h2 className="text-center">
              Two pilot projects will be implemented as part of H2SHIPS
            </h2>
            <p className="text-center">
              <b>
                A hydrogen powered port vessel will be built in Amsterdam and in
                Belgium, in Belgium, infrastructure and equipment will be built
                to power a H2 refuelling station in the Port of Ostend.
              </b>
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6 col-12">
              <div className="pilotContent__pilotOne">
                <h2>Pilot 1 - Amsterdam</h2>
                <p>
                  The objective of this pilot is to demonstrate the feasibility
                  of operating an inland port vessel with hydrogen as a fuel.
                  The 20 meter long vessel will operate both in urban areas
                  (Amsterdam's canals) as well as in the seaport area between
                  Amsterdam and IJmuiden. The vessel will be completely
                  emission-free and silent, operating with a battery and a fuel
                  cell. Sodiumborohydrid will be used as hydrogen carrier, a
                  powder (to be) diluted in water, which should guarantee a safe
                  storage with a high flame point. The operational sailing
                  experience with this innovative hydrogen storage should enable
                  a quick implementation of this technology on board of other
                  ship types, like inland vessels. Port of Amsterdam (PoA) will
                  lead the pilot. PoA will contract the equipment, build the
                  ship and operate it in the Amsterdam port area. Tata Steel
                  will bring its expertise as a supply chain operator to this
                  project.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-12">
              <div className="pilotContent__imgOne">
                <img
                  src={pilotone}
                  alt="pilot-one"
                  className="shadow-sm rounded border"
                />
              </div>
            </div>

            <div className="col-md-12 col-12 pilotContent__midText">
              <p>
                {" "}
                University of Birmingham will provide technical and engineering
                assistance for the adaptation of the propulsion system and carry
                out assessment studies. TU Delft provides and coordinates the
                body of knowledge for system components, hydrogen generation
                implementation and the integration and testing of the system on
                shore and on board. TU Delft will furthermore facilitate the
                transfer of the demonstrator technology and design towards a
                separate inland cargo vessel demonstrator, chartered by TATA
                Steel and operated by PTC, owner of the ship. The brochure for
                the new Port of Amsterdam hydrogen vessel, HS Neo Orbis, can be
                found{" "}
                <a
                  href="https://www.nweurope.eu/media/16834/neo-orbis_en.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </p>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 col-12">
              <div className="pilotContent__imgTwo">
                <img
                  src={pilottwo}
                  alt="pilot-two"
                  className="shadow-sm rounded border"
                />
              </div>
            </div>

            <div className="col-md-6 col-12">
              <div className="pilotContent__pilotTwo">
                <h2>Pilot 2 - Ostend</h2>
                <p>
                  The objective of this pilot is to erect ancillary equipment
                  (electric infrastructure and safety equipment) needed for the
                  operation of a newly built hydrogen refuelling station for
                  maintenance vessels of the offshore wind farms. The wind farm
                  supplies the port with green electricity which will then be
                  used to produce green hydrogen. The pilot therefore fills an
                  important gap in the overall hydrogen infrastructure of the
                  port. H2SHIPS partner Port of Ostend oversees the construction
                  of the refuelling station. The Interreg NWE project ISHY will
                  deliver the core elements of the bunkering station. The pilot
                  consists of two main steps: the finalisation of the design
                  studies by June 2022 and the construction of the refuelling
                  station with its commissioning expected to take place in
                  February 2023.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default pilotContent;
