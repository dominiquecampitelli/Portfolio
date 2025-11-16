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

import "./styles.css";

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

export default function Tabs() {
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
    <>
      <div className="tabs">
        <button onClick={() => showIcons("frontend")}>Front-End</button>
        <button onClick={() => showIcons("mobile")}>Mobile</button>
        <button onClick={() => showIcons("backend")}>Back-End</button>
        <button onClick={() => showIcons("devops")}>DevOps</button>
        <button onClick={() => showIcons("ai")}>IA</button>
        <button onClick={() => showIcons("outros")}>Outros</button>
      </div>
      <div className="skills-grid">{icons}</div>
    </>
  );
}
