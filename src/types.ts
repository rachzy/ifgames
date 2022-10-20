import { ReactElement } from "react";

export interface IGame {
  id: string;
  title: string;
  description: string;
  imageName: string;
  component: ReactElement;
}

export type colors = "red" | "blue" | "green" | "yellow";

export interface IBallon {
  id: number;
  color: colors;
  position: {
    x: number;
    y: number;
  };
}
