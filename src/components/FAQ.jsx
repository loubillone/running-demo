import { useState } from "react";
import "../css/faq.css";

const FAQ = ({ preguntas = [] }) => {
  const [abierta, setAbierta] = useState(null);

  const alternar = (index) => {
    setAbierta((actual) => (actual === index ? null : index));
  };

  return (
    <section className="faq" id="faq">
      <div className="faq__inner">
        <p className="faq__kicker">Preguntas frecuentes</p>
        <h2 className="faq__titulo">Todo lo que necesitás saber</h2>

        <ul className="faq__lista">
          {preguntas.map((item, index) => {
            const idRespuesta = `faq-respuesta-${index}`;
            const estaAbierta = abierta === index;

            return (
              <li key={item.pregunta} className="faq__item">
                <h3 className="faq__pregunta">
                  <button
                    type="button"
                    className="faq__boton"
                    aria-expanded={estaAbierta}
                    aria-controls={idRespuesta}
                    onClick={() => alternar(index)}
                  >
                    <span>{item.pregunta}</span>
                    <span className="faq__icono" aria-hidden="true">
                      {estaAbierta ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <p
                  id={idRespuesta}
                  className="faq__respuesta"
                  hidden={!estaAbierta}
                >
                  {item.respuesta}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
