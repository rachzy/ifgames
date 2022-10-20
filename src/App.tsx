import { BrowserRouter, Routes, Route } from "react-router-dom";

import { IGame } from "./types";

import TicTacToe from "./games/TicTacToe";
import Balloonsux from "./games/Balloonsux";
import Index from "./pages/Index";
import GamePage from "./pages/gamePage";

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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index={true} element={<Index />} />
        <Route path="/:gameName" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
