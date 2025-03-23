import { useEffect, useState } from "react";
import navbarData from "../data/navbarData.json";
// import logo from "../assets/america-logo.svg";
import getRandomColor from "../hooks/getRandomColor";
import useMultiDarkMode from "../hooks/useMultiDarkMode";

export default function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [toggleIconClass, setToggleIconClass] = useState("bi bi-moon");
  const [isDarkMode, toggleDarkMode] = useMultiDarkMode();

  useEffect(() => {
    const componentRoot = document.getElementById("navbar");
    const color = getRandomColor();
    componentRoot.style.setProperty("--random-color", color);
    if (isDarkMode) {
      setToggleIconClass("bi bi-brightness-high");
    } else {
      setToggleIconClass("bi bi-moon");
    }
  }, [isDarkMode]);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNavbar = () => setIsNavCollapsed(true);

  return (
    <nav className="nav navbar navbar-expand-md" id="navbar">
      <div className="nav__logo" data-attribute="logotype">
      </div>
      {/* <img className="nav__logo" src={logo} alt="logo" /> */}
      <button className='nav__button-darkmode' onClick={toggleDarkMode} id="darkmode-button" >
        <i className={toggleIconClass}></i>
      </button>
      <button
        className="navbar-toggler nav__toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <i className="bi bi-three-dots-vertical">
        </i>      </button>
      <div
        className={`${isNavCollapsed ? "collapse" : ""
          } navbar-collapse justify-content-end`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          {navbarData.map((item) => {
            return (
              <li className="nav-item" key={item.name}>
                <a
                  className="nav-link"
                  href={item.href}
                  aria-label={item.ariaLabel}
                  tabIndex="0"
                  onClick={closeNavbar}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
