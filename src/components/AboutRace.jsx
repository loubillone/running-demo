import { motion } from "motion/react";
import { imagenAbout } from "../assets/imagenes";
import { fadeIn, fadeUp, viewportOnce } from "../motion";
import "../css/aboutRace.css";

const AboutRace = ({ evento }) => {
  const lugar = evento.lugar.replace(",", " ·");
  const distancias = evento.distancias
    .map((distancia) => distancia.nombre)
    .join(" + ");

  return (
    <section className="about-race" id="carrera">
      <div className="about-race__inner">
        <motion.div
          className="about-race__contenido"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="about-race__kicker">La carrera</p>
          <h2 className="about-race__titulo">
            <span>Una carrera.</span>
            <span>Dos desafíos.</span>
          </h2>
          <p className="about-race__descripcion">{evento.descripcion}</p>
          <div className="about-race__destacados">
            <p className="about-race__dato">{lugar}</p>
            <p className="about-race__dato">{distancias}</p>
          </div>
        </motion.div>

        <motion.div
          className="about-race__media"
          role={imagenAbout ? undefined : "img"}
          aria-label={
            imagenAbout
              ? undefined
              : "Espacio reservado para una fotografía de corredores"
          }
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {imagenAbout ? (
            <img
              className="about-race__imagen"
              src={imagenAbout}
              alt="Grupo de corredores en Yerba Buena, Tucumán"
            />
          ) : null}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutRace;
