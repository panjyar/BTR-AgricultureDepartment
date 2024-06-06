import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { images } from "../../constants";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  const closeMobileClick = () => {
    setClicked(false);
  }

  return (
    <div>
      <nav className="NavbarItems">
        {/* For Small Screen */}
        <div className="app__navbar_logo">
          <Link to="/" onClick={closeMobileClick}>
            <img src={images.logo} alt="logo" />
          </Link>
        </div>

        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        {/* For Large Screen */}
        <ul className={clicked ? "nav_menu active" : "nav_menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.url} className={item.cName} onClick={closeMobileClick}>
                <i className={item.icon}></i> {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
