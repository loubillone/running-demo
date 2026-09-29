import "../css/runnerKit.css";

const RunnerKit = ({ kit = [] }) => {
  return (
    <section className="runner-kit" id="kit">
      <div className="runner-kit__inner">
        <p className="runner-kit__kicker">Incluye</p>
        <h2 className="runner-kit__titulo">Tu kit de corredor</h2>

        <ul className="runner-kit__lista">
          {kit.map((item, index) => (
            <li key={item} className="runner-kit__item">
              <span className="runner-kit__numero">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="runner-kit__nombre">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RunnerKit;
