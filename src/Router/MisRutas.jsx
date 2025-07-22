import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Portafolio } from "../components/Portafolio";
import { Servicios } from "../components/Servicios";
import { Contacto } from "../components/Contacto";
import { Curriculum } from "../components/Curriculum";
import { HeaderNav } from "../layout/HeaderNav";
import { Proyecto } from "../components/Proyecto";
import { Footer } from "../layout/Footer";

export const MisRutas = () => {
  return (
    <div>
      <BrowserRouter basename="/MiPorfolio">
        {/* Header Navegacion */}
        <HeaderNav />
        {/* Contenido Central */}
        <section className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/proyecto/:id" element={<Proyecto />} />
            <Route
              path="/*"
              element={
                <div className="page">
                  <h1 className="heading">Error 404</h1>
                </div>
              }
            />
          </Routes>
        </section>

        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </div>
  );
};
