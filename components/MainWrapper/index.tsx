import { CSSProperties } from "react";
import classes from "./MainWrapper.module.css";

interface IProps {
  children: React.ReactNode;
  style?: CSSProperties;
  mainMenu?: boolean;
}

const MainWrapper: React.FC<IProps> = ({ children, style, mainMenu }) => {
  if (mainMenu) {
    style = {
      ...style,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    };
  }
  return (
    <div style={style} className={classes.mainWrapper}>
      {children}
    </div>
  );
};

export default MainWrapper;
