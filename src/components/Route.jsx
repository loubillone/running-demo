import "../css/route.css";

const Route = ({ evento }) => {
  return (
    <section className="route" id="circuito">
      <div className="route__inner">
        <header className="route__encabezado">
          <p className="route__kicker">Recorrido</p>
          <h2 className="route__titulo">Conocé el circuito</h2>
          <p className="route__descripcion">{evento.recorrido.descripcion}</p>
        </header>

        <div className="route__layout">
          <div
            className="route__mapa"
            role="img"
            aria-label="Espacio reservado para el mapa del circuito"
          >
            <svg
              className="route__trazado"
              viewBox="0 0 640 420"
              aria-hidden="true"
              focusable="false"
            >
              <path
                className="route__linea route__linea--larga"
                d="M72 340 C 120 250, 170 370, 250 250 S 370 90, 470 150 S 560 230, 580 300"
              />
              <path
                className="route__linea route__linea--corta"
                d="M110 300 C 170 250, 210 210, 280 200 S 360 210, 410 160"
              />
              <circle className="route__punto" cx="110" cy="300" r="7" />
              <circle className="route__punto" cx="410" cy="160" r="7" />
            </svg>
            {/*
              Mapa futuro:
              1. Guardar la imagen en src/assets/circuito.jpg
              2. Descomentar el import y el <img>.

              import circuito from "../assets/circuito.jpg";

              <img
                className="route__imagen"
                src={circuito}
                alt="Circuito de Norte Run 2026 en Yerba Buena"
              />
            */}
          </div>

          <ul className="route__lista">
            {evento.distancias.map((distancia) => (
              <li key={distancia.id} className="route__item">
                <h3 className="route__distancia">{distancia.nombre}</h3>
                <p className="route__dato">
                  {distancia.hidratacion} puestos de hidratación
                </p>
                <p className="route__dato">
                  Dificultad {distancia.dificultad}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Route;
