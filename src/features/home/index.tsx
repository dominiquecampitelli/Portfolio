import { useState } from "react";
import {
  SiReactquery,
  SiPrimereact,
  SiTestinglibrary,
  SiGithubcopilot,
  SiGooglegemini,
} from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { PiKanbanFill } from "react-icons/pi";

import Card from "../../components/card";

import "./styles.css";

import myAvatar from "../../assets/avatar_dominique.png";
import tanstack from "../../assets/tanstack.png";
import nativewind from "../../assets/nativewind.jpg";

type Category = "frontend" | "mobile" | "backend" | "devops" | "ai" | "outros";

export interface IconItem {
  icon: string | React.ReactNode;
  label: string;
}

const iconSets: Record<Category, IconItem[]> = {
  frontend: [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      label: "ReactJS",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      label: "Next.js",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
      label: "Angular",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      label: "JavaScript",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      label: "TypeScript",
    },
    {
      icon: (
        <SiReactquery size={40} style={{ fill: "#00B8D9" }} key="reactquery" />
      ),
      label: "React Query",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      label: "Redux",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg",
      label: "Zustand",
    },
    {
      icon: tanstack,
      label: "Nativewind",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
      label: "GraphQL",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apollographql/apollographql-original.svg",
      label: "Apollo GraphQL",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      label: "HTML5",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      label: "CSS3",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/styledcomponents/styledcomponents-original.svg",
      label: "styled-components",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      label: "Tailwind CSS",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
      label: "SASS",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      label: "Bootstrap",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg",
      label: "React Bootstrap",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
      label: "Material UI",
    },
    {
      icon: (
        <SiPrimereact size={40} style={{ fill: "#5B1FA1" }} key="primereact" />
      ),
      label: "PrimeReact",
    },
    {
      icon: (
        <SiTestinglibrary size={40} style={{ fill: "#E53E3E" }} key="rtl" />
      ),
      label: "React Testing Library",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg",
      label: "Storybook",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
      label: "Three.js",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
      label: "JQuery",
    },
  ],
  mobile: [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      label: "React Native",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg",
      label: "Expo",
    },
    {
      icon: nativewind,
      label: "Nativewind",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
      label: "Android Studio",
    },
  ],
  backend: [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      label: "Node.js",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      label: "Express.js",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg",
      label: "Nodemon",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      label: "PHP",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
      label: "WordPress",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      label: "Java",
    },
  ],
  devops: [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg",
      label: "Azure DevOps",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      label: "AWS",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      label: "Git",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      label: "Docker",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-plain.svg",
      label: "Heroku",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
      label: "Vercel",
    },
  ],
  ai: [
    {
      icon: (
        <SiGithubcopilot size={40} style={{ fill: "#3DDCFF" }} key="copilot" />
      ),
      label: "Github Copilot",
    },
    {
      icon: (
        <SiGooglegemini size={40} style={{ fill: "#4285F4" }} key="gemini" />
      ),
      label: "Google Gemini",
    },
  ],
  outros: [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      label: "MongoDB",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      label: "MySQL",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      label: "PostgreSQL",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      label: "Prisma",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",
      label: "Cypress.io",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
      label: "Jest",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
      label: "Jenkins",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg",
      label: "Vitest",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
      label: "Socket.io",
    },
    {
      icon: <DiScrum size={40} style={{ fill: "#1598b5" }} key="Scrum" />,
      label: "Scrum",
    },
    {
      icon: <PiKanbanFill size={40} style={{ fill: "#1b3140" }} key="Kanban" />,
      label: "Kanban",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg",
      label: "AdobeXD",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      label: "Figma",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
      label: "Framer",
    },
  ],
};

