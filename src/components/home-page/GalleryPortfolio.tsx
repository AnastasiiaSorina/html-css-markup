import Img1 from "@public/assets/gallery/michael-1.png";
import Img2 from "@public/assets/gallery/laura-chouette-1.png";
import Img3 from "@public/assets/gallery/rudra-chakraborty-1.png";
import { FunctionComponent } from "react";
import Gallery from "../Gallery";
import Container from "../layout/Container";

const GalleryPortfolio: FunctionComponent = () => {
  return (
    <Container>
      <Gallery
        className="gallery-portfolio"
        img1={Img1}
        img2={Img2}
        img3={Img3}
        galleryTitle={"portfolio"}
        galleryHeader={"check our latest cases"}
      ></Gallery>
    </Container>
  );
};
export default GalleryPortfolio;
