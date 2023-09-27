import { FunctionComponent } from "react";

type Position = "row" | "column";

export interface ISocialMediaProps {
  position?: Position;
  className?: string;
}

const SocialMedia: FunctionComponent<ISocialMediaProps> = ({
  className,
  position,
}) => {
  return (
    <ul
      className={`social-media ${position === "row" ? "position-row" : ""}
       ${className != null ? className : ""}`}
    >
      <li>
        <a
          href="https://www.linkedin.com/in/anastasiia-sorina-b9681686"
          target="_blank"
        >
         <span>Fb</span>
        </a>
      </li>
      <li className="social-media-line"><span>|</span></li>
      <li>
        <a href="https://github.com/AnastasiiaSorina" target="_blank">
          <span>Tw</span>
        </a>
      </li>
      <li className="social-media-line"><span>|</span></li>
      <li>
        <a href="https://www.instagram.com/anastasaiia.sorina" target="_blank">
          <span>In</span>
        </a>
      </li>
    </ul>
  );
};

SocialMedia.defaultProps = {
  position: "column",
};
export default SocialMedia;
