import Image from "next/image";
import classes from "./GameItem.module.css";

import { IGame } from "../../types";
import Title from "../Title";
import Button from "../Button";
import { useRouter } from "next/router";

interface IProps {
  game: IGame;
}

const GameItem: React.FC<IProps> = ({ game }) => {
  const router = useRouter();
  const handleGameButtonClick = () => {
    router.push(`/${game.id}`);
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
