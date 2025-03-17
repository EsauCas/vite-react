import React from "react";

// Definimos la interfaz de propiedades para la tarjeta
interface CardProps {
  title: string; // Título de la tarjeta
  description: string; // Descripción breve
  price: number; // Precio (opcional)
  color: string; // Clase de color de DaisyUI (ej: "primary", "secondary")
  buttons?: { label: string; href: string }[]; // Botones (opcional)
  className?: string; // Clases adicionales para personalizar
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  price,
  color,
  buttons,
  className,
}) => {
  // Clases base de DaisyUI para la tarjeta
  const cardClasses = `card card-side bg-base-100 shadow-xl ${className} ${
    color ? `text-${color}-600 border-${color}-300` : ""
  }`;

  return (
    <div className={cardClasses}>
      <figure className="px-4">
        {/* Imagen (opcional: puedes agregar una imagen aquí) */}
        {/* <img src="imagen.jpg" alt="Imagen de la tarjeta" className="rounded-xl" /> */}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        {price && <div className="text-lg font-bold">${price}</div>}{" "}
        {/* Muestra el precio si existe */}
        <div className="card-actions justify-end">
          {/* Renderiza los botones si hay */}
          {buttons?.map((btn, index) => (
            <a
              key={index}
              href={btn.href}
              className={`btn btn-sm ${color ? `btn-${color}` : "btn-primary"}`}
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
