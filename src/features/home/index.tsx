import "./styles.css";

import myAvatar from "../../assets/avatar_dominique.png";

const skills = [
  { label: "⚛️ React.js", level: "95%" },
  { label: "📱 React Native", level: "90%" },
  { label: "🖧 Node.js", level: "85%" },
  { label: "🧊 Three.js", level: "70%" },
  { label: "🎨 CSS3", level: "90%" },
  { label: "💨 Tailwind", level: "85%" },
  { label: "🎨 Styled Components", level: "80%" },
  { label: "🧱 Bootstrap", level: "75%" },
  { label: "🍃 MongoDB", level: "80%" },
];

const projects = [
  "💻 Portfólio interativo em React com Three.js",
  "📱 App mobile com React Native para controle financeiro",
  "🌐 Plataforma web com autenticação, banco de dados MongoDB e painel admin",
  "🐾 Landing page de ONG com foco em adoção de animais",
  "📣 Sistema de conscientização gamificado sobre abandono animal",
];

export function Home() {
  return (
    <div className="window-body-container">
      <div className="window-body-content">
        <div className="header">
          <div className="header-content">
            <img src={myAvatar} alt="Avatar" className="avatar" />
            <div className="info-block">
              <h1 className="name">Dominique Campitelli</h1>
              <p className="subtitle">Classe: Desenvolvedor Full-Stack</p>
              <p className="status">Status: Sempre aprimorando.</p>
            </div>
          </div>
        </div>

        <section className="section">
          <h2 className="section-title">História do Personagem</h2>
          <div className="grid">
            <p>
              <strong>Raça:</strong> Humano
            </p>
            <p>
              <strong>Classe:</strong> Desenvolvedor Full-Stack (especialista em
              Front-end)
            </p>
            <p>
              <strong>Principais habilidades:</strong> ReactJS, JavaScript,
              TypeScript, React Native e Node.js
            </p>
            <p>
              <strong>Guilda:</strong> Guardiões da Consciência Digital
            </p>
            <p>
              <strong>Origem:</strong> São Paulo - Brasil
            </p>
            <p>
              <strong>Missão Atual:</strong> Criar soluções tecnológicas que
              impactem a vida de animais indefesos
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Habilidades</h2>
          {skills.map(({ label, level }) => (
            <div key={label} className="skill">
              <span>{label}</span>
              <div className="bar" style={{ width: level }} />
            </div>
          ))}
        </section>

        <section className="section">
          <h2 className="section-title">Missões Concluídas</h2>
          {projects.map((text, i) => (
            <div key={i} className="card">
              {text}
            </div>
          ))}
        </section>

        <section className="section">
          <h2 className="section-title">Conquistas</h2>
          <div className="achievements">
            <p className="achievements-title">FIAP</p>
            <p className="achievements-text">Sistemas para Internet</p>
            <span className="achievements-date">2018 - 2019</span>
          </div>
        </section>

        {/* <section className="section">
          <h2 className="section-title">Títulos Desbloqueados</h2>
          <div className="tags">
            {tags.map((tag, i) => (
              <span key={i} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </section> */}
      </div>
    </div>
  );
}
