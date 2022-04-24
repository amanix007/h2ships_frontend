/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect } from "react";
import Aos from "aos";

function TimelineContent() {
  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);
  return (
    <div className="container timeLine">
      <h1 className="timeLine__title text-center">Timeline</h1>

      <div className="row">
        <div className="col-md-12 col-12">
          <ul className="timeline timeLine__ul">
            <li className="">
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease"
                data-aos-duration="1000"
                data-aos-once="true"
                className="timeline-badge"
              ></div>

              <div className="timeline-panel timeline-panel-left">
                <div
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-easing="ease"
                  data-aos-duration="2000"
                  data-aos-once="true"
                  className="timeline-heading"
                >
                  <h1 className="timeLine__cardYear">2016</h1>

                  <h4 className="timeLine__cardTitle">Project initiated</h4>
                  <p>
                    Our partnership with Deutsche Aircraft to develop a
                    hydrogen-powered Dornier 328, a 40-seat aircraft covering up
                    to 2000 km, by 2025 is announced.
                  </p>

                  <a href="#" className="timeLine__externalLink">
                    Read more
                  </a>
                </div>
              </div>
            </li>

            <li className="timeline-inverted ">
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease"
                data-aos-duration="1000"
                data-aos-once="true"
                className="timeline-badge"
              ></div>
              <div className="timeline-panel timeline-panel-right">
                <div
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-easing="ease"
                  data-aos-duration="2000"
                  data-aos-once="true"
                  className="timeline-heading"
                >
                  <h1 className="timeLine__cardYear">2016</h1>

                  <h4 className="timeLine__cardTitle">Project initiated</h4>
                  <p>
                    Our partnership with Deutsche Aircraft to develop a
                    hydrogen-powered Dornier 328, a 40-seat aircraft covering up
                    to 2000 km, by 2025 is announced.
                  </p>

                  <a href="#" className="timeLine__externalLink">
                    Read more
                  </a>
                </div>
              </div>
            </li>
            <li className="">
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease"
                data-aos-duration="1000"
                data-aos-once="true"
                className="timeline-badge"
              ></div>
              <div className="timeline-panel timeline-panel-left">
                <div
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-easing="ease"
                  data-aos-duration="2000"
                  data-aos-once="true"
                  className="timeline-heading"
                >
                  <h1 className="timeLine__cardYear">2016</h1>

                  <h4 className="timeLine__cardTitle">Project initiated</h4>
                  <p>
                    Our partnership with Deutsche Aircraft to develop a
                    hydrogen-powered Dornier 328, a 40-seat aircraft covering up
                    to 2000 km, by 2025 is announced.
                  </p>

                  <a href="#" className="timeLine__externalLink">
                    Read more
                  </a>
                </div>
              </div>
            </li>
            <li className="timeline-inverted ">
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease"
                data-aos-duration="1000"
                data-aos-once="true"
                className="timeline-badge"
              ></div>
              <div className="timeline-panel timeline-panel-right">
                <div
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-easing="ease"
                  data-aos-duration="2000"
                  data-aos-once="true"
                  className="timeline-heading"
                >
                  <h1 className="timeLine__cardYear">2016</h1>

                  <h4 className="timeLine__cardTitle">Project initiated</h4>
                  <p>
                    Our partnership with Deutsche Aircraft to develop a
                    hydrogen-powered Dornier 328, a 40-seat aircraft covering up
                    to 2000 km, by 2025 is announced.
                  </p>

                  <a href="#" className="timeLine__externalLink">
                    Read more
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TimelineContent;
