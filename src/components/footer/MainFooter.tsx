import Column from "@components/layout/Column";
import Container from "@components/layout/Container";
import Row from "@components/layout/Row";
import SocialMedia from "@components/navigation/SocialMedia";
import { FunctionComponent } from "react";
import Logo from "../icon/Logo";
import Menu from "../navigation/Menu";

const MainFooter: FunctionComponent = () => {
  return (
    <Container className="footer">
      <Row>
        <Column size={4} className="footer-logo">
          <Logo />
        </Column>
        <Column size={8}>
          <Menu />
        </Column>
      </Row>
      <hr className="footer-line"/>
      <Row className="footer-section-info">
        <Column size={5} >
          <SocialMedia position="row" />
        <p>© All rights reserved. Digens 2020</p>
        </Column>
          
        <Column size={7} className="footer-section">
          <div className="footer-info">
            <h6>Address</h6>
            <p>27 Division St, New York, <br/>NY 10002, USA</p>
          </div>
          <div className="footer-info">
            <h6>Hit us up:</h6>
            <p>+1 344 789 07 68 info@sitename.com</p>
          </div>
          <div className="footer-info">
            <h6>useful links</h6>
            <p>Help and Support Careers</p>
          </div>
        </Column>
      </Row>
    </Container>
  );
};
export default MainFooter;
