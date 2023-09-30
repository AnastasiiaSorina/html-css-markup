import Column from "@components/layout/Column";
import Row from "@components/layout/Row";
import BackgroundSpot from "@public/assets/background-spot.svg";
import HeroImg1 from "@public/assets/hero-img-1.png";
import Triangle from "@public/assets/triangle.svg";
import { Fragment, FunctionComponent } from "react";
import Button from "./navigation/Button";
import Label from "./navigation/Label";

const SectionDescription: FunctionComponent = ({contentSm, contentLg, className,}
) => {
  return (
    <Fragment>
      <Row>
        <Column size={6}>
        <Label contentSm={'Digital'} contentLg={'Digital'} className="label-hero-1"/>
          <img src={HeroImg1} alt="picture of a girl" className="image-hero" />
          <Label contentSm={'PRODUCTS'} contentLg={'PRODUCTS'} className="label-hero-2"/>
        </Column>
        <Column size={6}>
          <section className="hero-section">
            <div className="hero-description">
              <img src={Triangle} alt="triangle" className="icon"/>
              <span className="header-4">what we do</span>
              <h2>Digital products for your brand</h2>
              <p>Our team is waiting for a new challenge, so we’re ready to make a cool brand.</p>
              <Button />
            </div>
            <img src={BackgroundSpot} alt="site-decoration" className="background-spot"/>
          </section>
        </Column>
      </Row>
     
      </Fragment>
  );
};
export default SectionDescription;
