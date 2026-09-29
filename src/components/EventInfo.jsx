import "../css/eventInfo.css";

const EventInfo = ({ evento }) => {
  const ciudad = evento.lugar.split(",")[0].trim();
  const distancias = evento.distancias
    .map((distancia) => distancia.nombre)
    .join(" · ");

  const datos = [
    { label: "Fecha", valor: evento.fechaCorta },
    { label: "Largada", valor: evento.horario },
    { label: "Lugar", valor: ciudad },
    { label: "Distancias", valor: distancias },
  ];

  return (
    <section className="event-info" id="info">
      <h2 className="event-info__titulo">Información del evento</h2>
      <div className="event-info__inner">
        <ul className="event-info__lista">
          {datos.map((dato) => (
            <li key={dato.label} className="event-info__item">
              <span className="event-info__label">{dato.label}</span>
              <span className="event-info__valor">{dato.valor}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EventInfo;
