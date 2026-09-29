import { Link } from "react-router-dom";
import "../css/distances.css";

const Distances = ({ distancias = [] }) => {
  return (
    <section className="distances" id="distancias">
      <h2 className="distances__titulo">Distancias</h2>
      <ul className="distances__list">
        {distancias.map((distancia) => (
          <li key={distancia.id} className="distances__item">
            <h3>{distancia.nombre}</h3>
            <p>{distancia.tipo}</p>
            <p>{distancia.descripcion}</p>
            <p>Dificultad: {distancia.dificultad}</p>
            <p>Puestos de hidratación: {distancia.hidratacion}</p>
            <Link to="/inscripcion" className="distances__cta">
              Inscribirme
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Distances;
