import { useRouter } from "next/router";

import MainWrapper from "../components/MainWrapper";
import Loader from "../components/Loader";
import BackButton from "../components/BackButton";

import { games } from "./_app";
import { IGame } from "../types";

const GamePage = () => {
  const router = useRouter();
  const { query } = router;

  if (!query || !query.gameName) {
    return (
      <MainWrapper>
        <Loader />
      </MainWrapper>
    );
  }

  const { gameName } = query;

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
