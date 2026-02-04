import Tabs from "../../components/tabs";
import Card from "../../components/card";

import "./styles.css";

import myAvatar from "../../assets/avatar_dominique.png";

export function Home() {
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
          <Tabs />
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

        <section className="section">
          <h2 className="section-title">Títulos Desbloqueados</h2>
          <Card />
        </section>

        <section className="section">
          <h2 className="section-title">Inventário</h2>
          <div className="inventory">
            <div className="inventory-item">
              <div className="inventory-item-description">
                <h1>Messengr</h1>
                <p>
                  Projeto de chat em tempo real criado para explorar comunicação
                  via WebSockets e arquitetura full stack moderna. Utiliza
                  Next.js no front-end e NestJS no back-end, com salas privadas
                  por URL, limite de usuários, status online/offline, indicador
                  de digitação e design responsivo mobile-first.
                </p>
              </div>
              <div className="inventory-item-footer">
                <a href="https://github.com/dominiquecampitelli/messengr" target="_blank">Repo front-end</a>
                <a href="https://github.com/dominiquecampitelli/messengr-server" target="_blank">Repo back-end</a>
                <a href="https://messengr-chat.vercel.app/" target="_blank">Visualizar</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
