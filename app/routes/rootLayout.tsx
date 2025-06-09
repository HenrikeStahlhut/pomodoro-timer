import { Outlet } from "react-router";
import { AppProvider } from "@/context/AppContext";

export default function ProjectLayout() {
  return (
    <AppProvider>
      <Outlet />
    </AppProvider>
  );
}
