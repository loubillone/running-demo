import { motion } from "motion/react";
import { fadeUp, staggerList, viewportOnce } from "../motion";
import "../css/sponsors.css";

const Sponsors = ({ sponsors = [] }) => {
  return (
    <section className="sponsors" id="sponsors">
      <div className="sponsors__inner">
        <p className="sponsors__kicker">Nos acompañan</p>
        <h2 className="sponsors__titulo">Sponsors</h2>

        <motion.ul
          className="sponsors__list"
          variants={staggerList}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {sponsors.map((sponsor) => (
            <motion.li
              key={sponsor.id}
              className="sponsors__item"
              variants={fadeUp}
            >
              {sponsor.nombre}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Sponsors;
