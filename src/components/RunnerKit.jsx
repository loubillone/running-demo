import "../css/runnerKit.css";

const RunnerKit = ({ kit = [] }) => {
  return (
    <section className="runner-kit" id="kit">
      <h2 className="runner-kit__titulo">Kit del corredor</h2>
      <ul className="runner-kit__lista">
        {kit.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default RunnerKit;
