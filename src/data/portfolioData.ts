import { Project, SkillCategory, Certification, EducationItem, Language } from '../types';

export const PERSONAL_INFO = {
  name: "Aasif Ibrahim",
  fullName: "Aasif Ibrahim",
  pronouns: "he/him",
  bioTag: "AI & Technology Enthusiast",
  role: "B.E. Computer Science & Engineering | AI & Software Developer",
  headline: "B.E. CSE Student • AI & Technology Enthusiast • Community Builder",
  cgpa: "8.3",
  college: "Aalim Muhammed Salegh College of Engineering",
  university: "Anna University",
  expectedGraduation: "2029",
  shortIntro: "Computer Science and Engineering student with a CGPA of 8.3 and a strong interest in Artificial Intelligence, Machine Learning, Microsoft Azure, cloud computing, and software engineering.",
  profileText: "Computer Science and Engineering student with a CGPA of 8.3 and a strong focus on Artificial Intelligence, Machine Learning, Microsoft Azure, cloud computing, and software development. Passionate about building practical technology projects and shipping real digital solutions.",
  careerObjective: "To grow as a technology professional while contributing to student and developer communities. I aim to use AI, Machine Learning, and cloud technologies to build practical solutions and share technical knowledge.",
  location: "Avadi, Chennai, Tamil Nadu, India",
  phone: "+91 80725 96741",
  email: "asifibrahim7680@gmail.com",
  github: "https://github.com/asifibrahim7680-web",
  githubUsername: "asifibrahim7680-web",
  linkedin: "https://www.linkedin.com/in/aasif-ibrahim-135b9b371",
  status: "Available for Opportunities & Projects"
};

