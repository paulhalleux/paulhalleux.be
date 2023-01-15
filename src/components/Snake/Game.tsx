import styles from "./Game.module.scss";
import { Screw } from "../Screw/Screw";
import { Snake } from "./Snake";
import {
  Direction,
  GameState,
  SnakeContext,
  SnakeProvider,
} from "./SnakeContext";
import clsx from "clsx";
import { SnakeFruit } from "./SnakeFruit";
import { Link } from "react-router-dom";

export function Game() {
  return (
    <div className={styles.game}>
      <Screw position="bottom-left" />
      <Screw position="bottom-right" />
      <Screw position="top-left" />
      <Screw position="top-right" />

      <SnakeProvider>
        <SnakeContext.Consumer>
          {({ direction, eatenFruits, gameState }) => (
            <>
              <div className={styles.snake}>
                <Snake />
              </div>
              <div className={styles["game-info"]}>
                <div className={styles.rules}>
                  <p>// use keyboard</p>
                  <p>// arrows to play</p>
                  <div className={styles.keys}>
                    <div>
                      <i
                        className={clsx(
                          "ri-arrow-up-line",
                          direction === Direction.Top && styles.active
                        )}
                      />
                    </div>
                    <div>
                      <i
                        className={clsx(
                          "ri-arrow-left-line",
                          direction === Direction.Left && styles.active
                        )}
                      />
                      <i
                        className={clsx(
                          "ri-arrow-down-line",
                          direction === Direction.Bottom && styles.active
                        )}
                      />
                      <i
                        className={clsx(
                          "ri-arrow-right-line",
                          direction === Direction.Right && styles.active
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.food}>
                  // Food
                  <div className={styles.fruits}>
                    {Array.from({ length: 12 }).map((_, index) => (
                      <SnakeFruit active={index < eatenFruits} />
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                  }}
                >
                  <Link to="/about" className={styles.button}>
                    {gameState === GameState.Win ? "Continue" : "Skip"}
                  </Link>
                </div>
              </div>
            </>
          )}
        </SnakeContext.Consumer>
      </SnakeProvider>
    </div>
  );
}
