import { Fragment, FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

const Menu: FunctionComponent = () => (
  <Fragment>
    <nav className="menu">
      <ul className="menu-wrap">
        <li className="menu-items">
          <NavLink to="/" className="menu-link">
            <span>HOME</span>
          </NavLink>
        </li>

        <li className="social-media-line"><span>|</span></li>

        <li className="menu-items">
          <NavLink to="/about" className="menu-link">
            <span>ABOUT US</span>
          </NavLink>
        </li>

        <li className="social-media-line"><span>|</span></li>

        <li className="menu-items">
          <NavLink to="/services" className="menu-link">
            <span>SERVICES</span>
          </NavLink>
        </li>

        <li className="social-media-line"><span>|</span></li>

        <li className="menu-items">
          <NavLink to="#portfolio" className="menu-link">
            <span>PORTFOLIO</span>
          </NavLink>
        </li>

        <li className="social-media-line"><span>|</span></li>

        <li className="menu-items">
          <NavLink to="/blog" className="menu-link">
            <span>BLOG</span>
          </NavLink>
        </li>

        <li className="social-media-line"><span>|</span></li>

        <li className="menu-items">
          <NavLink to="/contact" className="menu-link">
            <span>CONTACT US</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  </Fragment>
);

export default Menu;
