import React from "react";
import classes from "./Button.module.css";

interface IProps {
  children: string;
  color?: string;
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({ children, onClick, color }) => {
  return (
    <button
      style={color ? { backgroundColor: color } : {}}
      className={classes.defaultBtn}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
