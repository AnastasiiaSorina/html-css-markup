import Triangle from "@public/assets/triangle.svg";
import { FunctionComponent } from "react";
import Column from "./layout/Column";
import Label from "./Label";
import Row from "./layout/Row";

interface IGalleryProps {
  galleryTitle: string;
  galleryHeader: string;
  img1: string;
  img2: string;
  img3: string;
  className?: string;
}

const Gallery: FunctionComponent<IGalleryProps> = ({
  galleryTitle,
  galleryHeader,
  className,
  img2,
  img1,
  img3,
}) => {
  return (
    <div className={`gallery ${className != null ? className : ""}`}>
      <div className="header-wrap">
        <img src={Triangle} alt="triangle" className="icon" />
        <span className="title">{galleryTitle}</span>
        <h2 className="header">{galleryHeader}</h2>
      </div>
      <Row>
        <Column size={10} className="gallery-items">
          <div className="gallery-item">
            <img src={img1} />
          </div>
          <div className="gallery-item">
            <img src={img2} />
          </div>
          <div className="gallery-item">
            <img src={img3} />
          </div>
        </Column>
        <Column size={2}>
          <Label
            contentSm={"cases"}
            contentLg={"cases"}
            className={"label-gallery"}
            direction={"top"}
          />
        </Column>
      </Row>
    </div>
  );
};
export default Gallery;
