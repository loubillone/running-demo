import "../css/aboutRace.css";

const AboutRace = ({ evento }) => {
  const lugar = evento.lugar.replace(",", " ·");
  const distancias = evento.distancias
    .map((distancia) => distancia.nombre)
    .join(" + ");

  return (
    <section className="about-race" id="carrera">
      <div className="about-race__inner">
        <div className="about-race__contenido">
          <p className="about-race__kicker">La carrera</p>
          <h2 className="about-race__titulo">
            <span>Una carrera.</span>
            <span>Dos desafíos.</span>
          </h2>
          <p className="about-race__descripcion">{evento.descripcion}</p>
          <div className="about-race__destacados">
            <p className="about-race__dato">{lugar}</p>
            <p className="about-race__dato">{distancias}</p>
          </div>
        </div>

        <div
          className="about-race__media"
          role="img"
          aria-label="Espacio reservado para una fotografía de corredores"
        >
          {/*
            Foto futura:
            1. Guardar la imagen en src/assets/about-carrera.jpg
            2. Descomentar el import y el <img> de abajo.

            import aboutCarrera from "../assets/about-carrera.jpg";

            <img
              className="about-race__imagen"
              src={aboutCarrera}
              alt="Grupo de corredores en Yerba Buena, Tucumán"
            />
          */}
        </div>
      </div>
    </section>
  );
};

export default AboutRace;
