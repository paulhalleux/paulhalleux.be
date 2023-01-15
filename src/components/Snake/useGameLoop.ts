import { useContext, useEffect, useRef } from "react";
import { Direction, GameState, SnakeContext } from "./SnakeContext";

const gridHeight = 27;
const gridWidth = 15;

export function useGameLoop() {
  const {
    setParts,
    setDirection,
    setGameState,
    gameState,
    direction,
    fruit,
    setFruit,
    setEatenFruits,
  } = useContext(SnakeContext);

  const directionRef = useRef(direction);
  const gameStateRef = useRef(gameState);
  const fruitRef = useRef(fruit);

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameStateRef.current !== GameState.Running) return;

      if (fruitRef.current === undefined) {
        setFruit({
          y: Math.floor(Math.random() * gridHeight),
          x: Math.floor(Math.random() * gridWidth),
        });
      }

      setParts((prevState) => {
        const head = { ...prevState[0] };
        const queue = prevState[prevState.length - 1];

        const prevHead = { ...head };
        if (directionRef.current === Direction.Top)
          head.y = head.y - 1 < 0 ? gridHeight - 1 : head.y - 1;

        if (directionRef.current === Direction.Right)
          head.x = head.x + 1 > gridWidth - 1 ? 0 : head.x + 1;

        if (directionRef.current === Direction.Left)
          head.x = head.x - 1 < 0 ? gridWidth - 1 : head.x - 1;

        if (directionRef.current === Direction.Bottom)
          head.y = head.y + 1 > gridHeight - 1 ? 0 : head.y + 1;

        const partAtNewPos = prevState.find(
          (value) => value.y === head.y && value.x === head.x
        );

        if (
          fruitRef.current &&
          head.y === fruitRef.current.y &&
          head.x === fruitRef.current.x
        ) {
          setEatenFruits((a) => {
            if (a + 1 === 12) setGameState(GameState.Win);
            return a + 1;
          });
          setFruit(undefined);
          return [head, { ...prevHead, head: false }, ...prevState.slice(1)];
        }

        if (partAtNewPos) {
          setGameState(GameState.Lose);
          return prevState;
        }

        if (prevState.length === 1) {
          return [head];
        }

        prevState[0] = head;
        queue.x = prevHead.x;
        queue.y = prevHead.y;
        return [head, queue, ...prevState.slice(1, prevState.length - 1)];
      });
    }, 320);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onKeyPress = (e: any) => {
      if (e.keyCode === 37) {
        gameStateRef.current === GameState.Waiting &&
          setGameState(GameState.Running);
        setDirection(Direction.Left);
      }
      if (e.keyCode === 38) {
        gameStateRef.current === GameState.Waiting &&
          setGameState(GameState.Running);
        setDirection(Direction.Top);
      }
      if (e.keyCode === 39) {
        gameStateRef.current === GameState.Waiting &&
          setGameState(GameState.Running);
        setDirection(Direction.Right);
      }
      if (e.keyCode === 40) {
        gameStateRef.current === GameState.Waiting &&
          setGameState(GameState.Running);
        setDirection(Direction.Bottom);
      }
      if (e.keyCode === 32)
        setGameState(
          gameStateRef.current === GameState.Paused
            ? GameState.Running
            : gameStateRef.current === GameState.Running
            ? GameState.Paused
            : gameStateRef.current
        );
    };

    window.addEventListener("keydown", onKeyPress);
    return () => window.removeEventListener("keydown", onKeyPress);
  }, []);

  useEffect(() => {
    directionRef.current = direction;
    gameStateRef.current = gameState;
    fruitRef.current = fruit;
  }, [gameState, direction, fruit]);
}
