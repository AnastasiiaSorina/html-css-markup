import Column from "@components/layout/Column";
import Container from "@components/layout/Container";
import Row from "@components/layout/Row";
import BackgroundSpot from "@public/assets/background-spot.svg";
import HeroImg1 from "@public/assets/hero-img-1.png";
import { FunctionComponent } from "react";
import Label from "./navigation/Label";
import SectionDescription from "./navigation/SectionDescription";

const Hero: FunctionComponent = ({}
) => {
  return (
    <Container className="hero">
      <Row>
        <Column size={6}>
        <Label contentSm={'Digital'} contentLg={'Digital'} className="label-hero-1"/>
          <img src={HeroImg1} alt="picture of a girl" className="image-hero" />
          <Label contentSm={'PRODUCTS'} contentLg={'PRODUCTS'} className="label-hero-2"/>
        </Column>
        <Column size={6}>
          <section className="hero-section">
           <SectionDescription sectionHeader ={heroHeader} sectionTittle={heroTittle} sectionDescription={heroDescription}/>
           <img 
              src={BackgroundSpot} 
              alt="site-decoration" className="background-spot"/>
          </section>
        </Column>
      </Row>
    </Container>
  );
};
export default Hero;
