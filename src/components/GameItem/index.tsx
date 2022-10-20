import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./GameItem.module.css";

import { IGame } from "../../types";
import Title from "../Title";
import Button from "../Button";

interface IProps {
  game: IGame;
}

const GameItem: React.FC<IProps> = ({ game }) => {
  const navigate = useNavigate();
  const handleGameButtonClick = () => {
    navigate(`/ifgames/${game.id}`);
  };
  return (
    <div className={classes.gameContainer}>
      {/* <Image
        src={require(`../../assets/${game.imageName}`)}
        alt="game-thumbnail"
      /> */}
      <Title>{game.title}</Title>
      <p>{game.description}</p>
      <Button onClick={handleGameButtonClick}>Jogar</Button>
    </div>
  );
};

export default GameItem;
