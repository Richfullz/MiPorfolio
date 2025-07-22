import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { trabajos } from "../data/trabajos";

export const Proyecto = () => {
  const [proyecto, setProyecto] = useState(null);
  const params = useParams();

  useEffect(() => {
    const encontrado = trabajos.find(
      (trabajo) => trabajo.id.toLowerCase() === params.id.toLowerCase()
    );
    setProyecto(encontrado || null);
  }, [params.id]);

  if (!proyecto) {
    return (
      <div className="page">
        <h1 className="heading">Proyecto no encontrado</h1>
        <p>No se pudo cargar el proyecto con id: "{params.id}"</p>
      </div>
    );
  }

  return (
    <div className="page page-work">
      <div className="mask">
        <img
          src={`${
            process.env.PUBLIC_URL
          }/images/${proyecto.id.toLowerCase()}.png`}
          alt={proyecto.nombre}
        />
      </div>
      <div className="description">
        <h1 className="heading">{proyecto.nombre}</h1>
        <p>{proyecto.tecnologias}</p>
        <p>{proyecto.descripcion}</p>
        <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
          Ir al proyecto
        </a>
      </div>
    </div>
  );
};
