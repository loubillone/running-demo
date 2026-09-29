import "../css/registration.css";

const Registration = () => {
  return (
    <main className="registration">
      <h1>Inscripción Norte Run 2026</h1>
      <p>
        Completá el formulario para inscribirte a la carrera. Esta es una
        estructura inicial; todavía no se envían datos.
      </p>

      <form className="registration__form">
        <div className="registration__campo">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" />
        </div>

        <div className="registration__campo">
          <label htmlFor="apellido">Apellido</label>
          <input type="text" id="apellido" name="apellido" />
        </div>

        <div className="registration__campo">
          <label htmlFor="dni">DNI</label>
          <input type="text" id="dni" name="dni" />
        </div>

        <div className="registration__campo">
          <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
          <input type="date" id="fechaNacimiento" name="fechaNacimiento" />
        </div>

        <div className="registration__campo">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="registration__campo">
          <label htmlFor="whatsapp">WhatsApp</label>
          <input type="tel" id="whatsapp" name="whatsapp" />
        </div>

        <div className="registration__campo">
          <label htmlFor="localidad">Localidad</label>
          <input type="text" id="localidad" name="localidad" />
        </div>

        <div className="registration__campo">
          <label htmlFor="provincia">Provincia</label>
          <input type="text" id="provincia" name="provincia" />
        </div>

        <div className="registration__campo">
          <label htmlFor="distancia">Distancia</label>
          <select id="distancia" name="distancia">
            <option value="">Seleccioná una distancia</option>
            <option value="5k">5K</option>
            <option value="10k">10K</option>
          </select>
        </div>

        <div className="registration__campo">
          <label htmlFor="talle">Talle</label>
          <select id="talle" name="talle">
            <option value="">Seleccioná un talle</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </div>

        <div className="registration__campo">
          <label htmlFor="runningTeam">Running Team</label>
          <input type="text" id="runningTeam" name="runningTeam" />
        </div>

        <div className="registration__campo">
          <label htmlFor="contactoEmergencia">Contacto de emergencia</label>
          <input
            type="text"
            id="contactoEmergencia"
            name="contactoEmergencia"
          />
        </div>

        <div className="registration__campo">
          <label htmlFor="telefonoEmergencia">Teléfono de emergencia</label>
          <input type="tel" id="telefonoEmergencia" name="telefonoEmergencia" />
        </div>

        <div className="registration__campo">
          <label htmlFor="aceptaReglamento">
            <input
              type="checkbox"
              id="aceptaReglamento"
              name="aceptaReglamento"
            />{" "}
            Acepto el reglamento
          </label>
        </div>

        <button type="submit">Enviar inscripción</button>
      </form>
    </main>
  );
};

export default Registration;