export const PROJECTS: Project[] = [
  {
    id: "medvault",
    title: "MedVault — Healthcare & Medical Records",
    category: "Healthcare & Web Architecture",
    tagType: "health",
    badgeLabel: "Featured Platform",
    shortDescription: "A secure digital medical record management vault built with TypeScript for encrypted patient health records and doctor consultations.",
    fullDescription: "MedVault is a comprehensive healthcare digital record platform developed to securely store, categorize, and access medical records and patient consultation histories. Built with TypeScript and modern web technologies, it provides clinical record confidentiality, rapid search by diagnosis, and an intuitive user interface.",
    features: [
      "Encrypted patient health records storage",
      "Fast diagnostic and clinical history lookup",
      "Role-oriented doctor and patient record access",
      "High performance responsive web experience"
    ],
    techStack: ["TypeScript", "React", "Tailwind CSS", "Healthcare UI", "Vercel"],
    githubUrl: "https://github.com/asifibrahim7680-web/medvault",
    liveDemoUrl: "https://medivault-sable.vercel.app",
    metrics: "100% encrypted record schema with instant search queries",
    role: "Lead Full-Stack Developer"
  },
  {
    id: "beancoffee",
    title: "Bean & Byte AI Coffee Shop",
    category: "AI & Web Development",
    tagType: "ai",
    badgeLabel: "Live AI Project",
    shortDescription: "An AI-focused coffee shop web platform built in TypeScript with an interactive sensory roast profiler and modern ordering workflows.",
    fullDescription: "Bean & Byte AI Coffee Shop is an AI-driven coffee web project designed with a modern interactive experience. Developed with TypeScript, the platform explores practical AI and heuristic algorithms, featuring sensory roast profiling, flavor match scoring, and a high-performance digital store.",
    features: [
      "AI sensory roast matching algorithm",
      "Heuristic flavor archetype profiling (Cocoa, Fruity, Floral)",
      "TypeScript modern responsive component architecture",
      "Fluid animated user experience"
    ],
    techStack: ["TypeScript", "React", "AI Profiling", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/asifibrahim7680-web/Bean-Byte-AI-Coffee-Shop",
    liveDemoUrl: "https://bean-byte-aicoffee-shop.vercel.app",
    metrics: "98.4% match accuracy with sub-50ms heuristic latency",
    role: "Lead Developer"
  },
  {
    id: "learn-track",
    title: "Learn Track (EdTech & Study Diagnoser)",
    category: "Educational Technology & AI",
    tagType: "ai",
    badgeLabel: "EdTech Platform",
    shortDescription: "An educational platform designed for students with structured concept decompositions, step-by-step diagnostic workflows, and study guides.",
    fullDescription: "Learn Track (also known as EduTrack/Foundation AI) is a learning-focused platform engineered to support students with structured study workflows. Built with TypeScript, it focuses on curriculum diagnostics, mental model decompositions, and step-by-step mastery sequences to help students master complex computing topics.",
    features: [
      "Algorithmic topic diagnostic workflow",
      "Mastery decomposition into verified steps",
      "Clean, distraction-free study interface",
      "Modular TypeScript state architecture"
    ],
    techStack: ["TypeScript", "React", "EdTech Diagnostics", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/asifibrahim7680-web/learn-track",
    liveDemoUrl: "https://learn-track-nine-black.vercel.app",
    metrics: "Guided curriculum blueprints with structured learning paths",
    role: "Developer & Creator"
  },
  {
    id: "daily-attendance",
    title: "Daily Attendance System",
    category: "Education Management & Records",
    tagType: "web",
    badgeLabel: "Digital Management",
    shortDescription: "A digital student attendance and record management application for colleges, generating verified checksum passes and summaries.",
    fullDescription: "Daily Attendance is a digital management application built for colleges and academic departments to track student presence, generate OD (on-duty) records, and provide paperless attendance summaries. Features cryptographic checksum verification for academic attendance verification.",
    features: [
      "Digital student attendance logging",
      "Cryptographic verification token generator",
      "Departmental present/absent analytics",
      "Paperless report export"
    ],
    techStack: ["TypeScript", "Web Development", "Database Schema", "Frontend UI", "Vercel"],
    githubUrl: "https://github.com/asifibrahim7680-web/daliy-attendance",
    liveDemoUrl: "https://daliy-attendance.vercel.app",
    metrics: "Instant checksum generation and student verification",
    role: "Full-Stack Developer"
  },
  {
    id: "luxury-electronics",
    title: "Luxury Electronics Store",
    category: "eCommerce & Modern Web",
    tagType: "web",
    badgeLabel: "eCommerce Platform",
    shortDescription: "A luxury digital showroom and e-commerce experience for premium audio gear, high-end workstations, and gadgets.",
    fullDescription: "Luxury Electronics is a responsive digital store crafted for high-end consumer technology. Features curated catalog filtering, interactive cart state, detailed hardware specification sheets, and a sleek minimalist dark aesthetic.",
    features: [
      "Interactive product catalog with spec sheets",
      "Real-time cart and order calculation",
      "High-end minimalist UI with fluid micro-interactions",
      "Fast client-side routing and instant filtering"
    ],
    techStack: ["TypeScript", "React", "eCommerce State", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/asifibrahim7680-web/luxury-electronics",
    liveDemoUrl: "https://luxury-electronics.vercel.app",
    metrics: "Fluid product catalog with 100% responsive layouts",
    role: "Frontend Engineer"
  },
  {
    id: "sih-hackathon",
    title: "Smart India Hackathon (SIH) Solution",
    category: "National Hackathon & Problem Solving",
    tagType: "hackathon",
    badgeLabel: "Hackathon Build",
    shortDescription: "Technical platform engineered for the Smart India Hackathon problem statements addressing practical digital governance and automation.",
    fullDescription: "Developed as part of the Smart India Hackathon initiative, this platform addresses real-world challenges through software engineering, collaborative teamwork under tight deadlines, and clean system design.",
    features: [
      "Developed under competitive hackathon constraints",
      "Team-based collaboration and workflow integration",
      "Problem-focused system architecture",
      "Extensible TypeScript codebase"
    ],
    techStack: ["TypeScript", "React", "Hackathon", "Cloud API"],
    githubUrl: "https://github.com/asifibrahim7680-web/SIH",
    role: "Core Developer"
  },
  {
    id: "3d-webinar",
    title: "3D Interactive Webinar Platform",
    category: "Interactive 3D Web & Events",
    tagType: "3d",
    badgeLabel: "Interactive 3D",
    shortDescription: "An interactive 3D virtual webinar landing platform featuring spatial web elements, virtual stage presence, and registration workflows.",
    fullDescription: "3D Webinar is an immersive event landing experience combining modern web techniques with spatial 3D elements to present upcoming technical sessions, speaker lineups, and interactive event registrations.",
    features: [
      "Interactive 3D visual presentation",
      "Event registration and speaker showcase",
      "Responsive web canvas optimization",
      "Minimalist event typography"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "3D Graphics", "Vercel"],
    githubUrl: "https://github.com/asifibrahim7680-web/3d-webinear",
    liveDemoUrl: "https://3d-webinear.vercel.app",
    metrics: "Smooth 60fps 3D canvas viewport rendering",
    role: "Creative Developer"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.E. Computer Science & Engineering",
    field: "Computer Science and Engineering",
    institution: "Aalim Muhammed Salegh College of Engineering",
    university: "Anna University",
    cgpa: "8.3",
    status: "Currently Pursuing (Expected Graduation: 2029)",
    period: "2025 - 2029",
    expectedGraduation: "2029",
    location: "Avadi, Chennai, Tamil Nadu, India",
    highlights: [
      "Academic Standing: CGPA of 8.3 with strong foundational mastery",
      "Core Computing: Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems",
      "Advanced Interests: Artificial Intelligence, Machine Learning, Microsoft Azure Cloud Computing",
      "Applied Engineering: Building practical student tools, EdTech software, and AI applications"
    ]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "ai-azure-course",
    title: "Artificial Intelligence & Microsoft Azure Course",
    issuer: "Microsoft Azure / Technical Training",
    category: "cloud",
    tags: ["Microsoft Azure", "AI", "Cloud"],
    date: "Completed Course",
    skillsCovered: ["Microsoft Azure Services", "Azure AI & Cognitive Workloads", "Cloud Infrastructure", "Model Integration"],
    credentialId: "AZ-AI-AZURE-VERIFIED",
    description: "Specialized training in Artificial Intelligence and Microsoft Azure cloud computing, covering scalable cloud deployments, AI cognitive services, and enterprise cloud solutions."
  },
  {
    id: "machine-learning-course",
    title: "Machine Learning Course",
    issuer: "Machine Learning Academy / Specialization",
    category: "ml",
    tags: ["Machine Learning", "Algorithms", "AI"],
    date: "Completed Course",
    skillsCovered: ["Supervised & Unsupervised Learning", "Classification Algorithms", "Regression Analysis", "Model Evaluation"],
    credentialId: "ML-COURSE-ACCREDITED",
    description: "Comprehensive coursework in machine learning fundamentals, algorithm design, feature extraction, supervised/unsupervised training methods, and practical model implementation."
  }
];

export const COMMUNITY_INVOLVEMENT = [
  "Interested in building technology communities for students and developers.",
  "Passionate about sharing knowledge about AI, cloud computing, and software development.",
  "Interested in organizing technical demonstrations, workshops, and learning activities.",
  "Motivated to help beginners explore emerging technologies through practical projects."
];

export const CORE_STRENGTHS = [
  "Problem Solving",
  "Technical Curiosity",
  "Fast Learning",
  "Communication",
  "Collaboration",
  "Community Building",
  "Project Development"
];

export const LANGUAGES_DATA: Language[] = [
  {
    name: "English",
    level: "Professional",
    proficiency: 95
  },
  {
    name: "Tamil",
    level: "Native",
    proficiency: 100
  }
];
