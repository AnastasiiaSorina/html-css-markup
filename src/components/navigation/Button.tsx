import { FunctionComponent } from "react";


export interface IButtonProps {
  className?: string;
  handlerOnClick?: (newVal?) => void;
}
const Button: FunctionComponent<IButtonProps> = ({
  className,
  handlerOnClick,
}) => {
  return (
    <button
      className={`button ${className != null ? className : ""}`}
      onClick={(newVal) => handlerOnClick(newVal)}
    > Get more
    </button>
  );
};


export default Button;