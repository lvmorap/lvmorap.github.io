export const profile = {
  name: "Valeria Mora Parra",
  headline:
    "Economist | Incoming MSc in Artificial Intelligence | QA Analyst | Data & AI Enthusiast",
  positioning: "Bridging economics, data, and intelligent systems.",
  about: [
    "Economist with experience in data analysis and database management. Background as a Quality Assurance (QA) analyst in software development environments, with a strong focus on system validation and quality assurance processes.",
    "Incoming Master’s student in Artificial Intelligence, with growing expertise in machine learning and data modeling. Interested in building at the intersection of data science, software engineering, and scalable systems.",
  ],
  githubUsername: "lvmorap",
  email: "valeria.mora.parra@gmail.com",
  linkedin: "https://www.linkedin.com/in/lvmorap/",
  cvUrl: "/cv/valeria-mora-parra-cv.pdf",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Awards", href: "#awards" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const experiences = [
  {
    role: "Mid-Level Quality Assurance (QA) Analyst",
    company: "Cromasoft S.A.S.",
    period: "Jan 2026 – Present",
    bullets: [
      "Execute functional and regression testing",
      "Identify, document, and track defects",
      "Use SQL for data validation",
      "Validate system workflows and interfaces",
    ],
  },
  {
    role: "Administrative Assistant – MAIT Program",
    company: "Universidad de los Andes",
    period: "Apr 2026",
    bullets: [
      "Coordinated workflows between university and Coursera",
      "Managed academic and operational processes",
      "Performed QA tasks on systems",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "Universidad de los Andes",
    period: "Jan 2025 – Dec 2025",
    bullets: [
      "Led sessions for 60–80 students",
      "Graded assignments and exams",
      "Supported course logistics and improvements",
    ],
  },
];

export const education = [
  {
    institution: "Universidad de los Andes (Top 80 QS by Subject)",
    degree: "BSc in Economics (CGPA: 4.08/5.00)",
    period: "2022 – 2026",
    coursework: [
      "Econometrics, Probability & Statistics",
      "Machine Learning, Optimization",
      "Python, R, SQL",
    ],
  },
  {
    institution: "Universidad de los Andes",
    degree: "Master’s in Artificial Intelligence (Full Scholarship)",
    period: "2026 – 2028",
    coursework: [],
  },
];

export const awards = [
  {
    title: "Finalist – Red Bull Basement Competition",
    impact: "Recognized for high-impact innovation and product execution.",
    featured: true,
  },
  {
    title: "Harvard Business School – Aspire Leaders Program (Scholarship)",
    impact: "Selected for leadership and global growth potential.",
    featured: true,
  },
  {
    title: "Winner – Uniandes Forward Hackathon (Carbon Capture Project)",
    impact: "Delivered a winning sustainability-focused solution.",
    featured: true,
  },
  {
    title: "Finalist – Agent X Hackathon (SoftServe)",
    impact: "Built rapid prototype under technical and time constraints.",
    featured: false,
  },
  {
    title: "Winner – Electronic Arts GameJam (Best Gameplay Experience)",
    impact: "Awarded for product quality and gameplay design.",
    featured: false,
  },
  {
    title: "Colfuturo Talent Program – Selected Participant",
    impact: "Selected for academic and professional excellence.",
    featured: false,
  },
  {
    title: "Academic Excellence Award",
    impact: "Acknowledged for consistently strong academic performance.",
    featured: false,
  },
];

export const skills = {
  "Programming & Data": ["Python", "SQL", "R", "Stata", "Machine Learning"],
  "Computer Science": ["Data Structures", "Algorithms", "Numerical Methods"],
  Tools: ["GitHub", "LaTeX"],
  Languages: ["Spanish (Native)", "English (B2)", "Mandarin (B1)"],
};

export const work = [
  {
    title: "Carbon Capture Hackathon Project",
    problem: "Teams needed a practical sustainability concept with measurable impact.",
    action: "Led solution framing, data-backed validation, and prototype direction.",
    result: "Won Uniandes Forward Hackathon.",
  },
  {
    title: "Systems Validation in QA",
    problem: "Critical workflows required reliable validation before release.",
    action: "Executed functional/regression tests and SQL-backed data checks.",
    result: "Improved release confidence and defect traceability.",
  },
  {
    title: "EA GameJam – Best Gameplay Experience",
    problem: "Deliver polished gameplay in a constrained hackathon timeline.",
    action: "Contributed to implementation quality and iterative testing loops.",
    result: "Won Best Gameplay Experience.",
  },
];
