import { useEffect } from "react";
import { useWindowStore } from "./store/windowStore";

import { Home } from "./features/home";

import { DesktopIcons } from "./components/desktopIcons";
import { WindowManager } from "./components/windowManager";
import { Taskbar } from "./components/taskbar";

import "98.css";
import "./app.css";

export function App() {
  const openWindow = useWindowStore((state) => state.openWindow);
  const windows = useWindowStore((state) => state.windows);

  useEffect(() => {
    openWindow({
      id: "home",
      title: "Home",
      content: <Home />,
    });
  }, [openWindow, windows]);

  return (
    <div className="app-container">
      <div className="content">
        <DesktopIcons />
        <WindowManager />
      </div>
      <Taskbar />
    </div>
  );
}
