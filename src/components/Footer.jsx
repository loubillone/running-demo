import "../css/footer.css";

const Footer = ({ evento }) => {
  return (
    <footer className="footer">
      <p className="footer__nombre">{evento.nombre}</p>
      <p className="footer__ubicacion">{evento.lugar}</p>
      <ul className="footer__links">
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
      <p className="footer__credito">Demo desarrollada por REM Studio</p>
    </footer>
  );
};

export default Footer;
