import { FunctionComponent } from "react";

export interface IButtonProps {
  className?: string;
  buttonName?: string;
  handlerOnClick?: (newVal?) => void;
}
const Button: FunctionComponent<IButtonProps> = ({
  className,
  buttonName,
  handlerOnClick,
}) => {
  return (
    <button
      className={`button ${className != null ? className : ""}`}
      onClick={(newVal) => handlerOnClick(newVal)}
    >
      {buttonName}
    </button>
  );
};

export default Button;
