import { Link } from "react-router-dom";
import "../css/finalCTA.css";

const FinalCTA = ({ evento }) => {
  return (
    <section className="final-cta">
      <h2 className="final-cta__titulo">¿Listo para correr {evento.nombre}?</h2>
      <p className="final-cta__distancias">
        {evento.distancias.map((distancia) => distancia.nombre).join(" · ")}
      </p>
      <Link to="/inscripcion" className="final-cta__boton">
        Inscribirme
      </Link>
    </section>
  );
};

export default FinalCTA;
