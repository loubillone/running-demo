import "../css/kitPickup.css";

const KitPickup = ({ retiroKit }) => {
  return (
    <section className="kit-pickup" id="retiro-kit">
      <h2 className="kit-pickup__titulo">Retiro de kit</h2>
      <ul className="kit-pickup__lista">
        <li>
          <strong>Fechas:</strong> {retiroKit.fechas}
        </li>
        <li>
          <strong>Horario:</strong> {retiroKit.horario}
        </li>
        <li>
          <strong>Lugar:</strong> {retiroKit.lugar}
        </li>
        <li>
          <strong>Requisito:</strong> {retiroKit.requisito}
        </li>
      </ul>
    </section>
  );
};

export default KitPickup;
