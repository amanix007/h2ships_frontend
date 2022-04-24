function EnquiryForm() {
  return (
    <div className="subscribeForm enquiryForm container-fluid">
      <div className="row subscribeForm__row">
        <div className="col-md-5 col-12">
          <div className="subscribeForm__title text-white">
            <h4>Send us your enquiry</h4>
            <h5>
              If you would like to know anything more about this project or have
              any questions about hydrogen and shipping please contact us.
            </h5>
          </div>
        </div>

        <div className="col-md-5 col-12">
          <div className="subscribeForm__form">
            <form>
              <h1 className="text-white subscribeForm__formTitle">
                Enquiry form
              </h1>

              <div className="form-floating subscribeForm__formFloating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Name"
                  required
                />
                <label for="floatingInput">Name</label>
              </div>
              <div className="form-floating subscribeForm__formFloating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating subscribeForm__formFloating">
                <textarea
                  class="form-control"
                  id="floatingInput"
                  rows="5"
                  placeholder="Message"
                />
                <label for="floatingInput">Message</label>
              </div>

              {/*<div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>*/}
              <button
                className="w-100 btn btn-lg btn-primary subscribeForm__submitBtn"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnquiryForm;
