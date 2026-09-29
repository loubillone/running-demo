const evento = {
  nombre: "Norte Run 2026",
  claim: "Corré el norte. Superá tus límites.",
  fecha: "18 de octubre de 2026",
  fechaCorta: "18 OCT",
  horario: "08:00 hs",
  lugar: "Yerba Buena, Tucumán",

  descripcion:
    "Norte Run 2026 es una carrera urbana pensada para todos los niveles. Un evento para disfrutar el norte, compartir con la comunidad y superar tus propios límites.",

  distancias: [
    {
      id: 1,
      nombre: "5K",
      tipo: "Participativa",
      precio: 18000,
      descripcion:
        "Ideal para quienes están empezando o quieren disfrutar la experiencia.",
      hidratacion: 2,
      dificultad: "Baja",
    },
    {
      id: 2,
      nombre: "10K",
      tipo: "Competitiva",
      precio: 24000,
      descripcion: "Para quienes buscan exigirse y superar su marca.",
      hidratacion: 3,
      dificultad: "Media",
    },
  ],

  kit: [
    "Remera oficial",
    "Dorsal",
    "Hidratación",
    "Medalla finisher",
  ],

  recorrido: {
    descripcion:
      "El recorrido transita por las calles de Yerba Buena, con un trazado accesible y señalizado para cada distancia.",
  },

  retiroKit: {
    fechas: "Viernes 16 y sábado 17 de octubre",
    horario: "10:00 a 20:00 hs",
    lugar: "Yerba Buena, Tucumán",
    requisito: "Presentar DNI",
  },

  reglamento:
    "Todos los participantes deben respetar el recorrido, las indicaciones de la organización y las normas de seguridad. El detalle completo estará disponible en el reglamento oficial.",

  sponsors: [
    { id: 1, nombre: "Sponsor A" },
    { id: 2, nombre: "Sponsor B" },
    { id: 3, nombre: "Sponsor C" },
    { id: 4, nombre: "Sponsor D" },
  ],

  preguntasFrecuentes: [
    {
      pregunta: "¿Quiénes pueden participar?",
      respuesta:
        "Pueden inscribirse corredores de todos los niveles, según la distancia elegida y los requisitos de la organización.",
    },
    {
      pregunta: "¿Dónde y cuándo retiro el kit?",
      respuesta:
        "El kit se retira en las fechas, horario y lugar informados en la sección de retiro de kit. Es necesario presentar DNI.",
    },
    {
      pregunta: "¿Hay puestos de hidratación?",
      respuesta:
        "Sí. La cantidad de puestos varía según la distancia: 5K y 10K cuentan con hidratación en el recorrido.",
    },
    {
      pregunta: "¿Puedo cambiar de distancia después de inscribirme?",
      respuesta:
        "Las modificaciones quedan sujetas a disponibilidad y a las indicaciones de la organización.",
    },
  ],
};

export default evento;
