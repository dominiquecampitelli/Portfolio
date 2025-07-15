import "./styles.css";

const inventoryItems = [
  {
    name: "Portfólio Interativo",
    image: "https://i.imgur.com/VG7yHT5.png",
    previewLink: "https://meu-portfolio-preview.com",
    githubLink: "https://github.com/seuusuario/portfolio",
  },
  {
    name: "App Financeiro",
    image: "https://i.imgur.com/JNxY6xT.png",
    previewLink: "https://meu-app-financeiro.com",
    githubLink: "https://github.com/seuusuario/app-financeiro",
  },
  {
    name: "Plataforma Web",
    image: "https://i.imgur.com/4oJdPBB.png",
    previewLink: "https://plataforma-web.com",
    githubLink: "https://github.com/seuusuario/plataforma-web",
  },
  {
    name: "Landing ONG",
    image: "https://i.imgur.com/2ASOH9W.png",
    previewLink: "https://landing-ong.com",
    githubLink: "https://github.com/seuusuario/landing-ong",
  },
  {
    name: "Sistema Gamificado",
    image: "https://i.imgur.com/kJvEyJ0.png",
    previewLink: "https://sistema-gamificado.com",
    githubLink: "https://github.com/seuusuario/sistema-gamificado",
  },
];

export function Inventory() {
  return (
    <div className="window-body-container">
      <div className="window-body-content">
        <h2 className="section-title">Inventário de Projetos</h2>
        <div className="inventario-grid">
          {inventoryItems.map((item) => (
            <div key={item.name} className="inventario-item">
              <img src={item.image} alt={item.name} className="item-img" />
              <p className="item-name">{item.name}</p>
              <div className="inventario-buttons">
                <a
                  href={item.previewLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inventario-btn"
                >
                  Preview
                </a>
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inventario-btn"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
