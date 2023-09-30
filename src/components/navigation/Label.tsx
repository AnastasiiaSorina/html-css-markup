import { Fragment, FunctionComponent } from "react";

type Rotation = "turn" | "smooth";
type Direction = "top" | "bottom";

interface ILabelProps {
  contentSm: string;
  contentLg: string;
  direction?: Direction;
  rotation?: Rotation;
  className?: string;
  colorSm?: string;
  colorLg?: string;
}

const Label: FunctionComponent<ILabelProps> = ({
  contentSm,
  contentLg,
  direction,
  rotation,
  className,
}) => {
  return (
    <Fragment>
      <p
        data-title={`${contentLg}`}
        className={`label-sm ${className != null ? className : ""} ${
          direction === "top" ? "direction-top" : ""
        } ${direction === "bottom" ? "direction-bottom" : ""} ${
          rotation === "turn" ? "rotation-turn" : ""
        } ${rotation === "smooth" ? "rotation-smooth" : ""}`}
      >{`${contentSm}`}</p>
    </Fragment>
  );
};

Label.defaultProps = {
  direction: "bottom",
  rotation: "turn",
};

export default Label;
