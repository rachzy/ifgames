import { CSSProperties } from "react";
import classes from "./FlatContainer.module.css";

interface IProps {
  children: React.ReactNode;
  center?: boolean;
  spacingType?: "center" | "space-between" | "space-around" | "space-evenly";
  fullSize?: boolean;
}

const FlatContainer: React.FC<IProps> = ({
  children,
  center,
  spacingType,
  fullSize,
}) => {
  const returnStyles = () => {
    const finalStyles: CSSProperties = {};
    if (fullSize) {
      finalStyles["width"] = "100%";
    }
    if (center) {
      finalStyles["justifyContent"] = "center";
      finalStyles["alignItems"] = "center";
    }
    if (spacingType) {
      finalStyles["justifyContent"] = spacingType;
    }
    return finalStyles;
  };
  return (
    <div style={returnStyles()} className={classes.flatContainer}>
      {children}
    </div>
  );
};

export default FlatContainer;
