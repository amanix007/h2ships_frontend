import portCover from "../../../assets/images/portCover.jpeg";

function ReportDetails() {
  return (
    <div className="reportHeader container">
      <div className="row justify-content-center">
        <div className="col-11 col-md-8">
          <div className="reportHeader__reportHeaderTop">
            <h1 className="reportHeader__title">
              {" "}
              Feasibility of the SF-BREEZE: a Zero-Emission, Hydrogen Fuel Cell,
              High-Speed Passenger Ferry
            </h1>
            <div className="reportHeader__author">
              {/*<img src={author} alt="" className="reportHeader__authorImg" />*/}

              <div className="reportHeader__authorInfo">
                <div className="reportHeader__authorInfoText">
                  <h5 className="reportHeader__authorName">
                    International Transport Forum / OECD
                  </h5>
                  <p className="reportHeader__authorDate">10, Sept 2018</p>
                </div>
              </div>

              <span className="badge bg-success reportHeader__reportCategory">
                Case Study
              </span>
            </div>
          </div>
          <div className="reportHeader__coverImg mb-5">
            <img
              src={portCover}
              alt=""
              width="100%"
              className="rounded shadow-sm"
            />
            <p className="reportHeader__coverImgTitle text-center">
              Hydrogen can power virtually all container ships crossing the
              Pacific
            </p>
          </div>
          <div className="reportHeader__reportDesc">
            <p>Master’s thesis - Master Energy Science </p>
            <p>
              ASSESSMENT AND COMPARISON OF ALTERNATIVE MARINE FUELS TOWARDS THE
              DECARBONISATION OF PORT OF AMSTERDAM
            </p>
            <p>
              Written by: Thomas van der Maas (5535654) -
              t.j.vandermaas@students.uu.nl
            </p>

            <div className="reportHeader__textFlex">
              <div className="reportHeader__contact">
                <h4 className="fw-bold">Supervisor Utrecht University:</h4>
                <span> Prof. dr. G. J. Kramer - g.j.kramer@uu.nl </span>
                <span>Supervisor Port of Amsterdam:</span>
                <span> J. Egbertsen - Jan.Egbertsen@portofamsterdam.com</span>
                <span> 29-07-2020</span>
              </div>

              <button className="btn btn-primary reportHeader__downloadBtn">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportDetails;
