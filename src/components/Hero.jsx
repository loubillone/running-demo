import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { imagenHero } from "../assets/imagenes";
import { fadeUp } from "../motion";
import "../css/hero.css";

const Hero = ({ evento }) => {
  const titulo = evento.claim.split(".")[0].trim();
  const [primeraLinea, ...restoTitulo] = titulo.split(" ");
  const anio = evento.fecha.match(/\d{4}/)?.[0] ?? "";
  const fechaHero = `${evento.fechaCorta} ${anio}`.trim();
  const lugarHero = evento.lugar.replace(",", " ·");
  const distanciasHero = evento.distancias
    .map((distancia) => distancia.nombre)
    .join(" · ");

  return (
    <section
      className={`hero${imagenHero ? " hero--con-imagen" : ""}`}
      id="inicio"
    >
      {imagenHero ? (
        <img
          className="hero__fondo"
          src={imagenHero}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
        />
      ) : null}
      <motion.div
        className="hero__inner"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <p className="hero__kicker">{evento.nombre}</p>

        <h1 className="hero__titulo">
          <span className="hero__titulo-linea">{primeraLinea}</span>
          <span className="hero__titulo-linea">{restoTitulo.join(" ")}</span>
        </h1>

        <p className="hero__claim">{evento.claim}</p>

        <p className="hero__meta">
          <span>{fechaHero}</span>
          <span className="hero__meta-punto" aria-hidden="true" />
          <span>{lugarHero}</span>
          <span className="hero__meta-punto" aria-hidden="true" />
          <span>{distanciasHero}</span>
        </p>

        <div className="hero__acciones">
          <Link to="/inscripcion" className="hero__cta">
            Inscribirme
          </Link>
          <a href="#circuito" className="hero__secundario">
            Ver recorrido
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
