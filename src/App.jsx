import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import RegistrationSuccess from "./pages/RegistrationSuccess";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inscripcion" element={<Registration />} />
      <Route path="/inscripcion-exitosa" element={<RegistrationSuccess />} />
    </Routes>
  );
};

export default App;
