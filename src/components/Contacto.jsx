import React from "react";

export const Contacto = () => {
  return (
    <div className="page">
      <section className="container-form">
        <h1 className="heading">Contacto</h1>
        <form
          className="contact"
          action="mailto:alejandropascualsanchez@gmail.com"
        >
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellidos" />
          <input type="text" placeholder="Email" />
          <textarea type="text" placeholder="Motivo del contacto" />
          <input type="submit" value="Enviar" />
        </form>
      </section>
    </div>
  );
};
