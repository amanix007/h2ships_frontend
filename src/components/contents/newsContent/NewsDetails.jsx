import portCover from "../../../assets/images/portCover.jpeg";
import NewsShare from "./NewsShare";

function NewsDetails() {
  return (
    <div className="newsHeader container">
      <div className="row justify-content-center">
        <div className="col-11 col-md-8">
          <div className="newsHeader__newsHeaderTop">
            <h1 className="newsHeader__title">
              {" "}
              Hydrogen can power virtually all container ships crossing the
              Pacific
            </h1>
            <div className="newsHeader__author">
              {/*<img src={author} alt="" className="newsHeader__authorImg" />*/}

              <div className="newsHeader__authorInfo">
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-person-circle newsHeader__authorImg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </>

                <div className="newsHeader__authorInfoText">
                  <h5 className="porHeader__authorName">Ferdi Çıldız</h5>
                  <p className="newsHeader__authorDate">
                    Aug 21, 2015 · 1 min read
                  </p>
                </div>
              </div>
              <NewsShare />
            </div>
          </div>

          <div className="newsHeader__coverImg mb-5">
            <img
              src={portCover}
              alt=""
              width="100%"
              className="rounded shadow-sm"
            />
            <p className="newsHeader__coverImgTitle text-center">
              Hydrogen can power virtually all container ships crossing the
              Pacific
            </p>
          </div>

          <p className="fs-5">
            The objective of the pilot of the Port of Amsterdam is to
            demonstrate the feasibility of operating an inland port vessel with
            hydrogen as a fuel. The 20 meter long vessel will operate both in
            urban areas (Amsterdam’s canals) as well as in the seaport area
            between Amsterdam and IJmuiden. The vessel will be completely
            emission-free and silent, operating with a battery and a fuel cell.
            Sodiumborohydrid will be used as hydrogen carrier, a powder diluted
            in water, which allows for safe storage and has a high flame point.
            The operational sailing experience with this innovative hydrogen
            solution should enable a quick implementation of this technology on
            board of other ship types, especially other inland vessels. Port of
            Amsterdam will contract the equipment, build the ship and operate it
            in the Amsterdam port area. Tata Steel will bring its expertise as a
            supply chain operator to this project. University of Birmingham will
            provide technical and engineering assistance for the adaptation of
            the propulsion system and carry out assessment studies. TU Delft
            provides and coordinates the body of knowledge on Sodiumborohydrid
            system components, hydrogen generation implementation and the
            integration and testing of the system on shore and on board.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsDetails;
