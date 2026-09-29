import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "../motion";
import "../css/finalCTA.css";

const FinalCTA = ({ evento }) => {
  const distancias = evento.distancias
    .map((distancia) => distancia.nombre)
    .join(" · ");

  return (
    <section className="final-cta">
      <motion.div
        className="final-cta__inner"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <h2 className="final-cta__titulo">
          <span>Tu próximo desafío</span>
          <span>empieza acá</span>
        </h2>
        <p className="final-cta__distancias">{distancias}</p>
        <Link to="/inscripcion" className="final-cta__boton">
          Inscribirme
        </Link>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
