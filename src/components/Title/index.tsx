import React from "react";
import classes from "./Title.module.css";

interface IProps {
  children: React.ReactNode;
  color?: string;
}

const Title: React.FC<IProps> = ({ children, color }) => {
  return (
    <h1 style={color ? { color: color } : {}} className={classes.title}>
      {children}
    </h1>
  );
};

export default Title;
