import { Fragment, FunctionComponent } from "react";

interface IProductsItemProps {
  itemPercent?: string;
  productIconItem?: string;
  productIconDescription?: string;
  productIconSvg?: string;
}

const ProductsItem: FunctionComponent<IProductsItemProps> = ({
  productIconSvg,
  itemPercent,
  productIconItem,
  productIconDescription,
}) => {
  return (
    <Fragment>
      <div className="product-item">
        <div className="product-icon">
          <span>{itemPercent}</span>
          <img src={productIconSvg} alt="picture" className="icon" />
        </div>
        <div className="description">
          <h6>{productIconItem}</h6>
          <p>{productIconDescription}</p>
        </div>
      </div>
    </Fragment>
  );
};
export default ProductsItem;
