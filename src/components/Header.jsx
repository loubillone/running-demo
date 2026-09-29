import { Link } from "react-router-dom";
import "../css/header.css";

const Header = ({ evento }) => {
  return (
    <header className="header">
      <p className="header__nombre">{evento.nombre}</p>
      <nav className="header__nav">
        <ul className="header__list">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#carrera">Carrera</a>
          </li>
          <li>
            <a href="#distancias">Distancias</a>
          </li>
          <li>
            <a href="#circuito">Circuito</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </nav>
      <Link to="/inscripcion" className="header__cta">
        Inscribirme
      </Link>
    </header>
  );
};

export default Header;
