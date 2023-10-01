import ShareIcon from "@public/assets/share-icon.svg";
import { Fragment, FunctionComponent } from "react";
import ArrowIcon from "@public/assets/arrow.svg";
import UserImg from "@public/assets/user-img.svg";
import Container from "./layout/Container";
import Row from "./layout/Row";
import Column from "./layout/Column";
import BackgroundSpot4 from "@public/assets/background-spot4.svg";
import Button from "./navigation/Button";

const GetInTouchSection: FunctionComponent = () => {
  return (
    <Container className="get-in-touch">
      <Row>
        <Column size={5}>
          <h2>Always Be in touch</h2>
          <p>
            Subscribe if you want always to be known about all the news and
            available propositions.
          </p>
        </Column>
        <Column size={7} className="subscribe-wrap">
          <form>
            <input placeholder="Enter your email" />
            <Button buttonName={"Subscribe"} />
          </form>
          <div className="checkbox-wrap">
            <input className="checkbox" type="checkbox" />
            <span>
              I accept all{" "}
              <span className="highlight">Terms and Conditions</span>
            </span>
          </div>
        </Column>
      </Row>
      <img
        src={BackgroundSpot4}
        alt="site decoration"
        className="background-spot3"
      />
    </Container>
  );
};

export default GetInTouchSection;
