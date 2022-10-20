import { NextPage } from "next";
import classes from "../styles/Home.module.css";

import FlatContainer from "../components/FlatContainer";
import IFLogo from "../components/IFLogo";

import MainWrapper from "../components/MainWrapper";
import GameItem from "../components/GameItem";

import { games } from "./_app";
import Header from "../components/Header";

const Index: NextPage = () => {
  return (
    <MainWrapper mainMenu={true}>
      <Header>By 2º Ano de Informática ツ</Header>
      <FlatContainer center={true}>
        <IFLogo style={{ margin: "2vh" }} size={60} />
        <h1 className={classes.mainMenuTitle}>Games</h1>
      </FlatContainer>
      <FlatContainer spacingType={"space-evenly"} fullSize={true}>
        {games.map((game) => {
          return <GameItem key={game.id} game={game} />;
        })}
      </FlatContainer>
    </MainWrapper>
  );
};

export default Index;
