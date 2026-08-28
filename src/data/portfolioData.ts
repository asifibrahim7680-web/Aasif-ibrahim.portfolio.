import { Project, SkillCategory, Certification, EducationItem, Language } from '../types';
import profilePhoto from '../assets/images/aasif_real_photo_1787935827224.jpg';

export const PERSONAL_INFO = {
  name: "Aasif Ibrahim",
  fullName: "Aasif Ibrahim",
  avatarUrl: profilePhoto,
  pronouns: "he/him",
  bioTag: "AI & Technology Enthusiast",
  role: "B.E. Computer Science & Engineering | AI & Technology Enthusiast | Community Builder",
  headline: "B.E. CSE Student • AI & Technology Enthusiast • Community Builder",
  cgpa: "8.3",
  college: "Aalim Muhammed Salegh College of Engineering",
  university: "Anna University",
  expectedGraduation: "2029",
  shortIntro: "Computer Science and Engineering student with a CGPA of 8.3 and a strong interest in Artificial Intelligence, Machine Learning, Microsoft Azure, cloud computing, software development, and educational technology.",
  profileText: "Computer Science and Engineering student with a CGPA of 8.3 and a strong interest in Artificial Intelligence, Machine Learning, Microsoft Azure, cloud computing, software development, and educational technology. Passionate about building practical technology projects, learning through hands-on development, and helping students and developers discover emerging technologies.",
  careerObjective: "To grow as a technology professional while contributing to student and developer communities. I aim to use AI, Machine Learning, and cloud technologies to build practical solutions, share technical knowledge, organize learning activities, and encourage more students to become confident technology builders.",
  aboutText1: "I am currently pursuing B.E. Computer Science and Engineering at Aalim Muhammed Salegh College of Engineering (Anna University) with a CGPA of 8.3, focusing on Artificial Intelligence, Machine Learning, Microsoft Azure, and software engineering.",
  aboutText2: "Passionate about building practical technology projects and learning through hands-on development. I enjoy exploring emerging technologies, architecting full-stack web applications in TypeScript, and designing educational software.",
  aboutText3: "Beyond writing code, I am actively dedicated to community building—sharing technical knowledge about AI and cloud computing, organizing learning activities and workshops, and helping beginner students discover emerging technologies.",
  location: "Avadi, Chennai, Tamil Nadu, India",
  phone: "+91 80725 96741",
  email: "asifibrahim7680@gmail.com",
  github: "https://github.com/asifibrahim7680-web",
  githubUsername: "asifibrahim7680-web",
  linkedin: "https://www.linkedin.com/in/aasif-ibrahim-135b9b371",
  twitter: "https://twitter.com",
  status: "Available for Opportunities & Community Projects"
};

