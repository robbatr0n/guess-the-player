import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/github-mark-white.svg";
import FootballIcon from "../../public/football.svg";
import { Button } from "@chakra-ui/react";
import { CloseIcon, RepeatIcon } from "@chakra-ui/icons";

type Props = {
  startGame: () => void;
  restartGame: () => void;
  score: number;
};

export const Navbar = ({ startGame, restartGame, score }: Props) => {
  return (
    <nav className="flex relative z-10 justify-evenly items-center py-2 bg-gray-800 shadow shadow-gray-900">
      <p className="text-xl font-bold text-center text-white">Score: {score}</p>
      <div className="flex">
        {" "}
        <Button
          onClick={restartGame}
          variant="solid"
          colorScheme="purple"
          size="sm"
          className="ml-2"
        >
          <RepeatIcon />
        </Button>
        <Button
          onClick={startGame}
          variant="solid"
          colorScheme="purple"
          className="mx-2"
          size="sm"
        >
          <CloseIcon />
        </Button>
      </div>
    </nav>
  );
};
