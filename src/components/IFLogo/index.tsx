import { CSSProperties } from "react";

interface IProps {
  style?: CSSProperties;
  size: number;
}

const IFLogo: React.FC<IProps> = ({ style, size }) => {
  return (
    <div style={style}>
      <img
        src={require("../../assets/images/iflogo.png")}
        alt="if-logo"
        width={size}
        height={size + size / 2}
      />
    </div>
  );
};

export default IFLogo;
