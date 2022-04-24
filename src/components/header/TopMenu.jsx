import { Link } from "react-router-dom";

function TopMenu() {
  return (
    <div className="topMenu">
      <Link to="login">
        <span className="btn btn-sm btn-secondary">Login </span>
      </Link>

      <Link to="register">
        <span className="btn btn-sm btn-primary">Sign up </span>
      </Link>
    </div>
  );
}

export default TopMenu;
