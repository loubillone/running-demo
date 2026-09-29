import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "../motion";
import "../css/regulation.css";

const Regulation = ({ evento }) => {
  return (
    <section className="regulation" id="reglamento">
      <motion.div
        className="regulation__inner"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="regulation__contenido">
          <p className="regulation__kicker">Información importante</p>
          <h2 className="regulation__titulo">Reglamento</h2>
          <p className="regulation__texto">{evento.reglamento}</p>
        </div>

        <button type="button" className="regulation__boton">
          Ver reglamento
        </button>
      </motion.div>
    </section>
  );
};

export default Regulation;
