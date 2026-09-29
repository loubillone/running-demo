import { motion } from "motion/react";
import { fadeUp, staggerList, viewportOnce } from "../motion";
import "../css/runnerKit.css";

const RunnerKit = ({ kit = [] }) => {
  return (
    <section className="runner-kit" id="kit">
      <div className="runner-kit__inner">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="runner-kit__kicker">Incluye</p>
          <h2 className="runner-kit__titulo">Tu kit de corredor</h2>
        </motion.div>

        <motion.ul
          className="runner-kit__lista"
          variants={staggerList}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {kit.map((item, index) => (
            <motion.li key={item} className="runner-kit__item" variants={fadeUp}>
              <span className="runner-kit__numero">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="runner-kit__nombre">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default RunnerKit;
