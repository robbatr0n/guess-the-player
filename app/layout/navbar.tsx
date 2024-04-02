import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/github-mark-white.svg";
import FootballIcon from "../../public/football.svg";

export default function Navbar() {
  return (
    <nav className="flex relative z-10 justify-around items-center py-4 bg-gray-800 shadow shadow-gray-900">
      <Image className="invert" priority src={FootballIcon} alt="Home" />
      <div>
        <Link href="https://www.github.com/robbatr0n/guess-the-player">
          <Image
            width={24}
            height={24}
            priority
            src={GithubIcon}
            alt="Github"
          />
        </Link>
      </div>
    </nav>
  );
}
