export const profile = {
  name: 'Esteban Giraldo',
  email: 'giraldomontenegro2304@gmail.com',
  linkedin: 'https://www.linkedin.com/in/esteban-giraldo-frm-6411ba372/',
  github: 'https://github.com/estebanfrm',
  whatsapp: 'https://wa.me/573126822833',
  cv: '/cv-esteban.pdf',
}

export const defaultLocale = 'en'

export const localeOptions = [
  { code: 'en', short: 'EN', name: 'English' },
  { code: 'es', short: 'ES', name: 'Español' },
]

export const content = {
  en: {
    meta: {
      title: 'Esteban Giraldo | Junior Developer',
    },
    ui: {
      mainNav: 'Main navigation',
      languageSwitch: 'Language',
      openPhoto: 'Enlarge photo of Esteban Giraldo',
      photo: 'Photo of Esteban Giraldo',
      closePhoto: 'Close photo',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      nav: [
        { label: 'Home', href: '#inicio' },
        { label: 'About', href: '#sobre-mi' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#proyectos' },
        { label: 'Contact', href: '#contacto' },
      ],
      heroActions: 'Main actions',
      heroSummary: 'Professional summary',
      viewProjects: 'View projects',
      downloadCv: 'Download CV',
      contact: 'Contact',
      filterSkills: 'Filter skills',
      allSkills: 'All',
      filterProjects: 'Filter projects',
      allProjects: 'All',
      comingSoon: 'Coming soon',
      demo: 'Demo',
      contactLinks: {
        linkedin: 'Professional profile',
        github: 'Repositories',
        whatsapp: 'Direct message',
      },
    },
    profile: {
      title: 'Systems Engineering Student | Junior Developer',
      roleFocus: 'Junior AI Developer / Junior AI Engineer',
      tagline:
        'I build clean, functional web solutions driven by continuous learning, with a strong focus on applied AI.',
    },
    sections: {
      about: {
        eyebrow: 'About me',
        title: 'A growing professional profile',
        text: 'Systems Engineering student who combines a solid academic foundation, technical curiosity and discipline to build real, well-documented software with modern and AI-assisted tools.',
      },
      skills: {
        eyebrow: 'Skills',
        title: 'Technologies and tools',
        text: 'Academic and hands-on stack focused on web development, APIs, data, development tools and artificial intelligence.',
      },
      projects: {
        eyebrow: 'Projects',
        title: 'Featured projects',
        text: 'A selection of real projects with an academic and professional focus, showcasing fullstack work, documentation, deployment and modern interfaces.',
      },
      experience: {
        eyebrow: 'Experience',
        title: 'Administrative and audit background',
        text: 'Experience that adds value to development teams: auditing, attention to detail, AI-driven process automation, communication and responsible data handling.',
      },
      education: {
        eyebrow: 'Education',
        title: 'Academic background',
        text: 'Engineering degree in progress and advanced English certified at B2 level, supporting my profile as a junior developer.',
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Available for projects',
        text: 'Open to collaborating on web development, AI, internships and technology projects where I can contribute clear solutions, commitment and continuous learning.',
      },
    },
    about: {
      intro:
        "I'm a Systems Engineering student, currently in my 7th semester (2026). I have built academic projects covering frontend, backend, databases and modern development tools.",
      details:
        'I enjoy creating clear, maintainable and useful software. I work daily with AI development tools such as Claude Code, Codex and local LLMs, using them responsibly to build, document and improve digital products, while strengthening my skills in web development, backend, databases and Docker.',
      highlights: [
        'Constant learning and a growth mindset',
        'Solid foundations in web development and APIs',
        'AI-assisted development with Claude Code, Codex and local LLMs',
        'Audit and administrative experience: attention to detail, organization and responsibility',
      ],
    },
    skills: [
      {
        category: 'Frontend',
        items: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Vite'],
      },
      {
        category: 'Backend',
        items: ['Python', 'Node.js', 'Express', 'FastAPI'],
      },
      {
        category: 'Databases',
        items: ['MySQL', 'PostgreSQL'],
      },
      {
        category: 'Tools',
        items: ['Docker', 'Git', 'GitHub'],
      },
      {
        category: 'AI development',
        items: [
          'Claude Code',
          'Codex',
          'Local LLMs',
          'Prompt engineering',
          'AI skills & workflows',
        ],
      },
      {
        category: 'AI & multimedia',
        items: ['AI image editing', 'AI video editing'],
      },
    ],
    projects: [
      {
        name: 'API Pulse',
        description:
          'Open-source HTTP API testing dashboard that shows responses, latency and a persistent history. Its public demo runs synthetic GET, POST, PUT and DELETE scenarios with rate limits, and a CI quality workflow runs tests, linting and dependency audits.',
        technologies: [
          'Vue',
          'Vite',
          'FastAPI',
          'PostgreSQL',
          'SQLAlchemy',
          'Docker',
          'GitHub Actions',
        ],
        github: 'https://github.com/estebanfrm/Api-Pulse',
        demo: 'https://api-pulse-web.onrender.com',
        demoLabel: 'Live demo',
        status: 'Fullstack',
        featured: true,
      },
      {
        name: 'Restaurant Management System',
        description:
          'Fullstack platform for managing restaurants, orders, inventory and users. A collaborative academic project built with a modern backend architecture and a cross-platform frontend.',
        technologies: [
          'FastAPI',
          'PostgreSQL',
          'Flutter',
          'Docker',
          'SQLModel',
          'GitHub',
        ],
        github: 'https://github.com/anfeMurillo/unicatolica_project_6th_semester',
        demo: '',
        demoLabel: 'Coming soon',
        status: 'Fullstack',
        featured: true,
      },
    ],
    experience: [
      {
        role: 'Administrative Assistant & Auditor',
        company: 'Administrative and audit experience',
        period: 'Present',
        description:
          'I audit documents, billing and supporting records, cross-checking information across sources to catch inconsistencies before submission. I designed an AI-assisted workflow with custom AI skills that automates repetitive steps such as organizing files, extracting data and verifying records, alongside administrative tasks, communication and process follow-up.',
        achievements: [
          'Document and billing audits with clear findings reports',
          'AI-assisted audit workflow built with custom AI skills',
          'Organization of documents, data and processes',
          'Clear communication and professional conduct',
        ],
      },
    ],
    education: [
      {
        title: 'Systems Engineering',
        institution: 'University',
        period: '7th semester in 2026',
        description:
          'Academic training in programming, web development, databases, software architecture and engineering fundamentals.',
        linkLabel: 'University',
        linkUrl: 'https://unicatolica.edu.co',
      },
      {
        title: 'Advanced English',
        institution: 'Oxford B2 certificate',
        period: 'B2 level · Certified',
        description:
          'Advanced English communication for academic and professional contexts, certified at B2 level by Oxford.',
        linkLabel: 'Institute',
        linkUrl: 'https://learnenglish.edu.co/web2/',
      },
    ],
    stats: [
      { value: '7th', label: 'semester' },
      { value: '10+', label: 'technologies' },
      { value: 'B2', label: 'English · Oxford' },
      { value: 'AI', label: 'current focus' },
    ],
  },
  es: {
    meta: {
      title: 'Esteban Giraldo | Desarrollador Junior',
    },
    ui: {
      mainNav: 'Navegación principal',
      languageSwitch: 'Idioma',
      openPhoto: 'Ampliar foto de Esteban Giraldo',
      photo: 'Foto de Esteban Giraldo',
      closePhoto: 'Cerrar foto',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      nav: [
        { label: 'Inicio', href: '#inicio' },
        { label: 'Sobre mí', href: '#sobre-mi' },
        { label: 'Skills', href: '#skills' },
        { label: 'Proyectos', href: '#proyectos' },
        { label: 'Contacto', href: '#contacto' },
      ],
      heroActions: 'Acciones principales',
      heroSummary: 'Resumen profesional',
      viewProjects: 'Ver proyectos',
      downloadCv: 'Descargar CV',
      contact: 'Contacto',
      filterSkills: 'Filtrar habilidades',
      allSkills: 'Todas',
      filterProjects: 'Filtrar proyectos',
      allProjects: 'Todos',
      comingSoon: 'Próximamente',
      demo: 'Demo',
      contactLinks: {
        linkedin: 'Perfil profesional',
        github: 'Repositorios',
        whatsapp: 'Mensaje directo',
      },
    },
    profile: {
      title: 'Estudiante de Ingeniería de Sistemas | Desarrollador Junior',
      roleFocus: 'Desarrollador IA Junior / Ingeniero IA Junior',
      tagline:
        'Construyo soluciones web limpias, funcionales y orientadas al aprendizaje continuo, con interés especial en IA aplicada.',
    },
    sections: {
      about: {
        eyebrow: 'Sobre mí',
        title: 'Perfil profesional en crecimiento',
        text: 'Estudiante de Ingeniería de Sistemas que combina una base académica sólida, curiosidad técnica y disciplina para construir software real y bien documentado con herramientas modernas y asistidas por IA.',
      },
      skills: {
        eyebrow: 'Skills',
        title: 'Tecnologías y herramientas',
        text: 'Stack académico y práctico enfocado en desarrollo web, APIs, datos, herramientas de trabajo e inteligencia artificial.',
      },
      projects: {
        eyebrow: 'Proyectos',
        title: 'Proyectos destacados',
        text: 'Selección de proyectos reales con enfoque académico y profesional, mostrando trabajo fullstack, documentación, despliegue y construcción de interfaces modernas.',
      },
      experience: {
        eyebrow: 'Experiencia',
        title: 'Base profesional administrativa y de auditoría',
        text: 'Experiencia útil para equipos de desarrollo: auditoría, atención al detalle, automatización de procesos con IA, comunicación y manejo responsable de información.',
      },
      education: {
        eyebrow: 'Educación',
        title: 'Formación académica',
        text: 'Formación de ingeniería en curso e inglés avanzado certificado en nivel B2, que fortalecen mi perfil como desarrollador junior.',
      },
      contact: {
        eyebrow: 'Contacto',
        title: 'Disponible para proyectos',
        text: 'Abierto a colaborar en desarrollo web, IA, prácticas profesionales y proyectos tecnológicos donde pueda aportar soluciones claras, compromiso y aprendizaje continuo.',
      },
    },
    about: {
      intro:
        'Soy estudiante de Ingeniería de Sistemas, actualmente cursando 7.º semestre en 2026. He desarrollado proyectos académicos con frontend, backend, bases de datos y herramientas modernas de desarrollo.',
      details:
        'Me interesa crear software claro, mantenible y útil. Trabajo a diario con herramientas de desarrollo con IA como Claude Code, Codex y LLM locales, usándolas de forma responsable para construir, documentar y mejorar productos digitales, mientras fortalezco mis habilidades en desarrollo web, backend, bases de datos y Docker.',
      highlights: [
        'Aprendizaje constante y mentalidad de mejora',
        'Bases sólidas en desarrollo web y APIs',
        'Desarrollo asistido por IA con Claude Code, Codex y LLM locales',
        'Experiencia administrativa y en auditoría: atención al detalle, organización y responsabilidad',
      ],
    },
    skills: [
      {
        category: 'Frontend',
        items: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Vite'],
      },
      {
        category: 'Backend',
        items: ['Python', 'Node.js', 'Express', 'FastAPI'],
      },
      {
        category: 'Bases de datos',
        items: ['MySQL', 'PostgreSQL'],
      },
      {
        category: 'Herramientas',
        items: ['Docker', 'Git', 'GitHub'],
      },
      {
        category: 'Desarrollo con IA',
        items: [
          'Claude Code',
          'Codex',
          'LLM locales',
          'Prompts IA',
          'Skills y flujos de IA',
        ],
      },
      {
        category: 'IA y multimedia',
        items: ['Edición de imágenes con IA', 'Edición de video con IA'],
      },
    ],
    projects: [
      {
        name: 'API Pulse',
        description:
          'Panel open source para probar APIs HTTP que muestra respuestas, latencia e historial persistente. Su demo pública ejecuta escenarios sintéticos GET, POST, PUT y DELETE con límites de uso, y un workflow de calidad en CI corre pruebas, lint y auditoría de dependencias.',
        technologies: [
          'Vue',
          'Vite',
          'FastAPI',
          'PostgreSQL',
          'SQLAlchemy',
          'Docker',
          'GitHub Actions',
        ],
        github: 'https://github.com/estebanfrm/Api-Pulse',
        demo: 'https://api-pulse-web.onrender.com',
        demoLabel: 'Demo en vivo',
        status: 'Fullstack',
        featured: true,
      },
      {
        name: 'Sistema de Gestión para Restaurantes',
        description:
          'Plataforma fullstack para gestión de restaurantes, pedidos, inventario y usuarios. Proyecto académico colaborativo desarrollado con arquitectura backend moderna y frontend multiplataforma.',
        technologies: [
          'FastAPI',
          'PostgreSQL',
          'Flutter',
          'Docker',
          'SQLModel',
          'GitHub',
        ],
        github: 'https://github.com/anfeMurillo/unicatolica_project_6th_semester',
        demo: '',
        demoLabel: 'Próximamente',
        status: 'Fullstack',
        featured: true,
      },
    ],
    experience: [
      {
        role: 'Asistente administrativo y auditor',
        company: 'Experiencia administrativa y de auditoría',
        period: 'Actualidad',
        description:
          'Realizo auditorías de documentos, facturación y soportes, cruzando información entre fuentes para detectar inconsistencias antes de radicar. Diseñé un flujo de trabajo asistido por IA con skills personalizadas que automatiza pasos repetitivos como organizar archivos, extraer datos y verificar registros, junto con tareas administrativas, comunicación y seguimiento de procesos.',
        achievements: [
          'Auditorías de documentos y facturación con reportes claros de hallazgos',
          'Flujo de auditoría asistido por IA con skills personalizadas',
          'Organización de documentos, datos y procesos',
          'Comunicación clara y trato profesional',
        ],
      },
    ],
    education: [
      {
        title: 'Ingeniería de Sistemas',
        institution: 'Universidad',
        period: '7.º semestre en 2026',
        description:
          'Formación académica en programación, desarrollo web, bases de datos, arquitectura de software y fundamentos de ingeniería.',
        linkLabel: 'Universidad',
        linkUrl: 'https://unicatolica.edu.co',
      },
      {
        title: 'Inglés avanzado',
        institution: 'Certificado Oxford B2',
        period: 'Nivel B2 · Certificado',
        description:
          'Comunicación avanzada en inglés para contextos académicos y profesionales, certificada en nivel B2 por Oxford.',
        linkLabel: 'Instituto',
        linkUrl: 'https://learnenglish.edu.co/web2/',
      },
    ],
    stats: [
      { value: '7.º', label: 'semestre' },
      { value: '10+', label: 'tecnologías' },
      { value: 'B2', label: 'inglés · Oxford' },
      { value: 'IA', label: 'enfoque actual' },
    ],
  },
}
