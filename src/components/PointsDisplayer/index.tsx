import React from "react";
import classes from "./PointsDisplayer.module.css";

interface IProps {
  text: string;
  points: number;
  pointsColor: string;
}

const PointsDisplayer: React.FC<IProps> = ({ text, points, pointsColor }) => {
  return (
    <p className={classes.pointsLabel}>
      {text}: <span style={{ color: pointsColor }}>{points}</span>
    </p>
  );
};

export default PointsDisplayer;
