import "../css/kitPickup.css";

const KitPickup = ({ retiroKit }) => {
  const datos = [
    { label: "Fechas", valor: retiroKit.fechas },
    { label: "Horario", valor: retiroKit.horario },
    { label: "Lugar", valor: retiroKit.lugar },
    { label: "Requisito", valor: retiroKit.requisito },
  ];

  return (
    <section className="kit-pickup" id="retiro-kit">
      <div className="kit-pickup__inner">
        <p className="kit-pickup__kicker">Antes de correr</p>
        <h2 className="kit-pickup__titulo">Retiro de kit</h2>

        <ul className="kit-pickup__lista">
          {datos.map((dato) => (
            <li key={dato.label} className="kit-pickup__item">
              <span className="kit-pickup__label">{dato.label}</span>
              <span className="kit-pickup__valor">{dato.valor}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default KitPickup;
