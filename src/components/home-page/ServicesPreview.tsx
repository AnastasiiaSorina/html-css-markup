import BackgroundSpot2 from "@public/assets/background-spot2.svg";
import ServiceIcon2 from "@public/assets/seo-icon.svg";
import ServiceIcon3 from "@public/assets/ux-ui-icon.svg";
import ServiceIcon1 from "@public/assets/web-icon.svg";

import { Fragment, FunctionComponent } from "react";
import Column from "../layout/Column";
import Row from "../layout/Row";
import SectionDescription from "../SectionDescription";
import ServiceItem from "../ServiceItem";

// Services Preview
const ServicePreviewHeader = "our services";
const ServicePreviewTittle = "we develop digital products";
const ServicePreviewDescription =
  "You can discover all our services by clicking the link below.";

//Service Items
const ServiceHeader1 = "Web Development";
const ServiceDescription1 =
  "Our developers are carefully considering how your product should work while mainta...";

const ServiceHeader2 = "SEO optimization";
const ServiceDescription2 =
  "Promotion of your product is an important step in making money and constant popula...";

const ServiceHeader3 = "Ui/UX Design";
const ServiceDescription3 =
  "Everything starts with the beautiful. And professional design is of great importa...";

const ServicesPreview: FunctionComponent = () => {
  return (
    <Fragment>
      <Row className="services-preview">
        <Column size={4}>
          <SectionDescription
            buttonOff={"button-none"}
            sectionHeader={ServicePreviewHeader}
            sectionTittle={ServicePreviewTittle}
            sectionDescription={ServicePreviewDescription}
          />
        </Column>
        <Column size={8} className="items">
          <ServiceItem
            serviceIcon={ServiceIcon1}
            serviceHeader={ServiceHeader1}
            serviceDescription={ServiceDescription1}
          />
          <ServiceItem
            serviceIcon={ServiceIcon2}
            serviceHeader={ServiceHeader2}
            serviceDescription={ServiceDescription2}
          />
          <ServiceItem
            serviceIcon={ServiceIcon3}
            serviceHeader={ServiceHeader3}
            serviceDescription={ServiceDescription3}
          />
        </Column>
        <img
          src={BackgroundSpot2}
          alt="site-decoration"
          className="background-spot"
        />
      </Row>
    </Fragment>
  );
};

export default ServicesPreview;
