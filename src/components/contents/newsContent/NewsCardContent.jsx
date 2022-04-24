import newsImg1 from "../../../assets/images/newsImg1.jpg";
import newsImg2 from "../../../assets/images/newsImg2.jpg";
import newsImg3 from "../../../assets/images/newsImg3.jpg";
import newsImg4 from "../../../assets/images/newsImg4.jpg";
import Pagination from "../../common/Pagination";
import { Link } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function NewsCardContent() {
  return (
    <div className="newsCard container">
      <h2 className="pb-2 text-center newsCard__title">News</h2>

      <div className="row">
        <div className="col-md-8 col-12">
          <div className="row">
            <div className="col-md-4 col-6 newsCard__col">
              <Link to="news-details" className="newsCard__link">
                <div className="card newsCard__card">
                  <div className="newsCard__imgWrapper">
                    <img
                      src={newsImg1}
                      className="card-img-top newsCard__img"
                      alt="..."
                    />
                  </div>
                  <div className="card-body newsCard__cardBody">
                    <p className="card-text newsCard__cardText">
                      Hydrogen ‘can power virtually all container ships crossing
                      the Pacific’
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4 col-6 newsCard__col">
              <Link to="news-details" className="newsCard__link">
                <div className="card newsCard__card">
                  <div className="newsCard__imgWrapper">
                    <img
                      src={newsImg2}
                      className="card-img-top newsCard__img"
                      alt="..."
                    />
                  </div>
                  <div className="card-body newsCard__cardBody">
                    <p className="card-text newsCard__cardText">
                      Hydrogen ‘can power virtually all container ships crossing
                      the Pacific’
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 col-6 newsCard__col">
              <Link to="news-details" className="newsCard__link">
                <div className="card newsCard__card">
                  <div className="newsCard__imgWrapper">
                    <img
                      src={newsImg3}
                      className="card-img-top newsCard__img"
                      alt="..."
                    />
                  </div>
                  <div className="card-body newsCard__cardBody">
                    <p className="card-text newsCard__cardText">
                      Hydrogen ‘can power virtually all container ships crossing
                      the Pacific’
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 col-6 newsCard__col">
              <Link to="news-details" className="newsCard__link">
                <div className="card newsCard__card">
                  <div className="newsCard__imgWrapper">
                    <img
                      src={newsImg4}
                      className="card-img-top newsCard__img"
                      alt="..."
                    />
                  </div>
                  <div className="card-body newsCard__cardBody">
                    <p className="card-text newsCard__cardText">
                      Hydrogen ‘can power virtually all container ships crossing
                      the Pacific’
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 col-6 newsCard__col">
              <Link to="news-details" className="newsCard__link">
                <div className="card newsCard__card">
                  <div className="newsCard__imgWrapper">
                    <img
                      src={newsImg1}
                      className="card-img-top newsCard__img"
                      alt="..."
                    />
                  </div>
                  <div className="card-body newsCard__cardBody">
                    <p className="card-text newsCard__cardText">
                      Hydrogen ‘can power virtually all container ships crossing
                      the Pacific’
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 col-6 newsCard__col">
              <Link to="news-details" className="newsCard__link">
                <div className="card newsCard__card">
                  <div className="newsCard__imgWrapper">
                    <img
                      src={newsImg4}
                      className="card-img-top newsCard__img"
                      alt="..."
                    />
                  </div>
                  <div className="card-body newsCard__cardBody">
                    <p className="card-text newsCard__cardText">
                      Hydrogen ‘can power virtually all container ships crossing
                      the Pacific’
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 col-6 newsCard__col">
              <Link to="news-details" className="newsCard__link">
                <div className="card newsCard__card">
                  <div className="newsCard__imgWrapper">
                    <img
                      src={newsImg2}
                      className="card-img-top newsCard__img"
                      alt="..."
                    />
                  </div>
                  <div className="card-body newsCard__cardBody">
                    <p className="card-text newsCard__cardText">
                      Hydrogen ‘can power virtually all container ships crossing
                      the Pacific’
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 col-6 newsCard__col">
              <Link to="news-details" className="newsCard__link">
                <div className="card newsCard__card">
                  <div className="newsCard__imgWrapper">
                    <img
                      src={newsImg4}
                      className="card-img-top newsCard__img"
                      alt="..."
                    />
                  </div>
                  <div className="card-body newsCard__cardBody">
                    <p className="card-text newsCard__cardText">
                      Hydrogen ‘can power virtually all container ships crossing
                      the Pacific’
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 col-6 newsCard__col">
              <Link to="news-details" className="newsCard__link">
                <div className="card newsCard__card">
                  <div className="newsCard__imgWrapper">
                    <img
                      src={newsImg1}
                      className="card-img-top newsCard__img"
                      alt="..."
                    />
                  </div>
                  <div className="card-body newsCard__cardBody">
                    <p className="card-text newsCard__cardText">
                      Hydrogen ‘can power virtually all container ships crossing
                      the Pacific’
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <Pagination />
        </div>
        <div className="col-md-4 col-12 newsCard__feedCol shadow border rounded">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="H2Ships"
            options={{ height: 600 }}
          />
          {/* <a className="twitter-timeline" href="https://twitter.com/H2Ships">
            Tweets by H2Ships
          </a>{" "} */}
        </div>
      </div>
    </div>
  );
}

export default NewsCardContent;
