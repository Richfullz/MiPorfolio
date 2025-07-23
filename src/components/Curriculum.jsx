import React from "react";
import { Link } from "react-router-dom";
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
            <strong>Participación</strong> en proyectos prácticos
            aplicandometodologías ágiles y<strong>trabajo en equipo.</strong>
          </li>
          <li>
            <strong>Enfoque</strong> en la <strong>resolución</strong> de
            problemas y aprendizaje continuo.
          </li>
          <li>
            <strong>implementación</strong> de soluciones Integrales:
            Frontend,Backend y bases de datos.
          </li>
          <li>
            <strong>Manejo de tecnologías</strong> MERN(MongoDB, Express,
            React,Node.js)
          </li>
          <li>
            Trabajo <strong>colaborativo</strong> con metodologías{" "}
            <strong>ágiles</strong>(scrum)
          </li>
        </ul>
        <h4>MERN (MongoDB, Express, React, Node.js)</h4>
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
                <h4>{proyecto.nombre}</h4>
                <p>{proyecto.descripcion}</p>
                <p>Tecnologías: {proyecto.tecnologias}</p>
              </div>
            ))}
        </div>

        {/*  */}
        <hr />
        <ul>
          <h2>Desarrollo Web - Estudio 27</h2>
          <h3>2022</h3>
          <li>Diseño de plantillas a demanda del cliente</li>
          <li>Análisis y Posicionamiento en SEO, redactando artículos,</li>
          <li>
            Manejo de tecnologías: Wordpress, PrestaShop, Posicionamiento en Seo
          </li>
        </ul>
        <h4>Wordpress, Prestashop, HTML5, CSS3, Posicionamiento en SEO</h4>
        <h3>Proyectos Personales</h3>
        <ul>
          <h3>Visita las catedrales</h3>
          <p>
            Pagina informativa sobre la Playa De Las Catedrales. <br />
            Lugo, Galicia
          </p>
          <p>Tecnologías: Wordpress</p>
        </ul>
        {/*  */}
        <hr />
        <ul>
          <h3>Desarrollo Web - ViveFormación</h3>
          <h3>2021</h3>
          <li>560 horas de formación intensiva de desarrollo web</li>
          <li>Construcción de paginas Web</li>
          <li>Integración de Componentes Software en páginas Web</li>
          <li>
            Publicación de Páginas webManejo de Tecnologías: HTML5, CSS3,
            JavaScript
          </li>
        </ul>
        <h4>HTML5, CSS, JavaScript, Node, Express</h4>
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
                <h4>{proyecto.nombre}</h4>
                <p>{proyecto.descripcion}</p>
                <p>Tecnologías: {proyecto.tecnologias}</p>
              </div>
            ))}
        </div>
        {/*  */}
      </div>
    </>
  );
};
