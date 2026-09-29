const archivos = import.meta.glob("./*.{avif,webp,jpg,jpeg,png}", {
  eager: true,
  import: "default",
});

const EXTENSIONES = ["avif", "webp", "jpg", "jpeg", "png"];

const urlDe = (base) => {
  for (const extension of EXTENSIONES) {
    const archivo = archivos[`./${base}.${extension}`];
    if (archivo) {
      return archivo;
    }
  }

  return null;
};

export const imagenHero = urlDe("hero");
export const imagenAbout = urlDe("about-carrera");
export const imagenCircuito = urlDe("circuito");
