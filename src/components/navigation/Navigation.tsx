import Logo from "@components/icon/Logo";
import Column from "@components/layout/Column";
import Container from "@components/layout/Container";
import Row from "@components/layout/Row";
import MobileSvg from "@public/assets/mobile.svg";
// import MobileMenu from "@components/navigation/MobileMenu";
import { FunctionComponent } from "react";

const Navigation: FunctionComponent = () => {
  return (
    <Container className="navigation">
      <Row>
        <Column size={6} sizeSM={5} className="nav-menu-wrap">
          <Logo />
        </Column>
        <Column size={6} sizeSM={7} className="nav-feedback-wrap">
<div></div>
          <img id="mobile-svg" src={MobileSvg} />
          <span className="mob-number">+1 547 125 89 65</span>
          <a className="nav-button"><span>Get A Quote</span></a>
        </Column>
      </Row>
    </Container>
  );
};

export default Navigation;
