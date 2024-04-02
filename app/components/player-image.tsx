import { useState } from "react";
import { Image } from "@chakra-ui/react";

type Props = {
  currentPlayer: { name: string; clubs: string[]; image: string };
};

export const PlayerImage = ({ currentPlayer }: Props) => {
  return (
    <div className="">
      <Image
        boxSize={{ base: "150px", md: "175px", lg: "200px" }}
        objectFit="cover"
        src={currentPlayer.image}
        alt={currentPlayer.name}
      />
    </div>
  );
};
