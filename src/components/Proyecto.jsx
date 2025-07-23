import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { trabajos } from "../data/trabajos";

export const Proyecto = () => {
  const [proyecto, setProyecto] = useState({});
  const params = useParams();

  useEffect(() => {
    const proyectoFiltrado = trabajos.find(
      (trabajo) => trabajo.id === params.id
    );
    setProyecto(proyectoFiltrado || {});
  }, [params.id]);

  return (
    <div className="page page-work">
      <div className="mask">
        {proyecto.id && (
          <img
            src={`${process.env.PUBLIC_URL}/images/${proyecto.id}.png`}
            alt={proyecto.nombre}
          />
        )}
      </div>
      <div className="description">
        <h1 className="heading">{proyecto.nombre}</h1>
        <p>{proyecto.tecnologias}</p>
        <p>{proyecto.descripcion}</p>
        <a href={proyecto.url} target="_blank" rel="noreferrer">
          Ir al proyecto
        </a>
      </div>
    </div>
  );
};
