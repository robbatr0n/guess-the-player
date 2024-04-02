import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";

type Props = {
  club: string;
  isLoading: boolean;
  setIsLoading: (bool: boolean) => void;
};

export default function ClubLogo({ club, isLoading, setIsLoading }: Props) {
  const [logo, setLogo] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://apiv2.allsportsapi.com/football/?&met=Teams&teamName=${club}&APIkey=629792c7f63650eb3cd2577bc5a1d595a6d6ce30a6ffd49f44027f3555994cc4`,
          { mode: "cors" }
        );
        const data = await response.json();
        if (data && data.result && data.result.length > 0) {
          setLogo(data.result[0].team_logo);
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch logo");
      } finally {
        setIsLoading(false);
      }
    }

    if (isLoading) {
      fetchData();
    }
  }, [club, isLoading, setIsLoading]);

  if (error) {
    return <div className="logo">{error}</div>;
  }

  if (isLoading) {
    return (
      <div className="logo">
        <Spinner />
      </div>
    );
  }

  return (
    <img
      className="mx-4 my-4 max-w-12 md:max-w-16 lg:max-w-20"
      src={logo}
      alt={club}
    />
  );
}
