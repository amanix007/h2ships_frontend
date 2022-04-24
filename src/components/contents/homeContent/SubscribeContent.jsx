function SubscribeContent() {
  return (
    <div className="subscribeContent text-center shadow-sm">
      {/*<div className="subscribeContent__overlay"></div>*/}
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-9 mx-auto">
            <h2 className="text-white mb-4">
              {" "}
              Stay Informed of newsletters & publications{" "}
            </h2>
          </div>
          <div className="col-md-10 col-lg-8 mx-auto">
            <form method="post">
              <div className="subscribeContent__form-row">
                <div className="subscribeContent__form-content-1">
                  <input
                    type="email"
                    id="subscribe_email"
                    className="form-control subscribeContent__form-control"
                    placeholder="Enter your email..."
                  />
                </div>
                <div className="subscribeContent__form-content-2">
                  <button
                    id="submit-subscribe_email"
                    type="submit"
                    className="btn btn-primary subscribeContent__btnSubscribe"
                  >
                    Subscribe now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeContent;
