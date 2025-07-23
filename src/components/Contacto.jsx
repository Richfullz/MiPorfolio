import React, { useState } from "react";

export const Contacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="page">
      <section className="container-form">
        <h1 className="heading">Contacto</h1>

        <form
          className="contact"
          action="https://formsubmit.co/alejandropascualsanchez@gmail.com"
          method="POST"
        >
          {/* Campo anti-spam */}
          <input
            type="text"
            name="_honey"
            style={{ display: "none" }}
            onChange={() => {}}
          />
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formulario.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="apellidos"
            placeholder="Apellidos"
            value={formulario.apellidos}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formulario.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="mensaje"
            placeholder="Motivo del contacto"
            value={formulario.mensaje}
            onChange={handleChange}
            required
          ></textarea>

          <input type="submit" value="Enviar" />
        </form>
      </section>

      <div className="info-contacto">
        <h3>También puedes contactarme en:</h3>
        <ul>
          <li>
            ✉️ Email:{" "}
            <a href="mailto:alejandropascualsanchez@gmail.com">
              alejandropascualsanchez@gmail.com
            </a>
          </li>
          <li>
            🚀 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/alejandro-p-38a413368"
              target="_blank"
              rel="noreferrer"
            >
              Alejandro Pascual
            </a>
          </li>
          <li>
            🌐 GitHub:{" "}
            <a
              href="https://github.com/Richfullz"
              target="_blank"
              rel="noreferrer"
            >
              Richfullz
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
