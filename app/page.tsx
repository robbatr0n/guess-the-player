"use client";

import Image from "next/image";
import { Button, Container } from "@chakra-ui/react";
import { useState } from "react";
import { WelcomeScreen } from "./components/welcome-screen";

import BackgroundImage from "../public/background.jpg";
import { Game } from "./components/Game";

export default function Home() {
  const [start, setStart] = useState(false);

  function startGame() {
    setTimeout(() => {
      setStart(!start);
    }, 100);
  }

  let x = "calc(100vh - 112px)";

  return (
    <main className="flex flex-col min-h-[calc(100vh-112px)]">
      <Image
        src={BackgroundImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />
      <Container
        h={x}
        className="pt-12 pb-6 lg:pt-16 xl:pt-24 lg:pb-8 xl:pb-12"
        centerContent
      >
        {!start ? (
          <>
            <WelcomeScreen />
            <Button
              variant="solid"
              className="mt-8"
              colorScheme="green"
              onClick={startGame}
              size={{ base: "md", lg: "lg" }}
            >
              Play!
            </Button>
          </>
        ) : (
          <Game startGame={startGame} />
        )}
      </Container>
    </main>
  );
}
