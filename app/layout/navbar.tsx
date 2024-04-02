import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/github-mark-white.svg";
import FootballIcon from "../../public/football.svg";
import { Button } from "@chakra-ui/react";
import { CloseIcon, RepeatIcon } from "@chakra-ui/icons";

type Props = {
  startGame: () => void;
  restartGame: () => void;
};

export const Navbar = ({ startGame, restartGame }: Props) => {
  return (
    <nav className="flex relative z-10 justify-around items-center py-2 -m-12 bg-gray-800 shadow lg:-m-16 xl:-m-24 w-svw shadow-gray-900">
      <Image className="invert" priority src={FootballIcon} alt="Home" />
      <div>
        <Button
          onClick={startGame}
          variant="solid"
          colorScheme="purple"
          className="mr-2"
          size="sm"
        >
          <CloseIcon />
        </Button>
        <Button
          onClick={restartGame}
          variant="solid"
          className="ml-2"
          colorScheme="purple"
          size="sm"
        >
          <RepeatIcon />
        </Button>
      </div>
    </nav>
  );
};
