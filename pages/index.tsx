import { NextPage } from "next";
import classes from "../styles/Home.module.css";

import FlatContainer from "../components/FlatContainer";
import IFLogo from "../components/IFLogo";

import MainWrapper from "../components/MainWrapper";
import GameItem from "../components/GameItem";
import Footer from "../components/Footer";

import { games } from "./_app";

const Index: NextPage = () => {
  return (
    <MainWrapper mainMenu={true}>
      <FlatContainer center={true}>
        <IFLogo style={{ margin: "2vh" }} size={60} />
        <h1 className={classes.mainMenuTitle}>Games</h1>
      </FlatContainer>
      <FlatContainer spacingType={"space-evenly"} fullSize={true}>
        {games.map((game) => {
          return <GameItem key={game.id} game={game} />;
        })}
      </FlatContainer>
      <Footer>By 2º Ano de Informática ツ</Footer>
    </MainWrapper>
  );
};

export default Index;
