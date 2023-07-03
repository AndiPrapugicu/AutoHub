import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { NAV_ITEMS } from "./NavbarIcons";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="nav flex justify-between">
        <a className="autohublogo" href="/">
          <img
            src="./autohublogo.png"
            style={{ width: "200px", height: "50px" }}
          />
        </a>
        <div className="carlist">
          <button
            className="carlist-button"
            onClick={() => {
              navigate("/carlist");
            }}
          >
            Show Car List
          </button>
        </div>
        <div className="search relative flex items-center">
          <input
            placeholder=" Search for a car"
            type="text"
            className="search-bar text-white bg-[black] appearance-none rounded-full !py-1 !px-2.5 w-[500px] ring-1 ring-white/75 focus:ring-white"
          />
        </div>

        <ul className="flex gap-2">
          {NAV_ITEMS.map((val, key) => (
            <Link to={val.link} className="icons" key={key}>
              {/* <div className="icon-container"> */}
              <li
                id={window.location.pathname === val.link ? "active" : ""}
                onClick={() => {
                  navigate(val.link);
                }}
              >
                <div className="icon-container">
                  <div id="navbar-icon">{val.icon}</div>
                  <div id="navbar-title">{val.title}</div>
                </div>
                <span className="login-text">{val.name}</span>
              </li>
              {/* </div> */}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
