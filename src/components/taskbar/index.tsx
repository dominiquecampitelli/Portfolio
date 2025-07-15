import { useWindowStore } from "../../store/windowStore";

import "./styles.css";

export function Taskbar() {
  const windows = useWindowStore((state) => state.windows);
  const bringToFront = useWindowStore((state) => state.bringToFront);

  return (
    <div className="taskbar">
      <button className="start-button" onClick={() => bringToFront("home")}>
        Home
      </button>
      <div className="hr-xs"></div>
      <div className="hr-sm"></div>
      <div className="taskbar-items">
        {windows.map(
          (win) =>
            win.id !== "home" && (
              <button
                key={win.id}
                className="task-button"
                onClick={() => bringToFront(win.id)}
              >
                {win.title}
              </button>
            )
        )}
      </div>
    </div>
  );
}
