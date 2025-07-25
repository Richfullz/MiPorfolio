import React from "react";
import { trabajos } from "../data/trabajos";

export const Curriculum = () => {
  return (
    <>
      <div className="page">
        <h1 className="heading">Curriculum</h1>
        <h2>Experiencia</h2>
        <ul>
          <h2>Desarrollo Web - Campsite</h2>
          <h3>2023</h3>
          <li>
            ViveFormación480 horas de <strong>formación intensiva </strong> de
            desarrollo web
          </li>
          <li>
            <strong>Desarrollo de paginas web</strong> mediante APIs RESTful.
          </li>
          <li>
            <strong>Participación</strong> en proyectos prácticos aplicando
            metodologías ágiles, <strong>trabajo en equipo.</strong>
          </li>
          <li>
            <strong>Enfoque</strong> en la <strong>resolución</strong> de
            problemas y aprendizaje continuo.
          </li>
          <li>
            <strong>Implementación</strong> de soluciones integrales: Frontend,
            Backend y Bases de Datos.
          </li>
          <li>
            Trabajo <strong>colaborativo</strong> con metodologías
            <strong> ágiles</strong> (scrum)
          </li>
        </ul>
        <h4>TECNOLOGIAS: Full Stack MERN (MongoDB, Express, React, Node.js)</h4>
        <h3>Proyectos Personales</h3>
        <div className="proyectos-personales">
          {trabajos
            .filter((trabajo) =>
              ["CafeteriaSerrano", "HogarElegante"].includes(trabajo.id)
            )
            .map((proyecto) => (
              <div key={proyecto.id} className="proyecto-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/${proyecto.id}.png`}
                  alt={proyecto.nombre}
                  className="img-proyecto-personal"
                />
                <h2>{proyecto.nombre}</h2>
                <p>{proyecto.descripcion}</p>
                <h3>Tecnologías: {proyecto.tecnologias}</h3>
              </div>
            ))}
        </div>

        {/*  */}
        <hr />
        <ul>
          <h2>Desarrollo Web - Estudio 27</h2>
          <h3>2022</h3>
          <li>
            Diseño de plantillas <strong> a demanda del cliente</strong>
          </li>
          <li>Análisis y Posicionamiento en SEO, redactando artículos,</li>
        </ul>
        <h4>
          TECNOLOGIAS: Wordpress, Prestashop, HTML5, CSS3, Posicionamiento en
          SEO
        </h4>
        <h3>Proyectos Personales</h3>
        <ul>
          <h2>Visita las catedrales</h2>
          <p>
            Pagina informativa sobre la Playa De Las Catedrales. <br />
            Lugo, Galicia
          </p>
          <h3>Tecnologías: Wordpress</h3>
        </ul>
        {/*  */}
        <hr />
        <ul>
          <h3>Desarrollo Web - ViveFormación</h3>
          <h3>2021</h3>
          <li>
            560 horas de <strong>formación intensiva</strong> de Desarrollo Web
          </li>
          <li>
            <strong>Construcción</strong> de paginas Web
          </li>
          <li>
            <strong>Integración de Componentes</strong> Software en páginas Web
          </li>
          <li>Publicación de Páginas web</li>
        </ul>
        <h4>TECNOLOGIAS: HTML5, CSS, JavaScript, Node, Express</h4>
        <h3>Proyectos Personales</h3>
        <div className="proyectos-personales">
          {trabajos
            .filter((trabajo) =>
              ["SkyExpress", "RideNRoll", "Dados"].includes(trabajo.id)
            )
            .map((proyecto) => (
              <div key={proyecto.id} className="proyecto-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/${proyecto.id}.png`}
                  alt={proyecto.nombre}
                  className="img-proyecto-personal"
                />
                <h2>{proyecto.nombre}</h2>
                <p>{proyecto.descripcion}</p>
                <h3>Tecnologías: {proyecto.tecnologias}</h3>
              </div>
            ))}
        </div>
        {/*  */}
      </div>
    </>
  );
};
