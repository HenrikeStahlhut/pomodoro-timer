import Timer from "@/components/Timer/Timer";
import type { Route } from "./+types/home";
import ChooseTheme from "@/components/Theme/Theme";
import forestImage from "../assets/images/forest.jpg";
import beachImage from "../assets/images/beach.jpg";
import booksImage from "../assets/images/books.jpg";
import cafeImage from "../assets/images/cafe.jpg";
import libraryImage from "../assets/images/library.jpg";
import mountainsImage from "../assets/images/mountains.jpg";
import nightskyImage from "../assets/images/nightsky.jpg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pomorodor timer" },
    { name: "description", content: "Pomodoro timer" },
  ];
}

//! must have access to selected/current theme to set background image accordingly

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${forestImage})` }}
    >
      <div className="flex items-center justify-center min-h-screen">
        <Timer />
        <ChooseTheme />
      </div>
    </div>
  );
}
