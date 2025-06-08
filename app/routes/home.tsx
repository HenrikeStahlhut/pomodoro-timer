import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pomorodor timer" },
    { name: "description", content: "Pomodoro timer" },
  ];
}

export default function Home() {
  return <>Test</>;
}
