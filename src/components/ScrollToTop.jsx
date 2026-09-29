import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import "../css/scrollToTop.css";

const UMBRAL_SCROLL = 600;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const actualizarVisibilidad = () => {
      setVisible(window.scrollY > UMBRAL_SCROLL);
    };

    actualizarVisibilidad();
    window.addEventListener("scroll", actualizarVisibilidad, { passive: true });

    return () => {
      window.removeEventListener("scroll", actualizarVisibilidad);
    };
  }, []);

  const volverArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          className="scroll-to-top"
          aria-label="Volver arriba"
          onClick={volverArriba}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          ↑
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
};

export default ScrollToTop;
