import "../css/regulation.css";

const Regulation = ({ evento }) => {
  return (
    <section className="regulation" id="reglamento">
      <div className="regulation__inner">
        <div className="regulation__contenido">
          <p className="regulation__kicker">Información importante</p>
          <h2 className="regulation__titulo">Reglamento</h2>
          <p className="regulation__texto">{evento.reglamento}</p>
        </div>

        <button type="button" className="regulation__boton">
          Ver reglamento
        </button>
      </div>
    </section>
  );
};

export default Regulation;
