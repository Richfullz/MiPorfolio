import React from "react";
import { Link } from "react-router-dom";

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
        <ul>
          <h3>Cafetería Serrano</h3>
          <p>
            Cafeteria online.
            <br />
            Tecnologías: React, CSS, MongoDB, Node.js.
          </p>

          <h3>Hogar Elegante</h3>
          <p>
            Tienda de administración de propiedades de muebles para el hogar.
            <br />
            Tecnologías: React, Express, MongoDB.
          </p>
        </ul>
        {/*  */}
        <hr />
        <ul>
          <h2>Desarrollo Web - Estudio 27</h2>
          <h3>2022</h3>
          <li>Diseño de plantillas a demanda del cliente</li>
          <li>
            Análisis y Posicionamiento en SEO, redactando artículosManejo de
            tecnologías: Wordpress, PrestaShop,posicionamiento en Seo
          </li>
        </ul>
        <h4>Wordpress, Prestashop, HTML5, CSS3, Posicionamiento en SEO</h4>
        <h3>Proyectos Personales</h3>
        <ul>
          <h3>Visita las catedrales</h3>
          <p>
            Pagina informativa sobre la playa de las catedrales. <br />
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
        <ul>
          <h3>SkyExpress</h3>
          <p>
            Aplicacion del tiempo gestionada con los datos gratuitos de
            weatherapi.
          </p>
          <p>Tecnologías: HTML5, CSS3, Node, Express</p>
          <h3>Ride N`Roll</h3>
          <p>Empresa de deportes de Rallys donde se gestionan eventos</p>
          <p>Tecnologías: HTML5,CSS3</p>
          <h3>Dados</h3>
          <p>Juego de adivinar donde esta el dado dentro de los 3 cubos</p>
          <p>Tecnologías: HTML5, CSS3, JavaScript</p>
        </ul>
        {/*  */}
      </div>
    </>
  );
};
