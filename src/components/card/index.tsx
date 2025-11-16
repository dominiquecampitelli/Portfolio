import "./styles.css";

const cards = [
  {
    color: "#a4bfc3",
    title:
      "Certificado de Qualificação Profissional em Desenvolvimento de Apps Mobile Android e iOS.",
    description: "FIAP",
  },
  {
    color: "#aae0bc",
    title:
      "Certificado de Qualificação Profissional em Desenvolvimento de Sistemas e-Commerce.",
    description: "FIAP",
  },
  {
    color: "#b8e4ff",
    title:
      "Certificado de Qualificação Profissional em Desenvolvimento de Portais Corporativos.",
    description: "FIAP",
  },
];

export default function Card() {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div
          key={index}
          style={{ backgroundColor: card.color }}
          className="card"
        >
          <h1>{card.title}</h1>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}
