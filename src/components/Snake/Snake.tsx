import styles from "./Snake.module.scss";
import clsx from "clsx";
import React, { useContext } from "react";
import { GameState, SnakeContext } from "./SnakeContext";
import { useGameLoop } from "./useGameLoop";
import { SnakeFruit } from "./SnakeFruit";

export function Snake() {
  const { parts, gameState, fruit } = useContext(SnakeContext);

  useGameLoop();

  return (
    <div className={styles.snake}>
      {gameState !== GameState.Running && gameState !== GameState.Waiting && (
        <div className={styles.state}>{states[gameState]}</div>
      )}
      {parts.map((part) => (
        <span
          key={JSON.stringify(part)}
          className={clsx(
            styles["body-piece"],
            part.head && styles["body-piece--head"]
          )}
          style={{
            gridRowStart: part.y + 1,
            gridRowEnd: part.y + 1,
            gridColumnStart: part.x + 1,
            gridColumnEnd: part.x + 1,
          }}
        />
      ))}
      {fruit && (
        <div
          style={{
            gridRowStart: fruit.y + 1,
            gridRowEnd: fruit.y + 1,
            gridColumnStart: fruit.x + 1,
            gridColumnEnd: fruit.x + 1,
          }}
        >
          <SnakeFruit />
        </div>
      )}
    </div>
  );
}

const states = {
  [GameState.Lose]: "Game Over!",
  [GameState.Win]: "Well Done!",
  [GameState.Paused]: "Paused...",
};
