import "../styles/globals.css";
import type { AppProps } from "next/app";
import { IGame } from "../types";

import Balloonsux from "../games/Balloonsux";
import TicTacToe from "../games/TicTacToe";

export const games: IGame[] = [
  {
    id: "jogodavelha",
    title: "Jogo da Velha",
    imageName: "jogodavelha-icon.png",
    description:
      "Um simples game no qual dois jogadores jogam o clássico jogo da velha",
    component: <TicTacToe />,
  },
  {
    id: "balloonsux",
    title: "Balloonsux",
    imageName: "balloon-red.png",
    description:
      "Você gosta de balões? Nem eu, barulhentos demais! Por isso, aqui está um jogo onde você deve estourar balões e não deixar nenhum passar.",
    component: <Balloonsux />,
  },
];

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
