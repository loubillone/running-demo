import { Link } from "react-router-dom";
import "../css/hero.css";

const Hero = ({ evento }) => {
  return (
    <section className="hero" id="inicio">
      <h1 className="hero__nombre">{evento.nombre}</h1>
      <p className="hero__claim">{evento.claim}</p>
      <p className="hero__fecha">{evento.fecha}</p>
      <p className="hero__lugar">{evento.lugar}</p>
      <ul className="hero__distancias">
        {evento.distancias.map((distancia) => (
          <li key={distancia.id}>{distancia.nombre}</li>
        ))}
      </ul>
      <div className="hero__acciones">
        <Link to="/inscripcion" className="hero__cta">
          Inscribirme
        </Link>
        <a href="#circuito" className="hero__link">
          Ver recorrido
        </a>
      </div>
    </section>
  );
};

export default Hero;
