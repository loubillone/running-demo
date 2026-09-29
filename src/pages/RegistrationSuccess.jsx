import { Link } from "react-router-dom";
import { motion } from "motion/react";
import evento from "../data/eventoDemo";
import { fadeUp } from "../motion";
import "../css/registrationSuccess.css";

const RegistrationSuccess = () => {
  const anio = evento.fecha.match(/\d{4}/)?.[0] ?? "";
  const fechaResumen = `${evento.fechaCorta} ${anio}`.trim();
  const distanciasResumen = evento.distancias
    .map((distancia) => distancia.nombre)
    .join(" · ");

  return (
    <main className="registration-success">
      <motion.div
        className="registration-success__inner"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <p className="registration-success__kicker">{evento.nombre}</p>
        <h1 className="registration-success__titulo">
          ¡Inscripción recibida!
        </h1>
        <p className="registration-success__texto">
          Tu inscripción fue registrada correctamente.
        </p>
        <p className="registration-success__aviso">
          Esta es una demostración. No se almacenaron datos ni se realizó
          ningún pago.
        </p>
        <p className="registration-success__detalle">
          <span>{distanciasResumen}</span>
          <span>{fechaResumen}</span>
        </p>
        <div className="registration-success__acciones">
          <Link to="/" className="registration-success__principal">
            Volver al evento
          </Link>
          <Link to="/inscripcion" className="registration-success__secundario">
            Otra inscripción
          </Link>
        </div>
      </motion.div>
    </main>
  );
};

export default RegistrationSuccess;
