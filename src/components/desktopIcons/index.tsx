import "./styles.css";

export function DesktopIcons() {
  return (
    <div className="desktop-icons">
      <div className="icon">
        <img
          src="https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png"
          alt="Computador"
        />
        <span>Meu Computador</span>
      </div>
      <div className="icon">
        <img
          src="https://win98icons.alexmeub.com/icons/png/recycle_bin_empty-4.png"
          alt="Lixeira"
        />
        <span>Lixeira</span>
      </div>
      <div className="icon">
        <img
          src="https://win98icons.alexmeub.com/icons/png/directory_closed-4.png"
          alt="Documentos"
        />
        <span>Documentos</span>
      </div>
    </div>
  );
}
