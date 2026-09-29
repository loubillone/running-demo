import "../css/aboutRace.css";

const AboutRace = ({ evento }) => {
  return (
    <section className="about-race" id="carrera">
      <h2 className="about-race__titulo">La carrera</h2>
      <p className="about-race__descripcion">{evento.descripcion}</p>
    </section>
  );
};

export default AboutRace;
