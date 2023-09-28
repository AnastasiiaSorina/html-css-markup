import Button from "@components/navigation/Button";
import Triangle from "@public/assets/triangle.svg";
import { Fragment, FunctionComponent } from "react";

interface ISectionDescriptionProps {
  sectionHeader: string;
  sectionTittle: string;
  sectionDescription: string;  
  className?: string;
 
}

const SectionDescription: FunctionComponent<ISectionDescriptionProps> = ({
  sectionHeader,
  sectionTittle,
  sectionDescription,
  className,
  
}) => {
  return (
    <Fragment>
      <section className="section-description">
            <div className={`wrap ${className != null ? className : ""}`}>
              <img src={Triangle} alt="triangle" className="icon"/>
              <span className="header-4">{sectionHeader}</span>
              <h2>{sectionTittle}</h2>
              <p>{sectionDescription}</p>
              <Button />
            </div>
        </section>
    </Fragment>
  );
};

export default SectionDescription;
