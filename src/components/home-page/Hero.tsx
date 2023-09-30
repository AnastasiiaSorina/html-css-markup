import Column from "@components/layout/Column";
import Container from "@components/layout/Container";
import Row from "@components/layout/Row";
import Label from "@components/Label";
import SectionDescription from "@components/SectionDescription";
import BackgroundSpot from "@public/assets/background-spot.svg";
import HeroImg1 from "@public/assets/home-page/hero-img-1.png";
import { FunctionComponent } from "react";

const heroHeader = "our services";
const heroTittle = "Digital products for your brand";
const heroDescription =
  "Our team is waiting for a new challenge, so we’re ready to make a cool brand.";

const Hero: FunctionComponent = ({}) => {
  return (
    <Container className="hero">
      <Row>
        <Column size={6} className="hero-wrap">
          <div className="image-hero">
            <img src={HeroImg1} alt="picture of a girl" />
          </div>

          <Label
            contentSm={"Digital"}
            contentLg={"Digital"}
            className="label-hero-1"
          />
          <Label
            contentSm={"PRODUCTS"}
            contentLg={"PRODUCTS"}
            className="label-hero-2"
          />
        </Column>

        <Column size={6}>
          <section className="hero-section">
            <SectionDescription
              sectionHeader={heroHeader}
              sectionTittle={heroTittle}
              sectionDescription={heroDescription}
            />
            <img
              src={BackgroundSpot}
              alt="site-decoration"
              className="background-spot"
            />
          </section>
        </Column>
      </Row>
    </Container>
  );
};
export default Hero;
