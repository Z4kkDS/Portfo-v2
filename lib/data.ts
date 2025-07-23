// 🔧 ARCHIVO DE CONFIGURACIÓN - MODIFICA AQUÍ LA INFORMACIÓN DE TU AMIGO
export const teacherData = {
  // Información Personal
  personal: {
    name: "Prof. Matias Riffo Jara",
    title: "Profesor Particular Especializado",
    subtitle: "Clases Particulares",
    description:
      "Más de 12 años de experiencia ayudando a estudiantes a alcanzar sus metas académicas. Metodología adaptada a cada alumno para garantizar el éxito.",
    yearsExperience: 12,
    totalStudents: 250,
    successRate: 96,
    profileImage: "/placeholder.svg?height=320&width=320&text=Foto+Profesor",
    aboutImage: "/placeholder.svg?height=400&width=400&text=Enseñando",
  },

  // Información de Contacto
  contact: {
    email: "carlos.mendoza@email.com",
    phone: "+52 55 1234 5678",
    location: "Ciudad de México, México",
    whatsapp: "+525512345678",
  },

  // Sobre Mí
  about: {
    description1:
      "Soy un educador apasionado con más de una década de experiencia en la enseñanza. Mi enfoque se centra en crear un ambiente de aprendizaje personalizado donde cada estudiante puede desarrollar su máximo potencial.",
    description2:
      "Creo firmemente que cada alumno tiene una forma única de aprender, por lo que adapto mis métodos de enseñanza para satisfacer las necesidades individuales de cada estudiante. Como amante del café, encuentro en cada taza la inspiración para brindar clases con la misma dedicación y cuidado.",
  },

  // Experiencia Profesional
  experience: [
    {
      title: "Profesor Particular",
      company: "Independiente",
      period: "2020 - Presente",
      current: true,
      description:
        "Clases particulares personalizadas para estudiantes de secundaria y preparatoria. Especialización en matemáticas, física y química.",
      achievements: [
        "Mejora promedio del 45% en calificaciones de estudiantes",
        "Desarrollo de planes de estudio individualizados",
        "Preparación exitosa para exámenes de admisión universitaria",
      ],
    },
    {
      title: "Profesor de Matemáticas",
      company: "Instituto Tecnológico Regional",
      period: "2016 - 2020",
      current: false,
      description:
        "Docente de tiempo completo impartiendo cálculo diferencial, álgebra lineal y estadística para estudiantes de ingeniería.",
      achievements: [
        "Coordinación de laboratorio de matemáticas",
        "Desarrollo de material didáctico innovador",
        "Mentoría de estudiantes en proyectos de investigación",
      ],
    },
    {
      title: "Profesor Adjunto",
      company: "Universidad Nacional",
      period: "2012 - 2016",
      current: false,
      description:
        "Apoyo en cátedras de matemáticas aplicadas y física para estudiantes de primer y segundo año universitario.",
      achievements: [
        "Clases de apoyo y tutorías grupales",
        "Evaluación y seguimiento académico",
        "Participación en comités académicos",
      ],
    },
  ],

  // Educación
  education: [
    {
      degree: "Maestría en Educación Matemática",
      institution: "Universidad Pedagógica Nacional",
      period: "2010 - 2012",
      type: "Maestría",
      description:
        "Especialización en metodologías innovadoras para la enseñanza de matemáticas en educación media y superior.",
    },
    {
      degree: "Licenciatura en Matemáticas",
      institution: "Universidad Nacional Autónoma",
      period: "2006 - 2010",
      type: "Licenciatura",
      description:
        "Formación sólida en matemáticas puras y aplicadas, con énfasis en análisis matemático y álgebra abstracta.",
    },
    {
      degree: "Certificación en Pedagogía Digital",
      institution: "Instituto de Tecnología Educativa",
      period: "2021",
      type: "Certificación",
      description: "Especialización en herramientas digitales para la educación y metodologías de enseñanza virtual.",
    },
    {
      degree: "Diplomado en Psicopedagogía",
      institution: "Centro de Estudios Pedagógicos",
      period: "2019",
      type: "Diplomado",
      description: "Formación en técnicas de diagnóstico y tratamiento de dificultades de aprendizaje en matemáticas.",
    },
  ],

  // Áreas de Expertise
  expertise: [
    {
      title: "Matemáticas",
      icon: "BookOpen",
      skills: [
        "Álgebra y Geometría",
        "Cálculo Diferencial e Integral",
        "Trigonometría",
        "Estadística y Probabilidad",
        "Matemáticas Financieras",
      ],
    },
    {
      title: "Física",
      icon: "BookOpen",
      skills: ["Mecánica Clásica", "Termodinámica", "Electromagnetismo", "Óptica", "Física Moderna"],
    },
    {
      title: "Química",
      icon: "BookOpen",
      skills: ["Química General", "Química Orgánica", "Química Inorgánica", "Bioquímica", "Química Analítica"],
    },
    {
      title: "Preparación de Exámenes",
      icon: "GraduationCap",
      skills: [
        "Examen de Admisión UNAM",
        "Examen de Admisión IPN",
        "CENEVAL",
        "Exámenes Internacionales",
        "Certificaciones Técnicas",
      ],
    },
    {
      title: "Apoyo Académico",
      icon: "User",
      skills: [
        "Técnicas de Estudio",
        "Organización del Tiempo",
        "Manejo de Ansiedad",
        "Motivación Académica",
        "Desarrollo de Confianza",
      ],
    },
    {
      title: "Metodologías",
      icon: "Award",
      skills: [
        "Aprendizaje Visual",
        "Gamificación",
        "Resolución de Problemas",
        "Aprendizaje Colaborativo",
        "Tecnología Educativa",
      ],
    },
  ],

  // Modalidades de Clase
  classModalities: [
    "Clases presenciales en domicilio",
    "Clases virtuales por videollamada",
    "Clases grupales (máximo 4 estudiantes)",
    "Intensivos de preparación para exámenes",
  ],
}
