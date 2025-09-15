import { useState } from "react";
import {
  SiReactquery,
  SiPrimereact,
  SiTestinglibrary,
  SiGithubcopilot,
  SiGooglegemini,
} from "react-icons/si";

import "./styles.css";

import myAvatar from "../../assets/avatar_dominique.png";

type Category = "frontend" | "mobile" | "backend" | "devops" | "ai" | "outros";

const iconSets: Record<Category, (string | React.ReactNode)[]> = {
  frontend: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apollographql/apollographql-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/styledcomponents/styledcomponents-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original-wordmark.svg",
    <SiReactquery size={40} style={{ fill: "#00B8D9" }} key="reactquery" />,
    <SiPrimereact size={40} style={{ fill: "#5B1FA1" }} key="primereact" />,
    <SiTestinglibrary size={40} style={{ fill: "#E53E3E" }} key="rtl" />,
  ],
  mobile: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg",
  ],
  backend: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  ],
  devops: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
  ],
  ai: [
    <SiGithubcopilot size={40} style={{ fill: "#3DDCFF" }} key="copilot" />,
    <SiGooglegemini size={40} style={{ fill: "#4285F4" }} key="gemini" />,
  ],
  outros: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original-wordmark.svg",
  ],
};

export function Home() {
  const [icons, setIcons] = useState<React.ReactNode[]>([]);

  const showIcons = (type: Category) => {
    const mapped = iconSets[type].map((icon, index) =>
      typeof icon === "string" ? (
        <img
          key={index}
          src={icon}
          alt="icon"
          style={{
            width: "40px",
            height: "40px",
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      ) : (
        icon
      )
    );
    setIcons(mapped);
  };

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

        <div style={{ textAlign: "center", padding: "20px" }}>
          <div style={{ marginBottom: "20px" }}>
            <button onClick={() => showIcons("frontend")}>Front-End</button>
            <button onClick={() => showIcons("mobile")}>Mobile</button>
            <button onClick={() => showIcons("backend")}>Back-End</button>
            <button onClick={() => showIcons("devops")}>DevOps</button>
            <button onClick={() => showIcons("ai")}>IA</button>
            <button onClick={() => showIcons("outros")}>Outros</button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, 50px)",
              gap: "10px",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            {icons.map((icon, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/*   <section className="section">
          <h2 className="section-title">Habilidades</h2>
          <div className="skills">
            <div className="skills-group">
              <h3 className="skills-title">Front-End</h3>
              <ul className="skills-list">
                <li className="skills-item">TanStack</li>//FALTANDO
                <li className="skills-item">zustand</li>//FALTANDO
              </ul>
            </div>
            <div className="skills-group">
              <h3 className="skills-title">Metodologia Ágil</h3>
              <ul className="skills-list">
                <li className="skills-item">Scrum</li>//FALTANDO
                <li className="skills-item">Kanban</li>//FALTANDO
              </ul>
            </div>
          </div>
        </section> */}

        <section className="section">
          <h2 className="section-title">Missões Concluídas</h2>
          <div className="skills">
            <div className="skills-group">
              <h3 className="skills-title">
                2025 | NAVA - Technology for business
              </h3>
              <ul className="skills-list">
                <li className="skills-item-title">Desenvolvedor Front-End</li>
                <li className="skills-item">
                  Responsável pelo desenvolvimento e manutenção do Front-End em
                  ReactJS, líder e coordenador do projeto de sistema ERP da
                  startup Sol Agora para venda e distribuição de placas solares.
                </li>
              </ul>
            </div>
            <div className="skills-group">
              <h3 className="skills-title">2021 - 2024 | Claro Brasil</h3>
              <ul className="skills-list">
                <li className="skills-item-title">Desenvolvedor Front-End</li>
                <li className="skills-item">
                  Desenvolvedor da solução Claro Clube para Web, responsável
                  pelo gerenciamento de pontuação de fidelidade, em um
                  ecossistema de micro-frontends com ReactJS.
                </li>
              </ul>
            </div>
            <div className="skills-group">
              <h3 className="skills-title">2018 - 2021 | Superare</h3>
              <ul className="skills-list">
                <li className="skills-item-title">Desenvolvedor Front-End</li>
                <li className="skills-item">
                  Responsável pelo desenvolvimento e evolução de sistemas de
                  e-commerce de grandes marcas (Claro, NET, Cadiveu, Cebrace e
                  Raízen), com atuação em ReactJS, HTML5, PHP (WordPress) e
                  criação de um aplicativo de investimentos (Mooney
                  Investimentos) em React Native.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Conquistas</h2>
          <div className="achievements">
            <p className="achievements-title">FIAP</p>
            <p className="achievements-text">Sistemas para Internet</p>
            <span className="achievements-date">2018 - 2020</span>
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
