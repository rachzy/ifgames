import React from "react";
import classes from "./Subtitle.module.css";

interface IProps {
  children: string;
  color?: string;
}

const Subtitle: React.FC<IProps> = ({ children, color }) => {
  return (
    <p style={color ? { color: color } : {}} className={classes.subtitle}>
      {children}
    </p>
  );
};

export default Subtitle;
