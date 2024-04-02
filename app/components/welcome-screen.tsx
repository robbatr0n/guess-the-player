import Image from "next/image";
import Silhouette from "../../public/sil.png";
import { Button, Container } from "@chakra-ui/react";

type Props = {
  startGame: () => void;
};

export const WelcomeScreen = ({ startGame }: Props) => {
  return (
    <section className="flex relative z-10 flex-col items-center">
      <Container centerContent>
        <Image
          src={Silhouette}
          className="w-32 h-32 lg:h-48 lg:w-48 xl:w-64 xl:h-64"
          alt="Silhouette"
        />
        <article className="mx-auto text-center text-white prose lg:prose-xl">
          <h1 className="mt-8 text-white lg:mt-12 xl:mt-16">
            Guess the player
          </h1>
          <p className="">
            Simply guess the football player based on the clubs they have played
            for. You get 3 guesses per player.
          </p>
        </article>
        <Button
          variant="solid"
          className="mt-8"
          colorScheme="green"
          onClick={startGame}
        >
          Play!
        </Button>
      </Container>
    </section>
  );
};
