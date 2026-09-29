import "../css/regulation.css";

const Regulation = ({ evento }) => {
  return (
    <section className="regulation" id="reglamento">
      <h2 className="regulation__titulo">Reglamento</h2>
      <p className="regulation__texto">{evento.reglamento}</p>
      <button type="button" className="regulation__boton">
        Ver reglamento
      </button>
    </section>
  );
};

export default Regulation;
