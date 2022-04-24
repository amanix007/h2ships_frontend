import faqimg from "../../../assets/images/faqimg.jpg";
import FaqAccordion from "./FaqAccordion";

function FaqBody() {
  return (
    <div className="faqBody container">
      <div className="row">
        <div className="col-md-5 col-12 faqBody__faqImg">
          <img src={faqimg} alt="faq-img" />
        </div>
        <div className="col-md-7 col-12">
          <FaqAccordion />
        </div>
      </div>
    </div>
  );
}

export default FaqBody;
