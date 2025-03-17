import React from "react";
import Card from "./Card"; // Importa el componente Card del ejemplo anterior

interface CardData {
  title: string;
  description: string;
  price: number;
  color: string;
  buttons?: { label: string; href: string }[];
}

interface CardsProps {
  cards: CardData[]; // Datos de las tarjetas
  className?: string; // Clases personalizadas para el contenedor
}

const Cards: React.FC<CardsProps> = ({ cards, className }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          price={card.price}
          color={card.color}
          buttons={card.buttons}
          // Aquí puedes añadir clases personalizadas para cada tarjeta
          className="hover:shadow-2xl transition-shadow duration-300"
        />
      ))}
    </div>
  );
};

export default Cards;
