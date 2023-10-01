import { Fragment, FunctionComponent } from "react";
import BlogItem from "./BlogItem";
import BlogImg1 from "@public/assets/img-blog1.png";
import BlogImg2 from "@public/assets/img-blog2.png";
import BackgroundSpot3 from "@public/assets/background-spot3.svg";
import Row from "./layout/Row";
import Column from "./layout/Column";
import Label from "./Label";
import Container from "./layout/Container";
import Triangle from "@public/assets/triangle.svg";
import Arrow from "@public/assets/arrow.svg";

const BlogSection: FunctionComponent = () => {
  return (
    <Fragment>
      <Container className="blog-section">
        <div className="blog-section-header">
          <img src={Triangle} alt="triangle" className="icon" />
          <span>blog</span>
          <div className="arrow">
            <h2>the latest news in digens</h2>
            <a href="#">
              <span>read blog</span> <img src={Arrow} alt="arrow" />
            </a>
          </div>
        </div>
        <Row>
          <Column size={11} className="blog-items">
            <BlogItem
              blogImg={BlogImg1}
              userName="Laura Poliquine"
              dataTime="Nov 17, 2020"
              itemDescription="the top places for inspiration to have a rest and create something new"
            />
            <BlogItem
              blogImg={BlogImg2}
              userName="Laura Poliquine"
              dataTime="Nov 17, 2020"
              itemDescription="the top places for inspiration to have a rest and create something new"
            />
          </Column>
          <Column size={1}>
            <Label
              contentSm={"our blog"}
              contentLg={"news"}
              className={"label-blog"}
              direction={"top"}
            />
          </Column>
        </Row>
        <img
          src={BackgroundSpot3}
          alt="site decoration"
          className="background-spot3"
        />
      </Container>
    </Fragment>
  );
};

export default BlogSection;
