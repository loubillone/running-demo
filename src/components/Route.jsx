import { motion } from "motion/react";
import { imagenCircuito } from "../assets/imagenes";
import { fadeIn, fadeUp, staggerList, viewportOnce } from "../motion";
import "../css/route.css";

const Route = ({ evento }) => {
  return (
    <section className="route" id="circuito">
      <div className="route__inner">
        <motion.header
          className="route__encabezado"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="route__kicker">Recorrido</p>
          <h2 className="route__titulo">Conocé el circuito</h2>
          <p className="route__descripcion">{evento.recorrido.descripcion}</p>
        </motion.header>

        <div className="route__layout">
          <motion.div
            className="route__mapa"
            role={imagenCircuito ? undefined : "img"}
            aria-label={
              imagenCircuito
                ? undefined
                : "Espacio reservado para el mapa del circuito"
            }
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {imagenCircuito ? (
              <img
                className="route__imagen"
                src={imagenCircuito}
                alt="Circuito de Norte Run 2026 en Yerba Buena"
                decoding="async"
              />
            ) : (
              <svg
                className="route__trazado"
                viewBox="0 0 640 420"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  className="route__linea route__linea--larga"
                  d="M72 340 C 120 250, 170 370, 250 250 S 370 90, 470 150 S 560 230, 580 300"
                />
                <path
                  className="route__linea route__linea--corta"
                  d="M110 300 C 170 250, 210 210, 280 200 S 360 210, 410 160"
                />
                <circle className="route__punto" cx="110" cy="300" r="7" />
                <circle className="route__punto" cx="410" cy="160" r="7" />
              </svg>
            )}
          </motion.div>

          <motion.ul
            className="route__lista"
            variants={staggerList}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {evento.distancias.map((distancia) => (
              <motion.li
                key={distancia.id}
                className="route__item"
                variants={fadeUp}
              >
                <h3 className="route__distancia">{distancia.nombre}</h3>
                <p className="route__dato">
                  {distancia.hidratacion} puestos de hidratación
                </p>
                <p className="route__dato">
                  Dificultad {distancia.dificultad}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Route;
