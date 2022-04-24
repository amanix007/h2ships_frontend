import React from "react";

function ObjectiveContent() {
  return (
    <div className="objectiveContent container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="objectiveContent__title mb-5">Project Objectives</h2>
          <p className="objectiveContent__details">
            H2SHIPS wants to kick-start an H2 supply chain for water transport
            by developing H2 demonstration projects, an action plan for a future
            pilot and a blueprint for H2-based transport systems for North-West
            Europe.
          </p>
        </div>
        <div className="col-md-6">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://videos.files.wordpress.com/BG2qKvPt/waterstof-1_hd.mp4"
              title="YouTube video"
              className="shadow-lg objectiveContent__videoFrame"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ObjectiveContent;
