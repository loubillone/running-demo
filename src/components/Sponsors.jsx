import "../css/sponsors.css";

const Sponsors = ({ sponsors = [] }) => {
  return (
    <section className="sponsors" id="sponsors">
      <h2 className="sponsors__titulo">Sponsors</h2>
      <ul className="sponsors__list">
        {sponsors.map((sponsor) => (
          <li key={sponsor.id} className="sponsors__item">
            {sponsor.nombre}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sponsors;
