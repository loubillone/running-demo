import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import evento from "../data/eventoDemo";
import "../css/registration.css";

const TALLES = ["XS", "S", "M", "L", "XL", "XXL"];
const MENSAJE_OBLIGATORIO = "Este campo es obligatorio.";

const estadoInicial = {
  nombre: "",
  apellido: "",
  dni: "",
  fechaNacimiento: "",
  email: "",
  telefono: "",
  localidad: "",
  provincia: "",
  distancia: "",
  talle: "",
  runningTeam: "",
  contactoEmergencia: "",
  telefonoEmergencia: "",
  aceptaReglamento: false,
};

const esEmailValido = (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
const esDniValido = (valor) => /^\d+$/.test(valor);
const esTelefonoValido = (valor) => /^[0-9+\-\s]+$/.test(valor);

const validarFormulario = (datos) => {
  const errores = {};
  const requeridos = [
    "nombre",
    "apellido",
    "dni",
    "fechaNacimiento",
    "email",
    "telefono",
    "localidad",
    "provincia",
    "distancia",
    "talle",
    "contactoEmergencia",
    "telefonoEmergencia",
  ];

  requeridos.forEach((campo) => {
    if (!String(datos[campo]).trim()) {
      errores[campo] = MENSAJE_OBLIGATORIO;
    }
  });

  if (datos.email.trim() && !esEmailValido(datos.email.trim())) {
    errores.email = "Ingresá un email válido.";
  }

  if (datos.dni.trim() && !esDniValido(datos.dni.trim())) {
    errores.dni = "El DNI debe contener solo números.";
  }

  if (datos.telefono.trim() && !esTelefonoValido(datos.telefono.trim())) {
    errores.telefono = "Ingresá un teléfono válido.";
  }

  if (
    datos.telefonoEmergencia.trim() &&
    !esTelefonoValido(datos.telefonoEmergencia.trim())
  ) {
    errores.telefonoEmergencia = "Ingresá un teléfono válido.";
  }

  if (!datos.aceptaReglamento) {
    errores.aceptaReglamento =
      "Debés aceptar el reglamento para continuar.";
  }

  return errores;
};

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(estadoInicial);
  const [errores, setErrores] = useState({});

  const anio = evento.fecha.match(/\d{4}/)?.[0] ?? "";
  const fechaResumen = `${evento.fechaCorta} ${anio}`.trim();
  const lugarResumen = evento.lugar.replace(",", " ·");
  const distanciasResumen = evento.distancias
    .map((distancia) => distancia.nombre)
    .join(" · ");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const siguienteValor = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: siguienteValor,
    }));

    if (errores[name]) {
      setErrores((prev) => {
        const siguientes = { ...prev };
        delete siguientes[name];
        return siguientes;
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const siguientesErrores = validarFormulario(formData);
    setErrores(siguientesErrores);

    if (Object.keys(siguientesErrores).length > 0) {
      return;
    }

    navigate("/inscripcion-exitosa");
  };

  return (
    <main className="registration">
      <header className="registration__hero">
        <div className="registration__hero-inner">
          <Link to="/" className="registration__volver">
            ← Volver al evento
          </Link>
          <p className="registration__marca">{evento.nombre}</p>
          <p className="registration__kicker">Inscripción</p>
          <h1 className="registration__titulo">
            <span>Elegí tu desafío.</span>
            <span>Completá tus datos.</span>
          </h1>
          <p className="registration__intro">
            Completá el formulario para registrar tu participación en{" "}
            {evento.nombre}.
          </p>
        </div>
      </header>

      <div className="registration__cuerpo">
        <aside className="registration__resumen">
          <p className="registration__resumen-kicker">Resumen</p>
          <p className="registration__resumen-nombre">{evento.nombre}</p>
          <ul className="registration__resumen-lista">
            <li>{fechaResumen}</li>
            <li>{evento.horario}</li>
            <li>{lugarResumen}</li>
            <li>{distanciasResumen}</li>
          </ul>
          <p className="registration__resumen-demo">Demo de inscripción</p>
          <p className="registration__resumen-nota">
            No se realizará ningún cobro ni se almacenarán datos.
          </p>
        </aside>

        <form
          className="registration__form"
          onSubmit={handleSubmit}
          noValidate
        >
          <fieldset className="registration__grupo">
            <legend className="registration__leyenda">Datos personales</legend>
            <div className="registration__grilla">
              <Campo
                id="nombre"
                label="Nombre"
                error={errores.nombre}
              >
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  autoComplete="given-name"
                  aria-required="true"
                  aria-invalid={Boolean(errores.nombre)}
                  aria-describedby={errores.nombre ? "nombre-error" : undefined}
                />
              </Campo>

              <Campo
                id="apellido"
                label="Apellido"
                error={errores.apellido}
              >
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  autoComplete="family-name"
                  aria-required="true"
                  aria-invalid={Boolean(errores.apellido)}
                  aria-describedby={
                    errores.apellido ? "apellido-error" : undefined
                  }
                />
              </Campo>

              <Campo id="dni" label="DNI" error={errores.dni}>
                <input
                  type="text"
                  id="dni"
                  name="dni"
                  inputMode="numeric"
                  value={formData.dni}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={Boolean(errores.dni)}
                  aria-describedby={errores.dni ? "dni-error" : undefined}
                />
              </Campo>

              <Campo
                id="fechaNacimiento"
                label="Fecha de nacimiento"
                error={errores.fechaNacimiento}
              >
                <input
                  type="date"
                  id="fechaNacimiento"
                  name="fechaNacimiento"
                  value={formData.fechaNacimiento}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={Boolean(errores.fechaNacimiento)}
                  aria-describedby={
                    errores.fechaNacimiento
                      ? "fechaNacimiento-error"
                      : undefined
                  }
                />
              </Campo>

              <Campo id="email" label="Email" error={errores.email}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={Boolean(errores.email)}
                  aria-describedby={errores.email ? "email-error" : undefined}
                />
              </Campo>

              <Campo id="telefono" label="WhatsApp" error={errores.telefono}>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  autoComplete="tel"
                  aria-required="true"
                  aria-invalid={Boolean(errores.telefono)}
                  aria-describedby={
                    errores.telefono ? "telefono-error" : undefined
                  }
                />
              </Campo>

              <Campo
                id="localidad"
                label="Localidad"
                error={errores.localidad}
              >
                <input
                  type="text"
                  id="localidad"
                  name="localidad"
                  value={formData.localidad}
                  onChange={handleChange}
                  autoComplete="address-level2"
                  aria-required="true"
                  aria-invalid={Boolean(errores.localidad)}
                  aria-describedby={
                    errores.localidad ? "localidad-error" : undefined
                  }
                />
              </Campo>

              <Campo
                id="provincia"
                label="Provincia"
                error={errores.provincia}
              >
                <input
                  type="text"
                  id="provincia"
                  name="provincia"
                  value={formData.provincia}
                  onChange={handleChange}
                  autoComplete="address-level1"
                  aria-required="true"
                  aria-invalid={Boolean(errores.provincia)}
                  aria-describedby={
                    errores.provincia ? "provincia-error" : undefined
                  }
                />
              </Campo>
            </div>
          </fieldset>

          <fieldset className="registration__grupo">
            <legend className="registration__leyenda">Datos de la carrera</legend>

            <fieldset
              className={`registration__distancias ${
                errores.distancia ? "registration__distancias--error" : ""
              }`}
            >
              <legend className="registration__subleyenda">
                Distancia <span aria-hidden="true">*</span>
              </legend>
              <div className="registration__distancias-opciones">
                {evento.distancias.map((distancia) => {
                  const seleccionada = formData.distancia === distancia.nombre;

                  return (
                    <label
                      key={distancia.id}
                      className={`registration__distancia ${
                        seleccionada ? "registration__distancia--activa" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="distancia"
                        value={distancia.nombre}
                        checked={seleccionada}
                        onChange={handleChange}
                      />
                      <span className="registration__distancia-nombre">
                        {distancia.nombre}
                      </span>
                      <span className="registration__distancia-tipo">
                        {distancia.tipo}
                      </span>
                    </label>
                  );
                })}
              </div>
              {errores.distancia ? (
                <p id="distancia-error" className="registration__error">
                  {errores.distancia}
                </p>
              ) : null}
            </fieldset>

            <div className="registration__grilla">
              <Campo id="talle" label="Talle" error={errores.talle}>
                <select
                  id="talle"
                  name="talle"
                  value={formData.talle}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={Boolean(errores.talle)}
                  aria-describedby={errores.talle ? "talle-error" : undefined}
                >
                  <option value="">Seleccioná un talle</option>
                  {TALLES.map((talle) => (
                    <option key={talle} value={talle}>
                      {talle}
                    </option>
                  ))}
                </select>
              </Campo>

              <Campo
                id="runningTeam"
                label="Running Team"
                optional
                className="registration__campo--completo"
              >
                <input
                  type="text"
                  id="runningTeam"
                  name="runningTeam"
                  value={formData.runningTeam}
                  onChange={handleChange}
                />
              </Campo>
            </div>
          </fieldset>

          <fieldset className="registration__grupo">
            <legend className="registration__leyenda">Emergencia</legend>
            <div className="registration__grilla">
              <Campo
                id="contactoEmergencia"
                label="Nombre del contacto de emergencia"
                error={errores.contactoEmergencia}
              >
                <input
                  type="text"
                  id="contactoEmergencia"
                  name="contactoEmergencia"
                  value={formData.contactoEmergencia}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={Boolean(errores.contactoEmergencia)}
                  aria-describedby={
                    errores.contactoEmergencia
                      ? "contactoEmergencia-error"
                      : undefined
                  }
                />
              </Campo>

              <Campo
                id="telefonoEmergencia"
                label="Teléfono de emergencia"
                error={errores.telefonoEmergencia}
              >
                <input
                  type="tel"
                  id="telefonoEmergencia"
                  name="telefonoEmergencia"
                  value={formData.telefonoEmergencia}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={Boolean(errores.telefonoEmergencia)}
                  aria-describedby={
                    errores.telefonoEmergencia
                      ? "telefonoEmergencia-error"
                      : undefined
                  }
                />
              </Campo>
            </div>
          </fieldset>

          <div
            className={`registration__aceptacion ${
              errores.aceptaReglamento
                ? "registration__aceptacion--error"
                : ""
            }`}
          >
            <label htmlFor="aceptaReglamento" className="registration__check">
              <input
                type="checkbox"
                id="aceptaReglamento"
                name="aceptaReglamento"
                checked={formData.aceptaReglamento}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={Boolean(errores.aceptaReglamento)}
                aria-describedby={
                  errores.aceptaReglamento
                    ? "aceptaReglamento-error"
                    : undefined
                }
              />
              <span>
                He leído y acepto el reglamento y las condiciones de
                participación.
              </span>
            </label>
            {errores.aceptaReglamento ? (
              <p id="aceptaReglamento-error" className="registration__error">
                {errores.aceptaReglamento}
              </p>
            ) : null}
          </div>

          <p className="registration__aviso">
            Esta es una demostración. No se guardan datos ni se realiza ningún
            pago.
          </p>

          <button type="submit" className="registration__enviar">
            Enviar inscripción
          </button>
        </form>
      </div>
    </main>
  );
};

const Campo = ({
  id,
  label,
  error,
  optional = false,
  className = "",
  children,
}) => {
  return (
    <div className={`registration__campo ${className}`.trim()}>
      <label htmlFor={id}>
        {label}
        {optional ? (
          <span className="registration__opcional"> (opcional)</span>
        ) : (
          <span aria-hidden="true"> *</span>
        )}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="registration__error">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default Registration;
