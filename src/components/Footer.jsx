import "../css/footer.css";

const Footer = ({ evento }) => {
  const anio = evento.fecha.match(/\d{4}/)?.[0] ?? "";
  const nombreCorto = evento.nombre.replace(/\s*\d{4}\s*$/, "").trim();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__marca">
          <p className="footer__nombre">{evento.nombre}</p>
          <p className="footer__ubicacion">{evento.lugar}</p>
        </div>

        <nav className="footer__nav" aria-label="Secciones">
          <ul className="footer__secciones">
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

        <ul className="footer__contacto">
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">WhatsApp</a>
          </li>
          <li>
            <a href="#">Email</a>
          </li>
        </ul>
      </div>

      <div className="footer__base">
        <p className="footer__credito">Demo desarrollada por REM Studio</p>
        <p className="footer__copy">
          © {anio} {nombreCorto}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
