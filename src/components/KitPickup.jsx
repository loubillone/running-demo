import { motion } from "motion/react";
import { fadeUp, staggerList, viewportOnce } from "../motion";
import "../css/kitPickup.css";

const KitPickup = ({ retiroKit }) => {
  const datos = [
    { label: "Fechas", valor: retiroKit.fechas },
    { label: "Horario", valor: retiroKit.horario },
    { label: "Lugar", valor: retiroKit.lugar },
    { label: "Requisito", valor: retiroKit.requisito },
  ];

  return (
    <section className="kit-pickup" id="retiro-kit">
      <div className="kit-pickup__inner">
        <p className="kit-pickup__kicker">Antes de correr</p>
        <h2 className="kit-pickup__titulo">Retiro de kit</h2>

        <motion.ul
          className="kit-pickup__lista"
          variants={staggerList}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {datos.map((dato) => (
            <motion.li
              key={dato.label}
              className="kit-pickup__item"
              variants={fadeUp}
            >
              <span className="kit-pickup__label">{dato.label}</span>
              <span className="kit-pickup__valor">{dato.valor}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default KitPickup;
