import "../css/faq.css";

const FAQ = ({ preguntas = [] }) => {
  return (
    <section className="faq" id="faq">
      <h2 className="faq__titulo">Preguntas frecuentes</h2>
      <ul className="faq__lista">
        {preguntas.map((item) => (
          <li key={item.pregunta} className="faq__item">
            <h3 className="faq__pregunta">{item.pregunta}</h3>
            <p className="faq__respuesta">{item.respuesta}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;
