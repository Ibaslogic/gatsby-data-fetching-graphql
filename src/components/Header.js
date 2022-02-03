import React from "react";
import { Link } from "gatsby";
import menuItems from "../menuItems";

const Header = () => {
  return (
    <header className="site__header">
      <div className="nav__area inner">
        <Link to="/" className="logo">
          Demo Site
        </Link>
        <nav>
          <ul className="menus">
            {menuItems.map(({ url, label }, index) => (
              <li className="menu__items" key={index}>
                <Link to={`${url}`}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
