import Arrow from "@public/assets/arrow.svg";
import TriangleGroup from "@public/assets/triangle-group.svg";
import { Fragment, FunctionComponent } from "react";

interface IServiceItemProps {
  className?: string;
  serviceIcon?: string;
  serviceDescription?: string;
  serviceHeader?: string;
 
}

const ServiceItem: FunctionComponent<IServiceItemProps> = ({
  serviceIcon,
  className,
  serviceDescription,
  serviceHeader,
  
}) => {
  return (
    <Fragment>
      <div className="service-item">
        <div className="service-item-icons">
          <img src={TriangleGroup} className={`service-item-triangle ${className}`}/>
          <img src={serviceIcon} className="service-item-icon" />
        </div>
        <h3>{serviceHeader}</h3>
        <p>{serviceDescription}</p>
        <img src={Arrow} className="arrow"/>
      </div>
    </Fragment>
  );
};

export default ServiceItem;
