import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

export enum Direction {
  Top,
  Left,
  Right,
  Bottom,
}

export enum GameState {
  Waiting,
  Running,
  Lose,
  Paused,
  Win,
}

export type BodyPart = Coordinates & {
  head?: boolean;
};

export type Coordinates = {
  x: number;
  y: number;
};

type SnakeContextType = {
  fruit: Coordinates | undefined;
  setFruit: Dispatch<SetStateAction<Coordinates | undefined>>;
  eatenFruits: number;
  setEatenFruits: Dispatch<SetStateAction<number>>;
  gameState: GameState;
  setGameState: Dispatch<SetStateAction<GameState>>;
  direction: Direction | undefined;
  setDirection: Dispatch<SetStateAction<Direction | undefined>>;
  parts: BodyPart[];
  setParts: Dispatch<SetStateAction<BodyPart[]>>;
};

export const SnakeContext = createContext<SnakeContextType>(
  {} as SnakeContextType
);

export function SnakeProvider({ children }: PropsWithChildren) {
  const [fruit, setFruit] = useState<Coordinates | undefined>(undefined);
  const [eatenFruits, setEatenFruits] = useState<number>(0);
  const [parts, setParts] = useState<BodyPart[]>([{ x: 7, y: 13, head: true }]);

  const [gameState, setGameState] = useState<GameState>(GameState.Waiting);
  const [direction, setDirection] = useState<Direction | undefined>(undefined);

  const value = {
    gameState,
    setGameState,
    direction,
    setDirection,
    fruit,
    setFruit,
    eatenFruits,
    setEatenFruits,
    parts,
    setParts,
  };

  return (
    <SnakeContext.Provider value={value}>{children}</SnakeContext.Provider>
  );
}
