export const portfolioData = {
  about: {
    name: "Tadj Eddine BOUDERBA",
    title: "Analyste Cybersécurité & Développeur",
    studyLevelFull: "Étudiant en 4ème année d'ingénierie",
    specialty: "Cybersécurité",
    university: "USTHB",
    photo: "/img/tadjo.jpg", // Ajout de la photo
    stats: {
      years: 4,      
      projects: 7,   
      clubs: 4       
    }
  },

  projects: [
    {
      id: "talkanova",
      title: "TalkaNova",
      category: "Cybersécurité / Web",
      icon: "🔒",
      image: "/img/talkanova logo.svg",
      description: "Application de messagerie E2EE orientée sécurité avec Next.js et FastAPI. Intègre WebSockets, Google OAuth et compatibilité Tor/Tailscale.",
      tech: ["Next.js", "Python FastAPI", "WebSockets", "OAuth"],
      link: "https://github.com/tedjeddine22"
    },
    {
      id: "melody",
      title: "Melody",
      category: "Application Mobile",
      icon: "🎵",
      image: "/img/melody lodo.png",
      description: "Application mobile de streaming musical développée avec Flutter et Firebase, intégrant l'API Jamendo avec une interface Premium Glassmorphism.",
      tech: ["Flutter", "Firebase", "Dart", "API REST"],
      link: "https://github.com/tedjeddine22"
    },
    {
      id: "neomarket",
      title: "NeoMarket",
      category: "Web E-Commerce",
      icon: "🛒",
      image: "/img/neomarket logo.png",
      description: "Marketplace de matériel gaming au design futuriste sombre (Dark Sci-Fi), développée from scratch sans framework externe.",
      tech: ["HTML5", "CSS3", "Vanilla JS"],
      link: "https://github.com/tedjeddine22"
    },
    {
      id: "deenapp",
      title: "Deen App",
      category: "Application Web",
      icon: "🌙",
      image: "/img/deen app logo.png",
      description: "Application React de soutien aux pratiques islamiques quotidiennes, avec une interface personnalisée pour les horaires de prières.",
      tech: ["React", "API", "UI/UX"],
      link: "https://github.com/tedjeddine22"
    },
    {
      id: "diacar",
      title: "Diacar",
      category: "Web App / Santé",
      icon: "🏥",
      image: "/img/diacare logo.png",
      description: "Plateforme intelligente de suivi médical et d'accompagnement pour les patients diabétiques.",
      tech: ["Python", "Flask", "Vue.js", "MySQL"],
      link: "https://github.com/tedjeddine22"
    },
    {
      id: "clinic",
      title: "Gestion de Clinique",
      category: "Logiciel Desktop",
      icon: "💊",
      image: "/img/gestion-clinique-logo.png",
      description: "Application logicielle de gestion de clinique médicale avec système d'authentification sécurisé et gestion des dossiers patients.",
      tech: ["Java", "Swing", "POO"],
      link: "https://github.com/tedjeddine22"
    },
    {
      id: "cyberlabs",
      title: "Cybersecurity Labs",
      category: "Sécurité & Réseaux",
      icon: "🛡️",
      image: "/img/sec lab logo.png",
      description: "Pratique intensive de la sécurité Linux, de l'escalade de privilèges et de l'architecture réseau (Packet Tracer).",
      tech: ["Linux", "Packet Tracer", "CTF"],
      link: "https://github.com/tedjeddine22"
    }
  ],

  experience: [
    {
      id: "spec-cyber",
      year: "2026 - Présent",
      title: "4ème Année - Spécialisation Cybersécurité",
      company: "USTHB",
      description: "Approfondissement des concepts de sécurité défensive (SOC, DFIR), de sécurité offensive et d'analyse de vulnérabilités."
    },
    {
      id: "sonatrach",
      year: "2023",
      title: "Stage de découverte IT",
      company: "Sonatrach - Division Laboratoires (Boumerdès)",
      description: "Stage d'observation et d'immersion au sein du département IT. Découverte des infrastructures réseaux, analyse des systèmes et sensibilisation à la sécurité des environnements." 
    },
    {
      id: "hackini",
      year: "Mai 2026",
      title: "HACKINI 2.0",
      company: "Staff Organisation",
      description: "Participation à l'organisation et à la gestion du hackathon HACKINI 2.0 qui s'est tenu à l'ESI Alger les 1er et 2 Mai."
    },
    {
      id: "minictf",
      year: "Décembre 2025",
      title: "MiniCTF Challenge",
      company: "Participant",
      description: "Participation active au challenge local de cybersécurité (Capture The Flag) pour mettre en pratique les techniques d'exploitation."
    }
  ],
  
  // Rétrocompatibilité
  get hero() { return this.about; }
};
