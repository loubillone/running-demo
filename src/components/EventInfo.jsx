import "../css/eventInfo.css";

const EventInfo = ({ evento }) => {
  return (
    <section className="event-info" id="info">
      <h2 className="event-info__titulo">Información del evento</h2>
      <ul className="event-info__lista">
        <li>
          <strong>Fecha:</strong> {evento.fecha}
        </li>
        <li>
          <strong>Horario:</strong> {evento.horario}
        </li>
        <li>
          <strong>Lugar:</strong> {evento.lugar}
        </li>
        <li>
          <strong>Distancias:</strong>{" "}
          {evento.distancias.map((distancia) => distancia.nombre).join(" / ")}
        </li>
      </ul>
    </section>
  );
};

export default EventInfo;
