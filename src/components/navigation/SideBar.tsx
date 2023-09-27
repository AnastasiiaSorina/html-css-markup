import BurgerMenu from "@public/assets/burger-menu.svg";
import { Fragment, FunctionComponent } from "react";
import SocialMedia from "./SocialMedia";

const SideBar: FunctionComponent = () => {
  return (
    <Fragment>
      <section className="side-bar">
        <img src={BurgerMenu} alt="Menu"  className="burger-menu-icon"/>
        <SocialMedia />
      </section>
      
    </Fragment>
  );
};

export default SideBar;
