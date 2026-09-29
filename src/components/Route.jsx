import "../css/route.css";

const Route = ({ evento }) => {
  return (
    <section className="route" id="circuito">
      <h2 className="route__titulo">Recorrido</h2>
      <p className="route__descripcion">{evento.recorrido.descripcion}</p>
      <div className="route__mapa">
        <p>Espacio reservado para el mapa del recorrido.</p>
      </div>
      <ul className="route__lista">
        {evento.distancias.map((distancia) => (
          <li key={distancia.id} className="route__item">
            <h3>{distancia.nombre}</h3>
            <p>Dificultad: {distancia.dificultad}</p>
            <p>Puestos de hidratación: {distancia.hidratacion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Route;
