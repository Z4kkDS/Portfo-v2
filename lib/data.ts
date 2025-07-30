export const developerData = {
  personal: {
    name: "Alex Rodriguez",
    title: "Desarrollador Full Stack",
    greeting: "¡Hola! Soy",
    description: "Creo experiencias digitales excepcionales combinando diseño elegante con código limpio y funcional.",
    experience: "5",
    projectsCompleted: "50",
    clientsSatisfied: "30",
    profileImage: "/placeholder.svg?height=600&width=500&text=Developer+Profile",
  },

  about: {
    description1:
      "Soy un desarrollador full stack apasionado por crear soluciones digitales innovadoras. Con más de 5 años de experiencia, me especializo en tecnologías modernas como React, Node.js y bases de datos NoSQL.",
    description2:
      "Mi enfoque se centra en escribir código limpio, escalable y mantenible, siempre buscando las mejores prácticas y las últimas tendencias en desarrollo web. Disfruto trabajando en equipo y enfrentando nuevos desafíos técnicos.",
    mainTechnologies: ["React", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker"],
  },

  services: [
    {
      title: "Desarrollo Web Frontend",
      description: "Interfaces modernas y responsivas con las últimas tecnologías",
      icon: "Code",
      features: ["React/Next.js Applications", "Responsive Design", "Performance Optimization", "SEO Implementation"],
      price: "Desde $800",
      priceUnit: "por proyecto",
    },
    {
      title: "Desarrollo Backend",
      description: "APIs robustas y escalables para tus aplicaciones",
      icon: "Database",
      features: ["REST & GraphQL APIs", "Database Design", "Authentication Systems", "Cloud Integration"],
      price: "Desde $1,200",
      priceUnit: "por proyecto",
    },
    {
      title: "Aplicaciones Móviles",
      description: "Apps nativas y multiplataforma de alta calidad",
      icon: "Smartphone",
      features: ["React Native Development", "Cross-platform Solutions", "App Store Deployment", "Push Notifications"],
      price: "Desde $1,500",
      priceUnit: "por proyecto",
    },
    {
      title: "E-commerce Solutions",
      description: "Tiendas online completas y optimizadas para ventas",
      icon: "Globe",
      features: ["Custom Shopping Cart", "Payment Integration", "Inventory Management", "Analytics Dashboard"],
      price: "Desde $2,000",
      priceUnit: "por proyecto",
    },
    {
      title: "UI/UX Design",
      description: "Diseños atractivos y centrados en la experiencia del usuario",
      icon: "Palette",
      features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"],
      price: "Desde $600",
      priceUnit: "por proyecto",
    },
    {
      title: "Consultoría Técnica",
      description: "Asesoramiento experto para optimizar tus proyectos",
      icon: "Zap",
      features: ["Code Review", "Architecture Planning", "Performance Audit", "Technology Selection"],
      price: "$80",
      priceUnit: "por hora",
    },
  ],

  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 80 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 85 },
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "AWS/Azure", level: 82 },
        { name: "Docker", level: 80 },
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 78 },
      ],
    },
  ],

  projects: [
    {
      title: "E-commerce Platform",
      description:
        "Plataforma completa de comercio electrónico con panel de administración, carrito de compras y pasarela de pagos integrada.",
      image: "/placeholder.svg?height=250&width=400&text=E-commerce+Platform",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      featured: true,
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones push y sincronización en la nube.",
      image: "/placeholder.svg?height=250&width=400&text=Task+Management",
      technologies: ["Next.js", "Socket.io", "PostgreSQL", "Redis"],
      featured: true,
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Dashboard analítico para redes sociales con métricas en tiempo real, reportes automatizados y visualizaciones interactivas.",
      image: "/placeholder.svg?height=250&width=400&text=Social+Dashboard",
      technologies: ["Vue.js", "Python", "Chart.js", "AWS"],
      featured: false,
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Learning Management System",
      description:
        "Sistema de gestión de aprendizaje con cursos online, evaluaciones automáticas y seguimiento de progreso.",
      image: "/placeholder.svg?height=250&width=400&text=LMS+Platform",
      technologies: ["React", "Express", "MongoDB", "WebRTC"],
      featured: true,
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real Estate Platform",
      description:
        "Plataforma inmobiliaria con búsqueda avanzada, tours virtuales y sistema de gestión de propiedades.",
      image: "/placeholder.svg?height=250&width=400&text=Real+Estate",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox"],
      featured: false,
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Fitness Tracking App",
      description:
        "Aplicación móvil para seguimiento de ejercicios con planes personalizados y integración con wearables.",
      image: "/placeholder.svg?height=250&width=400&text=Fitness+App",
      technologies: ["React Native", "Firebase", "HealthKit", "Charts"],
      featured: false,
      demoUrl: "#",
      githubUrl: "#",
    },
  ],

  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Presente",
      current: true,
      description:
        "Lidero el desarrollo de aplicaciones web escalables utilizando tecnologías modernas. Responsable de la arquitectura técnica y mentoría del equipo junior.",
      achievements: [
        "Desarrollé una plataforma SaaS que incrementó los ingresos en un 40%",
        "Implementé arquitectura de microservicios reduciendo el tiempo de respuesta en 60%",
        "Lideré un equipo de 5 desarrolladores en proyectos críticos",
        "Establecí mejores prácticas de código y procesos de CI/CD",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Inc",
      period: "2020 - 2022",
      current: false,
      description:
        "Desarrollé aplicaciones web completas desde el frontend hasta el backend, trabajando en estrecha colaboración con equipos de diseño y producto.",
      achievements: [
        "Creé 15+ aplicaciones web responsivas con React y Vue.js",
        "Optimicé el rendimiento de aplicaciones existentes en un 45%",
        "Implementé sistemas de autenticación y autorización seguros",
        "Colaboré en el diseño de APIs RESTful utilizadas por múltiples clientes",
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "Heroku"],
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      current: false,
      description:
        "Especializado en desarrollo frontend, creando interfaces de usuario intuitivas y experiencias web excepcionales para productos digitales.",
      achievements: [
        "Desarrollé la interfaz principal de la aplicación con más de 10k usuarios",
        "Implementé diseño responsive que mejoró la retención móvil en 30%",
        "Colaboré con diseñadores UX para crear prototipos interactivos",
        "Establecí la guía de estilos y componentes reutilizables",
      ],
      technologies: ["React", "SASS", "Webpack", "Jest", "Figma"],
    },
  ],

  contact: {
    email: "alex.rodriguez@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    availability: "Disponible para proyectos freelance",
    social: {
      github: "https://github.com/alexrodriguez",
      linkedin: "https://linkedin.com/in/alexrodriguez",
      twitter: "https://twitter.com/alexrodriguez",
    },
  },
}
