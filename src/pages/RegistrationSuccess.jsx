import { Link } from "react-router-dom";
import "../css/registrationSuccess.css";

const RegistrationSuccess = () => {
  return (
    <main className="registration-success">
      <h1>¡Inscripción recibida!</h1>
      <p>Tu inscripción a Norte Run 2026 fue registrada correctamente.</p>
      <p>Esta es una demo. No se realizó ningún pago real.</p>
      <Link to="/" className="registration-success__enlace">
        Volver al inicio
      </Link>
    </main>
  );
};

export default RegistrationSuccess;
