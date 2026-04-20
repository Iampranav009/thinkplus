const COURSES = [
  {
    id: "webdev-devops",
    name: "Web Dev & DevOps",
    tagline: "From frontend to deployment pipelines",
    icon: "🌐",
    originalPrice: 1500,
    salePrice: 149,
    razorpayUrl: "https://rzp.io/rzp/oXmmuqm",
    driveLink: "https://drive.google.com/drive/folders/1bq4d_iP9pCkmH8W0DG-2lKUlmShcGcFY?usp=sharing",
    highlights: [
      "HTML, CSS, JavaScript fundamentals",
      "React & Node.js",
      "Docker, CI/CD, Nginx",
      "Cloud deployment on AWS/GCP"
    ],
    description: "A comprehensive course covering modern web development from ground zero to production-grade DevOps workflows. Learn to build, containerize, and deploy full-stack applications.",
    requirements: "Basic computer knowledge. No prior coding experience needed.",
    duration: "40+ hours of content",
    level: "Beginner to Intermediate"
  },
  {
    id: "web3",
    name: "Web 3",
    tagline: "Blockchain, DeFi & Smart Contracts",
    icon: "⛓️",
    originalPrice: 1500,
    salePrice: 149,
    razorpayUrl: "https://rzp.io/rzp/MN3qBT22",
    driveLink: "https://drive.google.com/drive/folders/1flF7pgYJBse8PW2es3gYvZUn0lgYTMWR?usp=drive_link",
    highlights: [
      "Blockchain fundamentals",
      "Solidity smart contracts",
      "DeFi protocols & NFTs",
      "Ethereum & Polygon ecosystem"
    ],
    description: "Dive deep into decentralized technologies. Learn to write and deploy smart contracts, build dApps, and understand the Web3 ecosystem end-to-end.",
    requirements: "Basic JavaScript knowledge recommended.",
    duration: "30+ hours of content",
    level: "Intermediate"
  },
  {
    id: "ai-ml",
    name: "AI / ML",
    tagline: "Machine Learning & Deep Learning",
    icon: "🤖",
    originalPrice: 1500,
    salePrice: 149,
    razorpayUrl: "https://rzp.io/rzp/Lo182Pmc",
    driveLink: "https://drive.google.com/drive/folders/1biyY-RN2SRK5yhyJHyD1OaGTLgdjoK0j?usp=drive_link",
    highlights: [
      "Python for Data Science",
      "Supervised & Unsupervised Learning",
      "Neural Networks & Deep Learning",
      "Model deployment with Flask/FastAPI"
    ],
    description: "Learn the mathematics, tools, and techniques behind modern AI and machine learning. Build real-world models using scikit-learn, TensorFlow, and PyTorch.",
    requirements: "Basic Python and math (linear algebra, statistics) recommended.",
    duration: "50+ hours of content",
    level: "Intermediate to Advanced"
  },
  {
    id: "cybersecurity",
    name: "Cyber Security",
    tagline: "Ethical hacking & secure systems",
    icon: "🔐",
    originalPrice: 1500,
    salePrice: 149,
    razorpayUrl: "https://rzp.io/rzp/6KvpvFpA",
    driveLink: "https://drive.google.com/drive/folders/17wThM-fSyzmBAKc20R2Cd_M2WIROMH7c?usp=drive_link",
    highlights: [
      "Networking fundamentals",
      "Penetration testing basics",
      "CTF challenges & tools",
      "Secure coding practices"
    ],
    description: "Understand how attackers think and how to defend against them. Covers networking, ethical hacking, vulnerability assessment, and cybersecurity best practices.",
    requirements: "Basic computer and networking knowledge.",
    duration: "35+ hours of content",
    level: "Beginner to Intermediate"
  },
  {
    id: "ds-cp",
    name: "DS / Competitive Programming",
    tagline: "Algorithms, data structures & problem solving",
    icon: "🧠",
    originalPrice: 1500,
    salePrice: 149,
    razorpayUrl: "https://rzp.io/rzp/wzMYtqHm",
    driveLink: "https://drive.google.com/drive/folders/12R4tM7PciRGB43rDaZtOufdIWRF713sS?usp=drive_link",
    highlights: [
      "Arrays, Trees, Graphs, DP",
      "Sorting & searching algorithms",
      "LeetCode/Codeforces patterns",
      "Interview preparation roadmap"
    ],
    description: "Master data structures and algorithms through theory and intensive practice. Perfect for cracking FAANG interviews and competitive programming contests.",
    requirements: "Knowledge of any one programming language (C++/Java/Python).",
    duration: "45+ hours of content",
    level: "Beginner to Advanced"
  },
  {
    id: "flutter",
    name: "Flutter",
    tagline: "Cross-platform mobile development",
    icon: "📱",
    originalPrice: 1500,
    salePrice: 149,
    razorpayUrl: "https://rzp.io/rzp/zO9TERcj",
    driveLink: "https://drive.google.com/drive/folders/1PUT6T3zuxfSeFTiSkWpVcQ7gKj-qrD_g?usp=drive_link",
    highlights: [
      "Dart language fundamentals",
      "Flutter widgets & layouts",
      "State management (Provider/Bloc)",
      "Publishing to Play Store & App Store"
    ],
    description: "Build beautiful, natively compiled applications for iOS, Android, and web from a single codebase using Flutter and Dart.",
    requirements: "Basic programming knowledge. No mobile development experience needed.",
    duration: "35+ hours of content",
    level: "Beginner to Intermediate"
  },
  {
    id: "game-dev",
    name: "Game Development",
    tagline: "Build games from scratch",
    icon: "🎮",
    originalPrice: 1500,
    salePrice: 149,
    razorpayUrl: "https://rzp.io/rzp/JemM1c2g",
    driveLink: "https://drive.google.com/drive/folders/1QTqpSMU8czJEQtQb3ocWrP3cF3RzzDFc?usp=sharing",
    highlights: [
      "Unity / Godot fundamentals",
      "2D & 3D game mechanics",
      "Physics, animations & UI",
      "Publishing your first game"
    ],
    description: "Go from zero to publishing your first game. Learn game design principles, physics engines, animations, and how to create engaging player experiences.",
    requirements: "No prior experience needed.",
    duration: "40+ hours of content",
    level: "Beginner"
  },
  {
    id: "ui-ux",
    name: "UI / UX Design",
    tagline: "Design that delights users",
    icon: "🎨",
    originalPrice: 1500,
    salePrice: 149,
    razorpayUrl: "https://rzp.io/rzp/W8m9SjlR",
    driveLink: "https://drive.google.com/drive/folders/1jkXRW3_JGQ8dR3cPSmP2z8eJa93RhTv2?usp=drive_link",
    highlights: [
      "Design thinking & UX research",
      "Figma (components, auto-layout, prototypes)",
      "Typography, color, and grid systems",
      "Portfolio-ready case studies"
    ],
    description: "Learn user-centered design from research to high-fidelity prototypes. Master Figma and build a professional design portfolio that gets you hired.",
    requirements: "No design experience needed. A laptop with Figma (free) installed.",
    duration: "30+ hours of content",
    level: "Beginner to Intermediate"
  },
  {
    id: "video-editing",
    name: "Video Editing",
    tagline: "Edit like a professional creator",
    icon: "🎬",
    originalPrice: 1500,
    salePrice: 149,
    razorpayUrl: "https://rzp.io/rzp/vBvWDv1P",
    driveLink: "https://drive.google.com/drive/folders/1Izeh-uXQ_Fv5LRAB0D3wFeSQ5Nl5_gJr?usp=drive_link",
    highlights: [
      "Premiere Pro / DaVinci Resolve basics",
      "Cuts, transitions, and color grading",
      "Motion graphics & text animations",
      "YouTube & Reels optimization"
    ],
    description: "Turn raw footage into polished, professional videos. Learn the full editing workflow used by YouTube creators, filmmakers, and social media editors.",
    requirements: "A computer capable of running Premiere Pro or DaVinci Resolve (free version).",
    duration: "25+ hours of content",
    level: "Beginner"
  },
  {
    id: "web-development",
    name: "Web Development + Three.js",
    tagline: "HTML, CSS, JS & 3D web experiences",
    icon: "💻",
    originalPrice: 1500,
    salePrice: 149,
    razorpayUrl: "https://rzp.io/rzp/iooBwdHT",
    driveLink: "https://drive.google.com/drive/folders/1Ee0UTlftpuXuCySxe7EdDK3wcSEERdfU?usp=drive_link",
    highlights: [
      "HTML5 & CSS3 mastery",
      "JavaScript (ES6+)",
      "Responsive design & Flexbox/Grid",
      "Three.js — 3D graphics in the browser",
      "Animations, shaders & interactive 3D scenes"
    ],
    description: "A complete web development course covering everything from HTML fundamentals to advanced 3D web experiences using Three.js. Learn to build responsive websites and bring them to life with stunning 3D animations and interactive scenes — a rare and highly sought-after skill.",
    requirements: "No experience needed. Just a computer and a browser.",
    duration: "35+ hours of content",
    level: "Beginner to Intermediate"
  }
];
