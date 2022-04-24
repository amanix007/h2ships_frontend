/* eslint-disable jsx-a11y/anchor-is-valid */
function JoinForm() {
  return (
    <div className="subscribeForm joinForm container-fluid">
      <div className="row">
        <div className="col-md-12 col-12">
          <div className="joinForm__title text-white text-center">
            <h4>Apply to Join the Community</h4>
            <h5>
              If you would like to get involved with this project and join our
              community please complete the form below.
            </h5>
          </div>
        </div>
      </div>

      <div className="row joinForm__row">
        <div className="col-md-6 col-12">
          <div className="subscribeForm__form">
            <form>
              <div className="form-floating subscribeForm__formFloating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Name"
                  required
                />
                <label for="floatingInput">Name (required)</label>
              </div>

              <div className="form-floating subscribeForm__formFloating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Institution / Company Affiliation (required)"
                  required
                />
                <label for="floatingInput">
                  Institution / Company Affiliation (required)
                </label>
              </div>

              <div className="form-floating subscribeForm__formFloating">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with dropdown button"
                    placeholder="Company size (please select most appropriate option)"
                  />

                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        50 or less employees
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        50-250 employees
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        250-1000 employees
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        more than 1000 employees
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="form-floating subscribeForm__formFloating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Type of service, e.g., logistics, manufacturing, maintenance, transport, etc"
                />
                <label for="floatingInput">
                  Type of service ,e.g, logistics, manufacturing, maintenance,
                  transport, etc
                </label>
              </div>

              <div className="form-floating subscribeForm__formFloating">
                <textarea
                  className="form-control"
                  id="floatingInput"
                  rows="5"
                  placeholder="Address"
                />
                <label for="floatingInput">Address</label>
              </div>

              <div className="form-floating subscribeForm__formFloating">
                <textarea
                  className="form-control"
                  id="floatingInput"
                  rows="5"
                  placeholder="How did you learn about us"
                />
                <label for="floatingInput">How did you learn about us</label>
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-6 col-12">
          <div className="subscribeForm__form">
            <form>
              <div className="form-floating subscribeForm__formFloating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Who are your key customers"
                />
                <label for="floatingInput">Who are your key customers</label>
              </div>

              <div className="form-floating subscribeForm__formFloating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="What kind of vessels are served by your port"
                />
                <label for="floatingInput">
                  What kind of vessels are served by your port
                </label>
              </div>

              <div className="form-floating subscribeForm__formFloating">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with dropdown button"
                    placeholder="Type of port"
                  />

                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        River
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sea
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="form-floating subscribeForm__formFloating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                />
                <label for="floatingInput">Email (required)</label>
              </div>

              <div className="form-floating subscribeForm__formFloating">
                <textarea
                  className="form-control"
                  id="floatingInput"
                  rows="5"
                  placeholder="How would working with H2SHIPS Project assist with deploying hydrogen technologies at your port"
                />
                <label for="floatingInput">
                  How would working with H2SHIPS Project assist with deploying
                  hydrogen technologies at your port
                </label>
              </div>

              <div className="form-floating subscribeForm__formFloating">
                <textarea
                  className="form-control"
                  id="floatingInput"
                  rows="5"
                  placeholder="What impact would deploying hydrogen technologies have on your port"
                />
                <label for="floatingInput">
                  What impact would deploying hydrogen technologies have on your
                  port
                </label>
              </div>

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

export default JoinForm;
