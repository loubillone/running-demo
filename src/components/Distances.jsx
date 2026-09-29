import { Link } from "react-router-dom";
import "../css/distances.css";

const formatearPrecio = (precio) => {
  return `$${new Intl.NumberFormat("es-AR", {
    maximumFractionDigits: 0,
  }).format(precio)}`;
};

const Distances = ({ distancias = [] }) => {
  return (
    <section className="distances" id="distancias">
      <div className="distances__inner">
        <p className="distances__kicker">Distancias</p>
        <h2 className="distances__titulo">Elegí tu desafío</h2>
        <p className="distances__intro">
          Dos distancias, un mismo objetivo: llegar un poco más lejos.
        </p>

        <ul className="distances__list">
          {distancias.map((distancia, index) => (
            <li
              key={distancia.id}
              className={`distances__item ${
                index % 2 === 0
                  ? "distances__item--oscura"
                  : "distances__item--clara"
              }`}
            >
              <h3 className="distances__nombre">{distancia.nombre}</h3>
              <p className="distances__tipo">{distancia.tipo}</p>
              <p className="distances__descripcion">{distancia.descripcion}</p>
              <p className="distances__precio">
                {formatearPrecio(distancia.precio)}
              </p>

              <dl className="distances__specs">
                <div className="distances__spec">
                  <dt>Hidratación</dt>
                  <dd>{distancia.hidratacion} puestos</dd>
                </div>
                <div className="distances__spec">
                  <dt>Dificultad</dt>
                  <dd>{distancia.dificultad}</dd>
                </div>
              </dl>

              <p className="distances__cupos">Cupos limitados</p>

              <Link to="/inscripcion" className="distances__cta">
                Inscribirme
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Distances;
