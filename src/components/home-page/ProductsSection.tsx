import Column from "@components/layout/Column";
import Container from "@components/layout/Container";
import Row from "@components/layout/Row";
import Label from "@components/Label";
import SectionDescription from "@components/SectionDescription";
import BackgroundSpot from "@public/assets/background-spot.svg";
import ProductImg1 from "@public/assets/home-page/product-img1.png";
import { FunctionComponent } from "react";

const productsHeader = "what we do";
const productsTittle = "we develop digital products";
const productsDescription =
  "We appreciate every client and ready to help with all the issues that they have. Let’s figure out what we can do.";

const ProductsSection: FunctionComponent = ({}) => {
  return (
    <Container className="products">
      <Row>
        <Column size={5} className="products-wrap">
          <div className="image-product">
            <img src={ProductImg1} alt="picture of a girl" />
          </div>

          <Label
            contentSm={"Digital"}
            contentLg={"Digital"}
            className="label-hero-1"
          />
        </Column>

        <Column size={9} className="products-section">
          <SectionDescription
            buttonOff={"button-none"}
            sectionHeader={productsHeader}
            sectionTittle={productsTittle}
            sectionDescription={productsDescription}
          />
        </Column>
      </Row>
    </Container>
  );
};
export default ProductsSection;
