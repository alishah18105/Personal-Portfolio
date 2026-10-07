import {
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  FileCode2,
  GraduationCap,
  Layers3,
  MessageSquareText,
  Network,
  Presentation,
  SearchCode,
  ServerCog,
  Smartphone,
  Sparkles,
  TestTube2,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type IconItem = {
  title: string;
  description?: string;
  icon: LucideIcon;
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const capabilities: IconItem[] = [
  { title: "Web Development", icon: Code2 },
  { title: "Mobile Development", icon: Smartphone },
  { title: "Backend Development", icon: ServerCog },
  { title: "AI / ML", icon: BrainCircuit },
  { title: "Data Analysis", icon: SearchCode },
  { title: "Software Engineering", icon: Layers3 },
];

export const skillGroups = [
  { title: "Programming Languages", icon: FileCode2, skills: ["Python", "Java", "C", "Dart", "JavaScript", "SQL"] },
  { title: "Web Development", icon: Code2, skills: ["HTML", "CSS", "JavaScript", "React", "Flask", "Bootstrap"] },
  { title: "Mobile Development", icon: Smartphone, skills: ["Flutter", "Dart", "Provider", "GetX"] },
  { title: "Backend & Databases", icon: Database, skills: ["Node.js", "Express.js", "Flask", "PostgreSQL", "Firestore", "REST APIs"] },
  { title: "AI & Data", icon: BrainCircuit, skills: ["Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Analysis"] },
  { title: "Tools", icon: Wrench, skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Jira", "draw.io", "Cisco Packet Tracer"] },
];

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  label: string;
  variant: "systems" | "health" | "data" | "web" | "mobile" | "desktop" | "code";
};

export const featuredProjects: Project[] = [
  {
    title: "Cloud Load Balancing Simulator",
    description: "A web-based cloud load balancing simulator that demonstrates how incoming requests can be distributed across multiple servers. The application provides an interactive interface for monitoring server loads and understanding load balancing behavior.",
    technologies: ["Flask", "React", "Vite", "Tailwind CSS", "Recharts"],
    github: "https://github.com/alishah18105/Cloud-Load-Balancing-Simulator",
    live: "https://cloud-load-balancing-simulator.vercel.app/",
    label: "DESIGN & ANALYSIS OF ALGORITHMS",
    variant: "systems",
  },
  {
    title: "AI Healthcare Assistant",
    description: "A desktop-based healthcare assistant combining a machine-learning chatbot, CBC report analysis, and database-backed functionality.",
    technologies: ["Python", "PyQt6", "Flask", "PostgreSQL", "Machine Learning", "TF-IDF", "Logistic Regression"],
    github: "https://github.com/alishah18105/AI_Health_System_Project",
    label: "AI/ML",
    variant: "health",
  },
  {
    title: "Manufacturing SPC Analysis",
    description: "A statistical process control project analyzing manufacturing measurements to evaluate process stability and process capability.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "X-bar Charts", "R Charts", "Cp/Cpk Analysis", "Western Electric Rules"],
    github: "https://github.com/alishah18105/Manufacturing-SPC-Analysis",
    label: "SOFTWARE QUALITY & TESTING",
    variant: "data",
  },
];

export const otherProjects: Project[] = [
  { title: "Meeting Management System", description: "A web-based meeting management system designed to organize and manage meeting-related information using a Flask backend and PostgreSQL database.", technologies: ["Flask", "PostgreSQL", "Bootstrap"], github: "https://github.com/alishah18105/Meeting_Management_System", label: "DATABASE MANAGEMENT SYSTEM", variant: "web" },
  { title: "Progresso", description: "A mobile task-management application designed to help users organize and track daily tasks through a clean mobile interface.", technologies: ["Flutter", "Dart"], github: "https://github.com/alishah18105/Progresso-App", label: "Mobile application", variant: "mobile" },
  { title: "Flutter Product Catalog Manager", description: "A Flutter-based product catalog application developed as a practical mobile development project.", technologies: ["Flutter", "Dart"], github: "https://github.com/alishah18105/Flutter-Assignment-Product-Catalog-Manager", label: "Mobile application", variant: "mobile" },
  { title: "Sudoku Game", description: "A desktop Sudoku game developed with Java and JavaFX, focusing on interactive gameplay and application development.", technologies: ["Java", "JavaFX"], github: "https://github.com/alishah18105/Sudoku-Game", label: "DESIGN & STRUCTURE OF ALGORITHMS", variant: "desktop" },
  { title: "LeetCode Solutions", description: "A collection of programming problem solutions covering algorithmic thinking, data structures, and problem-solving practice.", technologies: ["Python", "Algorithms", "Data Structures"], github: "https://github.com/alishah18105/LeetCode-Solutions", label: "Problem-solving repository", variant: "code" },
];

export const experienceAreas = [
  "Full-stack web development",
  "REST API development",
  "Database design",
  "Mobile application development",
  "AI/ML experimentation",
  "Data analysis and visualization",
  "Software testing and quality engineering",
];

export const relevantAreas = [
  "Software Engineering",
  "Web Technologies",
  "Design and Analysis of Algorithms",
  "Database Management Systems",
  "Data Structures & Algorithms",
  "Artificial Intelligence",
  "Software Quality Engineering & Testing",
  "Computer Networking",
];

export const certifications = [
  { title: "Google AI Professional Certificate", provider: "Google / Coursera", description: "Practical applications of generative AI, AI-assisted productivity, and modern AI tools.", url: "https://github.com/alishah18105/Certificates-and-Achievements/blob/main/Google%20AI%20Professional/Google%20AI%20Professional%20Certificate.pdf", icon: Sparkles },
  { title: "Networking Basics", provider: "Cisco Networking Academy", description: "Foundations of computer networking, network communication, devices, and networking technologies.", url: "https://github.com/alishah18105/Certificates-and-Achievements/blob/main/Networking%20Basics/Networking_Basics_Certificate.pdf", icon: Network },
  { title: "Introduction to Python", provider: "DataCamp", description: "Python programming fundamentals including data types, control flow, functions, and practical programming.", url: "https://github.com/alishah18105/Certificates-and-Achievements/blob/main/Introduction%20To%20Python/Introduction%20To%20Python%20Certificate.pdf", icon: FileCode2 },
  { title: "AI Fundamentals", provider: "Coursera", description: "Foundational concepts in artificial intelligence and its applications.", url: "https://github.com/alishah18105/Certificates-and-Achievements/blob/main/Google%20AI%20Professional/AI%20Fundamentals.pdf", icon: BrainCircuit },
];

export const learning: IconItem[] = [
  { title: "AI & Machine Learning", description: "Building a stronger foundation in machine learning and practical AI applications.", icon: BrainCircuit },
  { title: "Python & Data", description: "Deepening Python, Pandas, NumPy, visualization, and data analysis skills.", icon: SearchCode },
  { title: "Backend Development", description: "Improving Flask, PostgreSQL, REST APIs, and backend architecture.", icon: ServerCog },
  { title: "Software Engineering", description: "Expanding knowledge of software testing, quality assurance, system design, and development practices.", icon: TestTube2 },
];

export const achievements = [
  { title: "Problem Solving", eyebrow: "30+ LeetCode Problems", description: "Practicing algorithms, data structures, and programming problem-solving through coding challenges.", icon: Code2 },
  { title: "Technical Projects", description: "Built projects across Web Development · Mobile Development · Backend · AI/ML · Data Analysis", icon: BriefcaseBusiness },
  { title: "Technical Presentations", description: "Participated in university technical presentations and academic projects covering software and web technologies.", icon: Presentation },
  { title: "Debate & Communication", description: "Participated in debate activities while developing communication, presentation, and critical-thinking skills.", icon: MessageSquareText },
  { title: "Research & Writing", description: "Interested in research, technical writing, and exploring technology and social issues.", icon: GraduationCap },
];