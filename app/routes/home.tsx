import Timer from "@/components/Timer/Timer";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pomorodor timer" },
    { name: "description", content: "Pomodoro timer" },
  ];
}

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Timer />
    </div>
  );
}
