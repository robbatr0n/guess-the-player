import { useState } from "react";
import players from "../data/players";
import { PlayerImage } from "./player-image";
import { Button } from "@chakra-ui/react";
import { CloseIcon, RepeatIcon } from "@chakra-ui/icons";
import ClubLogo from "./club-logo";
import { Input } from "@chakra-ui/react";
import { Navbar } from "../layout/navbar";

interface IPlayer {
  name: string;
  clubs: string[];
}

type Props = {
  startGame: () => void;
};

export const Game = ({ startGame }: Props) => {
  const [gameState, setGameState] = useState({
    answer: false,
    input: "",
    result: "",
    score: 0,
    guesses: 3,
    gameOver: false,
  });
  const [currentPlayer, setCurrentPlayer] = useState<IPlayer>(
    Object.values(players)[
      Math.floor(Math.random() * Object.values(players).length)
    ]
  );
  const [isLoading, setIsLoading] = useState(true);
  const [playerImage, setPlayerImage] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameState({ ...gameState, input: e.target.value });
  };

  const checkAnswer = () => {
    const isCorrect =
      gameState.input.toLowerCase() === currentPlayer.name.toLowerCase();
    if (isCorrect) {
      setGameState({
        ...gameState,
        answer: isCorrect,
        result: currentPlayer.name,
        score: gameState.score + 1,
        input: "",
      });
    } else {
      const updatedGuesses = gameState.guesses - 1;
      setGameState({
        ...gameState,
        answer: isCorrect,
        result: currentPlayer.name,
        guesses: updatedGuesses,
        input: "",
      });
      checkForGameOver(updatedGuesses);
    }
  };

  const checkForGameOver = (updatedGuesses: number) => {
    setGameState((prevState) => ({
      ...prevState,
      gameOver: updatedGuesses === 0,
    }));
  };

  const restartGame = () => {
    generateNewPlayer();
    setGameState({
      ...gameState,
      gameOver: false,
      score: 0,
      guesses: 3,
      answer: false,
      result: "",
      input: "",
    });
  };

  const generateNewPlayer = () => {
    setGameState({
      ...gameState,
      answer: false,
      result: "",
      guesses: 3,
      input: "",
    });
    setIsLoading(true);
    let randomIndex = Math.floor(Math.random() * Object.values(players).length);
    let player = Object.values(players)[randomIndex];
    setCurrentPlayer(player);
  };

  console.log(currentPlayer.name);

  return (
    <>
      <Navbar
        startGame={startGame}
        restartGame={restartGame}
        score={gameState.score}
      />
      <div className="flex relative z-10 flex-col justify-between items-center mt-16 w-full h-full">
        {!gameState.gameOver ? (
          <div className="flex flex-col justify-center items-center">
            {gameState.answer ? (
              <>
                <p className="mb-8 text-2xl font-bold text-center text-white lg:mb-12 lg:text-3xl">
                  {currentPlayer.name}
                </p>
                <PlayerImage playerName={currentPlayer.name} />
              </>
            ) : (
              <>
                <p className="mb-8 text-2xl font-bold text-center text-transparent lg:mb-12 lg:text-3xl">
                  {currentPlayer.name}
                </p>
                <PlayerImage playerName="https://campaignopposingpolicesurveillance.com/wp-content/uploads/2017/10/silhouette.jpg" />
              </>
            )}
            <div className="flex flex-wrap justify-center content-start my-4 md:my-8 lg:my-12">
              {currentPlayer.clubs &&
                currentPlayer.clubs.map((club: any, index: any) => (
                  <ClubLogo
                    club={club}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    key={index}
                  />
                ))}
            </div>
            <div className="flex flex-col justify-center p-4 bg-white md:w-96">
              <Input
                value={gameState.input}
                type="Name"
                className="mb-2 bg-white"
                placeholder="Player name..."
                onChange={handleInput}
              />
              {!gameState.answer ? (
                <Button
                  colorScheme="purple"
                  size={{ base: "md", lg: "lg" }}
                  onClick={checkAnswer}
                >
                  SUBMIT
                </Button>
              ) : (
                <Button
                  colorScheme="purple"
                  size={{ base: "md", lg: "lg" }}
                  onClick={generateNewPlayer}
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div>
            <p>test</p>
          </div>
        )}
        <div className="flex justify-around w-full"></div>
      </div>
    </>
  );
};
