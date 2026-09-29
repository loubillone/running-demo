import { Link } from "react-router-dom";
import "../css/header.css";

const Header = ({ evento }) => {
  const palabrasLogo = evento.nombre.replace(/\d{4}/g, "").trim().split(/\s+/);

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          <span className="header__logo-principal">{palabrasLogo[0]}</span>
          <span className="header__logo-acento">{palabrasLogo[1]}</span>
        </Link>

        <div className="header__acciones">
          <nav className="header__nav" aria-label="Secciones">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
