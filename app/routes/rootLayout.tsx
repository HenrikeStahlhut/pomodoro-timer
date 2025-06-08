import { Outlet } from "react-router";
import forestImage from "../assets/images/forest.jpg";

export default function ProjectLayout() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${forestImage})` }}
    >
      <Outlet />
    </div>
  );
}
