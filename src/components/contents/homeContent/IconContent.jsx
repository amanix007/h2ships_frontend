/* eslint-disable jsx-a11y/anchor-is-valid */
import renewable from "../../../assets/images/renewable.png";
import efficiency from "../../../assets/images/efficiency.png";
import pollution from "../../../assets/images/pollution.png";
import noise from "../../../assets/images/noise.png";

function IconContent() {
  return (
    <div className="iconContent">
      <div className="container px-4 py-5">
        <h2 className="pb-2 text-center iconContent__title">
          Why hydrogen is the best fuel for the shipping industry!
        </h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
          <div className="feature col-6 col-md-3">
            <div className="feature-icon iconContent__featureIcon">
              <img src={renewable} alt="renewable" />
            </div>
            <h4>Renewable Hydrogen</h4>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
          </div>
          <div className="feature col-6 col-md-3">
            <div className="feature-icon iconContent__featureIcon">
              <img src={efficiency} alt="efficiency" />
            </div>
            <h4>Energy Efficiency</h4>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
          </div>
          <div className="feature col-6 col-md-3">
            <div className="feature-icon iconContent__featureIcon">
              <img src={pollution} alt="pollution" />
            </div>
            <h4>Decarbonisation</h4>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
          </div>
          <div className="feature col-6 col-md-3">
            <div className="feature-icon iconContent__featureIcon">
              <img src={noise} alt="noise" />
            </div>
            <h4>Noise Pollution</h4>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconContent;
