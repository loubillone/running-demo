import "../css/sponsors.css";

const Sponsors = ({ sponsors = [] }) => {
  return (
    <section className="sponsors" id="sponsors">
      <div className="sponsors__inner">
        <p className="sponsors__kicker">Nos acompañan</p>
        <h2 className="sponsors__titulo">Sponsors</h2>

        <ul className="sponsors__list">
          {sponsors.map((sponsor) => (
            <li key={sponsor.id} className="sponsors__item">
              {sponsor.nombre}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sponsors;
