function SubscribeForm() {
  return (
    <div className="subscribeForm container-fluid">
      <div className="row subscribeForm__row">
        <div className="col-md-5 col-12">
          <div className="subscribeForm__title text-white">
            <h4>Complete this form to subscribe</h4>
            <h5>We’ll email you updates about the project</h5>
          </div>
        </div>

        <div className="col-md-5 col-12">
          <div className="subscribeForm__form">
            <form>
              <h1 className="text-white subscribeForm__formTitle">Subscribe</h1>

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
                  placeholder="Let us know your interests about our project"
                />
                <label for="floatingInput">
                  Let us know your interests about our project
                </label>
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
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeForm;
