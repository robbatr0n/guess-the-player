import { Avatar } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";

type Props = {
  playerName: string;
};

export const PlayerImage = ({ playerName }: Props) => {
  console.log(playerName);
  const [playerImage, setPlayerImage] = useState<string>("");

  useEffect(() => {
    fetchPlayerImage(playerName);
  });

  const fetchPlayerImage = async (playerName: string) => {
    const apiKey = "AIzaSyDJW1J1_zZ86GvDkP_R1is57e75XHBvDmI"; // Replace with your actual API key
    const cx = "a5e6c72030d9b41eb"; // Replace with your actual Custom Search Engine ID
    const searchQuery = "halland";
    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
      searchQuery
    )}&cx=${cx}&searchType=image&key=${apiKey}`;
    console.log(url);

    try {
      const response = await fetch(url);
      const data = await response.json();
      // Extract the image URL from the search results
      const imageUrl = data.items[0].link;
      setPlayerImage(imageUrl);
    } catch (error) {
      console.error("Error fetching player image:", error);
    }
  };

  return (
    <div className="">
      <Image
        boxSize={{ base: "150px", md: "200px", lg: "250px" }}
        objectFit="cover"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
    </div>
  );
};
