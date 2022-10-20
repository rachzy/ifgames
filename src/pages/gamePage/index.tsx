import { useParams } from "react-router-dom";

import MainWrapper from "../../components/MainWrapper";
import Loader from "../../components/Loader";
import BackButton from "../../components/BackButton";

import { games } from "../../App";

const GamePage = () => {
  const { gameName } = useParams();
  if (!gameName) {
    return (
      <MainWrapper>
        <Loader />
      </MainWrapper>
    );
  }

  const game = games.filter(
    (game) => game.id.toLowerCase() === gameName.toString().toLowerCase()
  )[0];

  return (
    <>
      <BackButton />
      {game.component}
    </>
  );
};

export default GamePage;
