"use client";

import Image from "next/image";
import { Button, Container } from "@chakra-ui/react";
import { useState } from "react";
import { WelcomeScreen } from "./components/welcome-screen";

import BackgroundImage from "../public/background.jpg";
import { Game } from "./components/game";
import { Navbar } from "./layout/navbar";

export default function Home() {
  const [start, setStart] = useState(false);

  function startGame() {
    setTimeout(() => {
      setStart(!start);
    }, 100);
  }

  return (
    <>
      <main className="flex flex-col  min-h-[calc(100vh-48px)]">
        <Image
          src={BackgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />

        {!start ? (
          <>
            <WelcomeScreen startGame={startGame} />
          </>
        ) : (
          <Game startGame={startGame} />
        )}
      </main>
    </>
  );
}