export function Home() {
  const [icons, setIcons] = useState<React.ReactNode[]>([]);

  const showIcons = (type: Category) => {
    const mapped = iconSets[type].map(({ icon, label }, index) => (
      <div key={index} className="skill-card" data-tooltip={label}>
        {typeof icon === "string" ? (
          <img
            src={icon}
            alt={label}
            style={{
              width: "50px",
              height: "50px",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.2)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ) : (
          icon
        )}
      </div>
    ));

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
              <p className="subtitle">
                Classe: Desenvolvedor Front-End | Full-Stack
              </p>
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
              <strong>Classe:</strong> Desenvolvedor Full-Stack especialista em
              Front-end
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
          <div className="tabs">
            <button onClick={() => showIcons("frontend")}>Front-End</button>
            <button onClick={() => showIcons("mobile")}>Mobile</button>
            <button onClick={() => showIcons("backend")}>Back-End</button>
            <button onClick={() => showIcons("devops")}>DevOps</button>
            <button onClick={() => showIcons("ai")}>IA</button>
            <button onClick={() => showIcons("outros")}>Outros</button>
          </div>
          <div className="skills-grid">{icons}</div>
        </section>

        <section className="section">
          <h2 className="section-title">Missões Concluídas</h2>
          <div className="skills">
            <div className="skills-group">
              <h3 className="skills-title">
                Desenvolvedor Front-End em NAVA - Technology for business |
                08/24 - 06/25
              </h3>
              <ul className="skills-list">
                <li className="skills-item-title">
                  Responsável pelo desenvolvimento e manutenção do Front-End em
                  ReactJS, líder e coordenador do projeto de sistema ERP da
                  startup Sol Agora para venda e distribuição de placas solares.
                </li>
                <li className="skills-item">
                  Eliminei falhas e reduzi dívidas técnicas no sistema ao
                  aplicar TypeScript tipado e boas práticas com TanStack e
                  PrimeReact, resultando em melhor performance e manutenção
                  simplificada.
                </li>
                <li className="skills-item">
                  Estruturei pipeline CI/CD no Azure DevOps com testes, releases
                  automatizados e templates de pull request, aumentando
                  agilidade e confiabilidade nas entregas.
                </li>
                <li className="skills-item">
                  Desenvolvi novos componentes reutilizáveis e funcionalidades
                  para o módulo de campanhas em orçamentos, aplicando princípios
                  de Clean Code aliados com a Copilot AI.
                </li>
                <li className="skills-item">
                  Corrigi testes desatualizados e criei novos, usando Vitest com
                  React Testing Library, aumentando cobertura e estabilidade da
                  aplicação.
                </li>
                <li className="skills-item">
                  Participei da prototipação de novas histórias, colaborando com
                  o time de produto e design.
                </li>
              </ul>
            </div>
            <div className="skills-group">
              <h3 className="skills-title">
                Desenvolvedor Front-End em Claro Brasil | 08/21 - 08/24
              </h3>
              <ul className="skills-list">
                <li className="skills-item-title">
                  Desenvolvedor da solução Claro Clube para Web, responsável
                  pelo gerenciamento de pontuação de fidelidade, em um
                  ecossistema de micro-frontends com ReactJS.
                </li>
                <li className="skills-item">
                  Estruturei o código aplicando Clean Architecture e princípios
                  SOLID, elevando a modularidade.
                </li>
                <li className="skills-item">
                  Construí componentes reutilizáveis alinhados ao Design System
                  no Figma e ao framework interno Mondrian, garantindo
                  consistência visual e padronização de código.
                </li>
                <li className="skills-item">
                  Integrei com APIs via GraphQL usando Apollo Client (cache,
                  fragmentos e políticas de fetch) para otimizar requisições e
                  experiência do usuário.
                </li>
                <li className="skills-item">
                  Implementei testes end-to-end com Cypress cobrindo fluxos
                  críticos, reduzindo regressões e aumentando a confiabilidade
                  em releases.
                </li>
              </ul>
            </div>
            <div className="skills-group">
              <h3 className="skills-title">
                Desenvolvedor Full-Stack em Superare | 11/18 - 08/21
              </h3>
              <ul className="skills-list">
                <li className="skills-item-title">
                  Responsável pelo desenvolvimento e evolução de sistemas de
                  e-commerce de grandes marcas (Claro, NET, Cadiveu, Cebrace e
                  Raízen), com atuação em ReactJS, HTML5, PHP (WordPress) e
                  criação de um aplicativo de investimentos (Mooney
                  Investimentos) em React Native.
                </li>
                <li className="skills-item">
                  Liderança na redução de dívida técnica, adoção de boas
                  práticas de arquitetura e componentização em Storybook,
                  garantindo escalabilidade e consistência.
                </li>
                <li className="skills-item">
                  Criação e manutenção de APIs em Node.js, integração com MySQL
                  e MongoDB, e deploys automatizados em Heroku.
                </li>
                <li className="skills-item">
                  Implementação de testes automatizados com Jest e documentação
                  técnica, assegurando qualidade e padronização.
                </li>
                <li className="skills-item">
                  Desenvolvimento de e-mails marketing em HTML com Google Tag
                  Manager, otimizando rastreabilidade e engajamento.
                </li>
                <li className="skills-item">
                  Mentoria de estagiários, conduzindo onboarding, code reviews e
                  difusão de boas práticas de engenharia.
                </li>
              </ul>
            </div>
            <div className="skills-group">
              <h3 className="skills-title">
                Desenvolvedor Front-End em Keep It Simple | 05/18 - 11/18
              </h3>
              <ul className="skills-list">
                <li className="skills-item-title">
                  Responsável pelo desenvolvimento e evolução de sistemas de
                  e-commerce de grandes marcas (Claro, NET, Cadiveu, Cebrace e
                  Raízen), com atuação em ReactJS, HTML5, PHP (WordPress) e
                  criação de um aplicativo de investimentos (Mooney
                  Investimentos) em React Native.
                </li>
                <li className="skills-item">
                  Liderança na redução de dívida técnica, adoção de boas
                  práticas de arquitetura e componentização em Storybook,
                  garantindo escalabilidade e consistência.
                </li>
                <li className="skills-item">
                  Criação e manutenção de APIs em Node.js, integração com MySQL
                  e MongoDB, e deploys automatizados em Heroku.
                </li>
                <li className="skills-item">
                  Implementação de testes automatizados com Jest e documentação
                  técnica, assegurando qualidade e padronização.
                </li>
                <li className="skills-item">
                  Desenvolvimento de e-mails marketing em HTML com Google Tag
                  Manager, otimizando rastreabilidade e engajamento.
                </li>
                <li className="skills-item">
                  Mentoria de estagiários, conduzindo onboarding, code reviews e
                  difusão de boas práticas de engenharia.
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

        <section className="section" style={{ gap: "12px" }}>
          <h2 className="section-title">Títulos Desbloqueados</h2>
          <Card />
        </section>
      </div>
    </div>
  );
}
