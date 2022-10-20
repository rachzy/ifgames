import { useState } from "react";

import Game from "./Core";

import Button from "../../components/Button";
import Title from "../../components/Title";
import PointsDisplayer from "../../components/PointsDisplayer";
import MainWrapper from "../../components/MainWrapper";

const Balloonsux = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const [soundtrack, setSoundtrack] = useState(
    new Audio(require("../../assets/audios/soundtrack.mp3"))
  );

  const handleButtonClick = () => {
    setGameOver(false);
    setGameStarted(true);
    setScore(0);
    soundtrack.currentTime = 0;
  };

  if (gameOver) {
    soundtrack.volume = 0.3;
    soundtrack.pause();
    return (
      <MainWrapper>
        <Title color="red">Game Over!</Title>
        <PointsDisplayer
          points={score}
          text="Your score"
          pointsColor="yellow"
        />
        <Button color="red" onClick={handleButtonClick}>
          Jogar Novamente
        </Button>
      </MainWrapper>
    );
  }

  if (gameStarted) {
    soundtrack.play();
    return <Game score={score} setScore={setScore} setGameOver={setGameOver} />;
  }

  return (
    <MainWrapper>
      <Title>Balloonsux</Title>
      <Button onClick={handleButtonClick}>Jogar</Button>
    </MainWrapper>
  );
};

export default Balloonsux;
