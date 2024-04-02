import { useState } from "react";
import players from "../data/players";
import { PlayerImage } from "./player-image";
import { Button, Container } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { CloseIcon, RepeatIcon } from "@chakra-ui/icons";
import ClubLogo from "./club-logo";
import { Input } from "@chakra-ui/react";
import { Navbar } from "../layout/navbar";
import { GameOver } from "./game-over";

interface IPlayer {
  name: string;
  clubs: string[];
  image: string;
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

  let x = "calc(100vh - 112px)";

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

  console.log(typeof currentPlayer);

  return (
    <>
      <Navbar
        startGame={startGame}
        restartGame={restartGame}
        score={gameState.score}
      />
      <Container h={x} centerContent>
        <div className="flex relative z-10 flex-col pt-8 w-full h-full lg:pt-16 md:pt-12">
          {!gameState.gameOver ? (
            <div className="flex flex-col items-center">
              {gameState.answer ? (
                <>
                  <p className="mb-8 text-2xl font-bold text-center text-white lg:mb-12 lg:text-3xl">
                    {currentPlayer.name}
                  </p>
                  <PlayerImage currentPlayer={currentPlayer} />
                </>
              ) : (
                <>
                  <p className="mb-8 text-2xl font-bold text-center text-transparent lg:mb-12 lg:text-3xl">
                    {currentPlayer.name}
                  </p>
                  <div className="">
                    <Image
                      boxSize={{ base: "150px", md: "175px", lg: "200px" }}
                      objectFit="cover"
                      src="https://campaignopposingpolicesurveillance.com/wp-content/uploads/2017/10/silhouette.jpg"
                      alt="?"
                    />
                  </div>
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
              <GameOver score={gameState.score} />
            </div>
          )}
          <div className="flex justify-around w-full"></div>
        </div>
      </Container>
    </>
  );
};
