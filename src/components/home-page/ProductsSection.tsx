import Column from "@components/layout/Column";
import Container from "@components/layout/Container";
import Row from "@components/layout/Row";
import Label from "@components/Label";
import SectionDescription from "@components/SectionDescription";
import ProductImg1 from "@public/assets/home-page/product-img1.png";
import { FunctionComponent } from "react";
import ProductsItem from "@components/ProductsItem";
import ProductIconItem1 from "@public/assets/product-icon1.svg";

const productsHeader = "what we do";
const productsTittle = "we develop digital products";
const productsDescription =
  "We appreciate every client and ready to help with all the issues that they have. Let’s figure out what we can do.";

const itemPercent1 = "63%";
const productIconItem1 = "Branding";
const productIconDescription1 =
  "This is a repetition in plastic forms, lines and colors of";

const itemPercent2 = "87%";
const productIconItem2 = "Strategy";
const productIconDescription2 =
  "This is a repetition in plastic forms, lines and colors of";

const itemPercent3 = "85%";
const productIconItem3 = "eCommerce";
const productIconDescription3 =
  "This is a repetition in plastic forms, lines and colors of";

const itemPercent4 = "99%";
const productIconItem4 = "Support";
const productIconDescription4 =
  "This is a repetition in plastic forms, lines and colors of";

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

        <Column size={7} className="products-section">
          <SectionDescription
            buttonOff={"button-none"}
            sectionHeader={productsHeader}
            sectionTittle={productsTittle}
            sectionDescription={productsDescription}
          />
          <div className="products-items">
            <Row>
              <Column size={6}>
                <ProductsItem
                  productIconSvg={ProductIconItem1}
                  itemPercent={itemPercent1}
                  productIconItem={productIconItem1}
                  productIconDescription={productIconDescription1}
                />
              </Column>
              <Column size={6}>
                <ProductsItem
                  productIconSvg={ProductIconItem1}
                  itemPercent={itemPercent2}
                  productIconItem={productIconItem2}
                  productIconDescription={productIconDescription2}
                />
              </Column>
            </Row>
            <Row>
              <Column size={6}>
                <ProductsItem
                  productIconSvg={ProductIconItem1}
                  itemPercent={itemPercent3}
                  productIconItem={productIconItem3}
                  productIconDescription={productIconDescription3}
                />
              </Column>
              <Column size={6}>
                <ProductsItem
                  productIconSvg={ProductIconItem1}
                  itemPercent={itemPercent4}
                  productIconItem={productIconItem4}
                  productIconDescription={productIconDescription4}
                />
              </Column>
            </Row>
          </div>
        </Column>
      </Row>
    </Container>
  );
};
export default ProductsSection;
