/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function EventCard() {
  return (
    <div className="eventCard">
      <div className="eventCard__flex">
        <div className="card eventCard__card">
          <div className="card-body">
            <h5 className="card-title">19 February</h5>
            <h6 className="card-subtitle mb-2 fw-bold text-dark">
              H2Ships event
            </h6>
            <p className="card-text">KTN – Decarbonising Ports & Harbours</p>
            <p className="text-secondary fw-bold">BOOKING ENDED</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
