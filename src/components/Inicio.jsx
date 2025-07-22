import React from "react";
import { Link } from "react-router-dom";
import { ListadoTrabajos } from "./ListadoTrabajos";
export const Inicio = () => {
  return (
    <div className="home">
      <h1 className="heading">
        <strong>Desarrollador web junior</strong> Apasionado por el
        desarrolloweb, con formación realizada en Bootcamps querealizaban
        tecnologías <strong>Full Stack MERN</strong> y la experienciaen
        proyectos prácticos con <strong>metodologías agiles</strong> y
        soluciones integrales en <strong>frontend y backend.</strong>
      </h1>
      <h2 className="title">
        ¿Que aporto para el desarrollo web? {/*pensar que poner*/}
        <Link to="/contacto">Contacta Conmigo</Link>
      </h2>

      <section className="projects">
        <h2 className="heading">Proyectos</h2>
        <p>Mis trabajos realizados en el desarrollo web</p>

        <ListadoTrabajos limite="1" />
      </section>
    </div>
  );
};
