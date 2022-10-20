import React from "react";
import classes from "./Balloon.module.css";

import { IBallon } from "../../types";
import Image from "next/image";

interface IProps {
  ballon: IBallon;
  onClick: (ballonId: number) => void;
}

const Ballon: React.FC<IProps> = ({ ballon, onClick }) => {
  return (
    <div
      onSelect={(e) => e.preventDefault()}
      className={classes.balloon}
      style={{
        marginLeft: `${ballon.position.x}%`,
        marginTop: `${ballon.position.y}vh`,
      }}
      onClick={onClick.bind(this, ballon.id)}
    >
      <Image
        src={require(`../../assets/images/balloon-${ballon.color}.png`)}
        alt="balloon"
        width={80}
        height={80}
        draggable={false}
      />
    </div>
  );
};

export default Ballon;