export const STATS = [
  {
    title: "CGPA 8.3",
    subtitle: "Aalim Muhammed Salegh (Anna Univ)",
    icon: "GraduationCap",
    value: "8.3 CGPA"
  },
  {
    title: "3 Practical Projects",
    subtitle: "TypeScript & AI Solutions",
    icon: "Rocket",
    value: "3+"
  },
  {
    title: "AI & Azure",
    subtitle: "Certified Coursework",
    icon: "BrainCircuit",
    value: "AI & Cloud"
  },
  {
    title: "Community Builder",
    subtitle: "Workshops & Knowledge Sharing",
    icon: "Users",
    value: "Active"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    icon: "Brain",
    borderColor: "#6f00be",
    skills: [
      { name: "Artificial Intelligence", level: "Specialist", icon: "Bot", tagColor: "#6f00be", description: "Applied AI models, heuristic workflows, problem solving and cognitive assistants" },
      { name: "Generative AI", level: "Proficient", icon: "Sparkles", tagColor: "#6f00be", description: "Prompt engineering, LLM integrations and conversational interfaces" },
      { name: "Machine Learning", level: "Specialist", icon: "BrainCircuit", tagColor: "#6f00be", description: "Supervised and unsupervised learning, algorithms and model evaluation" }
    ]
  },
  {
    title: "Cloud Computing",
    icon: "Cloud",
    borderColor: "#0284c7",
    skills: [
      { name: "Microsoft Azure", level: "Specialist", icon: "Cloud", tagColor: "#0284c7", description: "Azure cloud architecture, AI cognitive services and cloud deployments" },
      { name: "Cloud Computing", level: "Proficient", icon: "Server", tagColor: "#0284c7", description: "Distributed cloud infrastructure, hosting, serverless principles and storage" }
    ]
  },
  {
    title: "Development & Engineering",
    icon: "Terminal",
    borderColor: "#df7412",
    skills: [
      { name: "TypeScript", level: "Advanced", icon: "FileCode", tagColor: "#df7412", description: "Strong typing, modern interfaces, and scalable full-stack application development" },
      { name: "Web Development", level: "Advanced", icon: "Layout", tagColor: "#df7412", description: "Modern responsive web applications, semantic architecture and user experiences" },
      { name: "Frontend Development", level: "Advanced", icon: "Code2", tagColor: "#df7412", description: "Component systems, state management, responsive UI and accessibility" },
      { name: "Backend & Database", level: "Proficient", icon: "Database", tagColor: "#df7412", description: "Database design, schema modeling, relational querying and data workflows" },
      { name: "API Integration", level: "Proficient", icon: "Cpu", tagColor: "#df7412", description: "REST APIs, asynchronous client-server integration and webhook endpoints" }
    ]
  },
  {
    title: "Interests & Tooling",
    icon: "Wrench",
    borderColor: "#adc6ff",
    skills: [
      { name: "Educational Technology", level: "Focused", icon: "BookOpen", tagColor: "#adc6ff", description: "EdTech platforms, structured learning pipelines and student support tools" },
      { name: "Developer Tools", level: "Proficient", icon: "Terminal", tagColor: "#adc6ff", description: "Git, GitHub, command line automation and modern development toolchains" },
      { name: "Technical Project Dev", level: "Specialist", icon: "Rocket", tagColor: "#adc6ff", description: "Hands-on project development from ideation to deployment" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "beancoffee",
    title: "Bean & Byte AI Coffee Shop",
    category: "AI & Web Development",
    tagType: "ai",
    badgeLabel: "Live AI Project",
    shortDescription: "An AI-focused coffee shop web project built in TypeScript delivering a modern, interactive digital experience and practical AI use cases.",
    fullDescription: "Bean & Byte AI Coffee Shop is an AI-focused coffee shop web project designed with a modern interactive experience. Developed with TypeScript, the platform explores practical AI and web technology use cases, featuring seamless product showcases, interactive roast exploration, and an intuitive user interface.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtgDG9bPsq6uKZcZj6dZVUS-9NFQfzI2F8ZFkkYdm5E2IPw8l2jmgzGXV8jn2i4f25m5Tjrm1eTXJUxiWrY1dNwpFk_bFsuY5AA5xEe7IdyyKGNNUzSIL37OE6aX5ScR3VxjtrZJHwvYtAJvf9OYfq_orF1O9-vfFzCBSZY0vo-3xxt9XJHU9iVbs8uJoZ3_QoyRe9DlnCLCRSAWRMR9Ld2iuzv8Vh3zbqLIElV9RmWhFPD5p2TZZL",
    imageAlt: "Bean & Byte AI Coffee Shop - Interactive Platform",
    features: [
      "AI-focused interactive coffee experience",
      "TypeScript-based modern frontend architecture",
      "Explored practical AI & web technology use cases",
      "High performance responsive user experience"
    ],
    techStack: ["TypeScript", "React", "AI Integration", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/asifibrahim7680-web/beancoffee",
    liveDemoUrl: "https://bean-byte-aicoffee-shop.vercel.app",
    metrics: "100% responsive viewport adaptability with instant load times",
    role: "Lead Developer"
  },
  {
    id: "learn-track",
    title: "Learn Track (Foundation AI)",
    category: "Educational Technology & AI",
    tagType: "ai",
    badgeLabel: "EdTech Platform",
    shortDescription: "A learning-focused platform designed to support students and structured learning with accessible user experience and educational technology.",
    fullDescription: "Learn Track is a learning-focused platform engineered to support students with structured learning workflows. Built with TypeScript, it focuses on accessible user experiences, educational technology tools, and intelligent study support to help students master complex subjects.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvYPyNxSCm1Qdbcxb1vPHbqaykgG_-JajD6Lru5e9icLh2BFe5PFnVXv0810y_1X_y8VoQKEIxh5tjUnJxZnAo6lak2hEUdL3HPppsU8863sg4lct5tME9itPafIGo0SEUS2wN7uDnCWxg72C-kmyHOOD-vv0XOxlp3VK6Im8Pn_8BiC7nW_jZL06s01pvmxm3G8YUepi4-kk-vqg5SOIJ8GTAvHDVrBN7BOc6MTQ6kOGNuWYN_nNJ",
    imageAlt: "Learn Track - Educational Technology Platform",
    features: [
      "Structured learning support for students",
      "Educational technology tool integration",
      "Clean, accessible user experience",
      "Modular TypeScript component architecture"
    ],
    techStack: ["TypeScript", "React", "EdTech", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/asifibrahim7680-web/foundation-ai",
    liveDemoUrl: "https://foundation-eduction.vercel.app",
    metrics: "Structured learning workflows with responsive interface",
    role: "Developer & Creator"
  },
  {
    id: "daily-attendance",
    title: "Daily Attendance",
    category: "Education Management & Web App",
    tagType: "web",
    badgeLabel: "Digital Management",
    shortDescription: "A digital attendance management application for student information and attendance records, providing a practical education-management solution.",
    fullDescription: "Daily Attendance is a digital attendance management application designed for tracking student information and maintaining accurate attendance records. Built in TypeScript, it offers educational institutions and teachers a streamlined, paperless tool for tracking daily attendance and generating records.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Daily Attendance Management System",
    features: [
      "Digital student attendance tracking",
      "Student information management records",
      "Practical education-management solution",
      "Real-time attendance summaries"
    ],
    techStack: ["TypeScript", "Web Development", "Database Integration", "Frontend UI"],
    githubUrl: "https://github.com/asifibrahim7680-web",
    liveDemoUrl: "https://github.com/asifibrahim7680-web",
    metrics: "Fast digital attendance logging and record management",
    role: "Full-Stack Developer"
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
