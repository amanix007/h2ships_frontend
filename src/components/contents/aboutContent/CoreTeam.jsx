/* eslint-disable jsx-a11y/anchor-is-valid */
import user from "../../../assets/images/user.png";

function CoreTeam() {
  return (
    <div className="coreTeam">
      <div className="container px-4 py-5">
        <h2 className="pb-2 text-center coreTeam__title">Core Team</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
          <div className="col-6 col-md-3">
            <div className="coreTeam__teamMember">
              <img src={user} alt="user" />
            </div>
            <h5 className="coreTeam__projectName">Project name</h5>
            <div>Org name:</div>
            <div>Lead investigator:</div>
            <div>Email:</div>
          </div>

          <div className="col-6 col-md-3">
            <div className="coreTeam__teamMember">
              <img src={user} alt="user" />
            </div>
            <h5 className="coreTeam__projectName">Project name</h5>
            <div>Org name:</div>
            <div>Lead investigator:</div>
            <div>Email:</div>
          </div>

          <div className="col-6 col-md-3">
            <div className="coreTeam__teamMember">
              <img src={user} alt="user" />
            </div>
            <h5 className="coreTeam__projectName">Project name</h5>
            <div>Org name:</div>
            <div>Lead investigator:</div>
            <div>Email:</div>
          </div>

          <div className="col-6 col-md-3">
            <div className="coreTeam__teamMember">
              <img src={user} alt="user" />
            </div>
            <h5 className="coreTeam__projectName">Project name</h5>
            <div>Org name:</div>
            <div>Lead investigator:</div>
            <div>Email:</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreTeam;
