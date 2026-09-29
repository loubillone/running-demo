import evento from "../data/eventoDemo";
import Header from "../components/Header";
import Hero from "../components/Hero";
import EventInfo from "../components/EventInfo";
import Distances from "../components/Distances";
import AboutRace from "../components/AboutRace";
import RunnerKit from "../components/RunnerKit";
import Route from "../components/Route";
import KitPickup from "../components/KitPickup";
import Regulation from "../components/Regulation";
import Sponsors from "../components/Sponsors";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "../css/home.css";

const Home = () => {
  return (
    <>
      <Header evento={evento} />
      <main>
        <Hero evento={evento} />
        <EventInfo evento={evento} />
        <Distances distancias={evento.distancias} />
        <AboutRace evento={evento} />
        <RunnerKit kit={evento.kit} />
        <Route evento={evento} />
        <KitPickup retiroKit={evento.retiroKit} />
        <Regulation evento={evento} />
        <Sponsors sponsors={evento.sponsors} />
        <FAQ preguntas={evento.preguntasFrecuentes} />
        <FinalCTA evento={evento} />
      </main>
      <Footer evento={evento} />
      <ScrollToTop />
    </>
  );
};

export default Home;
