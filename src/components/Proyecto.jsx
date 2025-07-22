import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { trabajos } from "../data/trabajos";

export const Proyecto = () => {
  const [proyecto, setProyecto] = useState({});
  const params = useParams();
  useEffect(() => {
    //filtrar trabajo por el id
    let proyecto = trabajos.filter((trabajo) => trabajo.id === params.id);
    //filter filtra por una condicion por cada uno de los trabajos en este caso por cada id
    setProyecto(proyecto[0]);
  }, []); //se ejecuta solo una vez

  return (
    <div className="page page-work">
      <div className="mask">
        <img src={"/images/" + proyecto.id + ".png"} />
      </div>
      <div className="description">
        <h1 className="heading">{proyecto.nombre}</h1>
        <p>{proyecto.tecnologias}</p>
        <p>{proyecto.descripcion}</p>
        <a href={proyecto.url} target="_blank">
          Ir al proyecto
        </a>
      </div>
    </div>
  );
};
