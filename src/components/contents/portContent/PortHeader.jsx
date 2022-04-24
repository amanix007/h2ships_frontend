import portCover from "../../../assets/images/portCover.jpeg";

function PortHeader() {
  return (
    <div className="portHeader container">
      <div className="row justify-content-center">
        <div className="col-11 col-md-8">
          <h1 className="portHeader__title">Port of Amsterdam</h1>
          <div className="portHeader__author">
            {/*<img src={author} alt="" className="portHeader__authorImg" />*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-person-circle portHeader__authorImg"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>

            <div className="porHeader__authorInfo">
              <h5 className="porHeader__authorName">Ferdi Çıldız</h5>
              <p className="portHeader__authorDate">
                Aug 21, 2015 · 1 min read
              </p>
            </div>
          </div>

          <div className="portHeader__coverImg">
            <img
              src={portCover}
              alt=""
              width="100%"
              className="rounded shadow-sm"
            />
            <p className="portHeader__coverImgTitle text-center">
              Port of Amsterdam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortHeader;
