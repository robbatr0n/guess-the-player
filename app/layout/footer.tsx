import Link from "next/link";

export default function Navbar() {
  return (
    <footer className="flex relative z-10 justify-around items-center py-4 text-white bg-gray-800 shadow shadow-gray-900">
      <p>
        Designed & developed by{" "}
        <span>
          <Link
            className="font-bold underline"
            href="https://www.robbarton.dev"
          >
            Rob Barton
          </Link>
        </span>
      </p>
    </footer>
  );
}
