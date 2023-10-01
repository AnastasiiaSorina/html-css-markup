import ShareIcon from "@public/assets/share-icon.svg";
import { Fragment, FunctionComponent } from "react";
import ArrowIcon from "@public/assets/arrow.svg";
import UserImg from "@public/assets/user-img.svg";

interface IBlogItemProps {
  userName: string;
  dataTime: string;
  itemDescription: string;
  className?: string;
  blogImg?: string;
}

const BlogItem: FunctionComponent<IBlogItemProps> = ({
  userName,
  dataTime,
  itemDescription,
  className,
  blogImg,
}) => {
  return (
    <Fragment>
      <section className="blog-item">
        <div className="blog-img">
          <img
            src={blogImg}
            alt="picture"
            className={`${className != null ? className : ""}`}
          />
        </div>

        <div className="blog-footer">
          <img className="user-icon" src={UserImg} />
          <span className="user-name">{userName}</span>
          <span className="data-time">{dataTime}</span>
          <a href="#">
            <img src={ShareIcon} alt="share button" />
          </a>
        </div>

        <p>{itemDescription}</p>
        <a href="#" className="blog-button">
          <img src={ArrowIcon} alt="arrow" className="arrow" />
        </a>
      </section>
    </Fragment>
  );
};

export default BlogItem;
