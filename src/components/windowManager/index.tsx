import { useWindowStore } from "../../store/windowStore";

import "./styles.css";

export function WindowManager() {
  const { windows, closeWindow, bringToFront } = useWindowStore();

  return (
    <>
      {windows.map((win) => (
        <div
          key={win.id}
          className="window main-window"
          style={{ zIndex: win.zIndex }}
          onMouseDown={() => bringToFront(win.id)}
        >
          <div className="title-bar">
            <div className="title-bar-text">{win.title}</div>
            <div className="title-bar-controls">
              <button
                onClick={() => closeWindow(win.id)}
                aria-label="Close"
              ></button>
            </div>
          </div>
          <div className="window-body">{win.content}</div>
        </div>
      ))}
    </>
  );
}
