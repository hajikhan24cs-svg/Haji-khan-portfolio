import { PortfolioData } from '../src/types.js';

export const initialPortfolioData: PortfolioData = {
  profile: {
  "name": "Hunain Sheikh",
  "title": "Aspiring Software Engineer | Backend Developer (Java / Go)",
  "tagline": "Full Stack Developer building REST APIs and scalable, production-ready software.",
  "bio": "Computer Systems Engineering student with hands-on experience building full-stack and backend applications using Java, Spring Boot, and modern JavaScript frameworks. Skilled in designing REST APIs, relational databases, and layered architectures following OOP and MVC principles. Actively expanding expertise in Go, PostgreSQL, Docker, and system design to build scalable, production-ready software.",
  "photoUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
  "resumeUrl": "/Hunain_Sheikh_Resume.pdf",
  "email": "hunainsheikh5656@gmail.com",
  "phone": "+92 316 8255241",
  "location": "Sindh, Pakistan",
  "availabilityStatus": "Open to Software Engineer / Backend Developer internships",
  "socialLinks": [
    {
      "platform": "GitHub",
      "url": "https://github.com/Hunainsheikh12623",
      "icon": "github"
    },
    {
      "platform": "LinkedIn",
      "url": "https://linkedin.com",
      "icon": "linkedin"
    },
    {
      "platform": "Email",
      "url": "mailto:hunainsheikh5656@gmail.com",
      "icon": "mail"
    }
  ],
  "seoDefaults": {
    "title": "Hunain Sheikh | Backend & Full Stack Developer",
    "description": "Portfolio of Hunain Sheikh. Java, Spring Boot, Go, REST APIs and full-stack development.",
    "ogImage": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200"
  }
},
  projects: [
  {
    "id": "proj-1",
    "title": "Full-Stack Portfolio & Admin Panel",
    "slug": "full-stack-portfolio-admin-panel",
    "coverImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
    ],
    "summary": "Production-ready full-stack portfolio with a secure admin dashboard for real-time content management.",
    "description": "### Overview\nProduction-ready full-stack portfolio with a secure admin dashboard for real-time content management.\n\n### Highlights\n- Designed a single-instance JSONB state model on PostgreSQL for fast reads and writes, replacing complex multi-table joins.\n- Implemented token-based admin authentication and full CRUD panels for projects, blog, skills and testimonials.\n- Built a media asset manager with Base64 uploads served from the database.",
    "category": "Full Stack",
    "tags": [
      "React",
      "TypeScript",
      "Express",
      "Neon PostgreSQL"
    ],
    "techStack": [
      "React",
      "TypeScript",
      "Express",
      "Neon PostgreSQL",
      "Tailwind CSS"
    ],
    "role": "Full-Stack Developer",
    "startDate": "",
    "endDate": "",
    "client": "Personal Project",
    "liveUrl": "https://hunainsheikh-portfolio.vercel.app/",
    "repoUrl": "https://github.com/Hunainsheikh12623/full-stack-portfolio---admin-panel",
    "results": "Live, deployed portfolio with a real-time admin dashboard.",
    "status": "published",
    "featured": true,
    "order": 1,
    "createdAt": "2026-01-01T00:00:00Z",
    "updatedAt": "2026-01-01T00:00:00Z"
  },
  {
    "id": "proj-2",
    "title": "School Management System",
    "slug": "school-management-system",
    "coverImage": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1000"
    ],
    "summary": "Modular school management desktop app with a clean layered architecture.",
    "description": "### Overview\nModular school management desktop app with a clean layered architecture.\n\n### Highlights\n- Developed with Java 17, Maven and SQLite following a clean layered architecture for separation of concerns.\n- Built secure authentication, student admission, class and section management, and fee collection modules with full CRUD.\n- Automated database initialization, backup creation and data integrity with SQLite, producing a portable, self-contained desktop application.",
    "category": "Backend / Desktop",
    "tags": [
      "Java 17",
      "Maven",
      "SQLite"
    ],
    "techStack": [
      "Java 17",
      "Maven",
      "SQLite"
    ],
    "role": "Backend Developer",
    "startDate": "",
    "endDate": "",
    "client": "Personal Project",
    "liveUrl": "",
    "repoUrl": "https://github.com/Hunainsheikh12623/school-management-system",
    "results": "Portable, self-contained desktop application with automated backups.",
    "status": "published",
    "featured": true,
    "order": 2,
    "createdAt": "2026-01-01T00:00:00Z",
    "updatedAt": "2026-01-01T00:00:00Z"
  },
  {
    "id": "proj-3",
    "title": "Blogging Application System",
    "slug": "blogging-application-system",
    "coverImage": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
    ],
    "summary": "Full-stack blogging platform built as a Database Management Systems course project.",
    "description": "### Overview\nFull-stack blogging platform built as a Database Management Systems course project.\n\n### Highlights\n- Applied Third Normal Form relational design across 11 normalized tables.\n- Built a Spring Boot REST API with Spring Security and JWT authentication, plus a role-based admin approval workflow.\n- Implemented blog and post management, categorization, comments, a follow system, attachments and feedback collection.",
    "category": "Full Stack",
    "tags": [
      "Angular",
      "Spring Boot",
      "MySQL",
      "Hibernate/JPA"
    ],
    "techStack": [
      "Angular",
      "Spring Boot",
      "MySQL",
      "Hibernate/JPA",
      "JWT"
    ],
    "role": "Full-Stack Developer",
    "startDate": "",
    "endDate": "",
    "client": "Course Project",
    "liveUrl": "",
    "repoUrl": "https://github.com/Hunainsheikh12623/bloggingapp",
    "results": "Fully normalized 11-table schema with JWT-secured REST API.",
    "status": "published",
    "featured": true,
    "order": 3,
    "createdAt": "2026-01-01T00:00:00Z",
    "updatedAt": "2026-01-01T00:00:00Z"
  },
  {
    "id": "proj-4",
    "title": "Restaurant Management System",
    "slug": "restaurant-management-system",
    "coverImage": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000"
    ],
    "summary": "Restaurant platform with real-time communication between customers and staff.",
    "description": "### Overview\nRestaurant platform with real-time communication between customers and staff.\n\n### Highlights\n- Developed a full-stack platform using the MERN stack with Socket.IO for real-time communication between customers and staff.\n- Implemented QR-based table ordering, live order tracking, menu management, billing and analytics through separate customer and admin applications.\n- Designed RESTful APIs with Express.js and MongoDB enabling real-time order processing, payment tracking and restaurant operations management.",
    "category": "Full Stack",
    "tags": [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js"
    ],
    "techStack": [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Socket.IO"
    ],
    "role": "Full-Stack Developer",
    "startDate": "",
    "endDate": "",
    "client": "Personal Project",
    "liveUrl": "",
    "repoUrl": "https://github.com/Hunainsheikh12623/Restaurant-Managment-System",
    "results": "Real-time order flow from QR table ordering to billing.",
    "status": "published",
    "featured": true,
    "order": 4,
    "createdAt": "2026-01-01T00:00:00Z",
    "updatedAt": "2026-01-01T00:00:00Z"
  },
  {
    "id": "proj-5",
    "title": "EvidenceApp: Digital Evidence Management System",
    "slug": "evidenceapp-digital-evidence-management-system",
    "coverImage": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000"
    ],
    "summary": "RESTful system digitizing criminal case evidence and chain-of-custody tracking.",
    "description": "### Overview\nRESTful system digitizing criminal case evidence and chain-of-custody tracking.\n\n### Highlights\n- Developed a RESTful evidence management system using Spring Boot, Spring Data JPA and MySQL.\n- Designed CRUD APIs for cases, evidence, custody history, court submissions and officer assignments while enforcing referential integrity and audit trails.\n- Implemented layered architecture, secure authentication with BCrypt, and role-based access.",
    "category": "Backend",
    "tags": [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "MySQL"
    ],
    "techStack": [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "MySQL",
      "BCrypt"
    ],
    "role": "Backend Developer",
    "startDate": "",
    "endDate": "",
    "client": "Personal Project",
    "liveUrl": "",
    "repoUrl": "https://github.com/Hunainsheikh12623/evidenceapp",
    "results": "Scalable, maintainable backend with audit trails and role-based access.",
    "status": "published",
    "featured": true,
    "order": 5,
    "createdAt": "2026-01-01T00:00:00Z",
    "updatedAt": "2026-01-01T00:00:00Z"
  },
  {
    "id": "proj-6",
    "title": "MehranOS: Operating System Simulator",
    "slug": "mehranos-operating-system-simulator",
    "coverImage": "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80&w=1000"
    ],
    "summary": "Monolithic operating system simulator with a Qt6 GUI, built from scratch.",
    "description": "### Overview\nMonolithic operating system simulator with a Qt6 GUI, built from scratch.\n\n### Highlights\n- Engineered a monolithic OS simulator in C++17 with a professional Qt6 GUI, implementing core OS subsystems from scratch.\n- Built Round Robin process scheduling, first-fit memory management, a hierarchical file system, IPC, device drivers and access control mechanisms.\n- Applied object-oriented design to modular kernel components with performance monitoring, logging and an interactive multi-tab desktop interface.",
    "category": "Systems",
    "tags": [
      "C++17",
      "Qt6",
      "CMake"
    ],
    "techStack": [
      "C++17",
      "Qt6",
      "CMake"
    ],
    "role": "Developer",
    "startDate": "",
    "endDate": "",
    "client": "Personal Project",
    "liveUrl": "",
    "repoUrl": "https://github.com/Hunainsheikh12623/OS_Simulator",
    "results": "Core OS subsystems implemented from scratch with a desktop GUI.",
    "status": "published",
    "featured": false,
    "order": 6,
    "createdAt": "2026-01-01T00:00:00Z",
    "updatedAt": "2026-01-01T00:00:00Z"
  },
  {
    "id": "proj-7",
    "title": "Newton's Notebook",
    "slug": "newton-s-notebook",
    "coverImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
    ],
    "summary": "Browser-based physics calculator for Class 9-10 students covering about 54 formulas.",
    "description": "### Overview\nBrowser-based physics calculator for Class 9-10 students covering about 54 formulas.\n\n### Highlights\n- Co-developed a calculator covering kinematics, dynamics, electricity, waves and modern physics.\n- Compiled the C++ physics engine to WebAssembly for instant client-side computation.\n- Collaborated within a team to design the chapter-organized calculator UI and the About/Team pages.",
    "category": "Web / WebAssembly",
    "tags": [
      "C++",
      "WebAssembly",
      "Emscripten",
      "JavaScript"
    ],
    "techStack": [
      "C++",
      "WebAssembly",
      "Emscripten",
      "JavaScript"
    ],
    "role": "Developer",
    "startDate": "",
    "endDate": "",
    "client": "Group Project",
    "liveUrl": "",
    "repoUrl": "https://github.com/Hunainsheikh12623/NEWTON-S-NOTEBOOK",
    "results": "Instant client-side computation of about 54 physics formulas.",
    "status": "published",
    "featured": false,
    "order": 7,
    "createdAt": "2026-01-01T00:00:00Z",
    "updatedAt": "2026-01-01T00:00:00Z"
  },
  {
    "id": "proj-8",
    "title": "Encryption and Decryption of String",
    "slug": "encryption-and-decryption-of-string",
    "coverImage": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
    ],
    "summary": "Character-to-binary substitution cipher with console and browser interfaces.",
    "description": "### Overview\nCharacter-to-binary substitution cipher with console and browser interfaces.\n\n### Highlights\n- Built a character-to-binary substitution cipher tool with both console (C++) and browser-based interfaces.\n- Compiled the cipher logic to WebAssembly via Emscripten, enabling fully client-side encoding and decoding with no server calls.",
    "category": "Web / WebAssembly",
    "tags": [
      "C++",
      "WebAssembly",
      "Emscripten"
    ],
    "techStack": [
      "C++",
      "WebAssembly",
      "Emscripten"
    ],
    "role": "Developer",
    "startDate": "",
    "endDate": "",
    "client": "Personal Project",
    "liveUrl": "",
    "repoUrl": "https://github.com/Hunainsheikh12623/Encryption-and-Decryption-of-String",
    "results": "Fully client-side encoding and decoding with no server calls.",
    "status": "published",
    "featured": false,
    "order": 8,
    "createdAt": "2026-01-01T00:00:00Z",
    "updatedAt": "2026-01-01T00:00:00Z"
  },
  {
    "id": "proj-9",
    "title": "Rimor Mars Exploration Vehicle",
    "slug": "rimor-mars-exploration-vehicle",
    "coverImage": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000"
    ],
    "summary": "Mars exploration rover prototype with live video and environmental monitoring.",
    "description": "### Overview\nMars exploration rover prototype with live video and environmental monitoring.\n\n### Highlights\n- Collaborated on a rover prototype built with ESP32-CAM, providing a live video feed and environmental monitoring via multiple sensors.\n- Contributed to wireless navigation control and modular sensor integration for Mars-like exploration scenarios.",
    "category": "Embedded / IoT",
    "tags": [
      "ESP32-CAM",
      "Embedded Systems"
    ],
    "techStack": [
      "ESP32-CAM",
      "Embedded Systems"
    ],
    "role": "Developer",
    "startDate": "",
    "endDate": "",
    "client": "Group Project",
    "liveUrl": "",
    "repoUrl": "",
    "results": "",
    "status": "published",
    "featured": false,
    "order": 9,
    "createdAt": "2026-01-01T00:00:00Z",
    "updatedAt": "2026-01-01T00:00:00Z"
  },
  {
    "id": "proj-10",
    "title": "VOPA MK I (Voice-Operated Prosthetic Arm)",
    "slug": "vopa-mk-i-voice-operated-prosthetic-arm",
    "coverImage": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1000"
    ],
    "summary": "Voice-operated prosthetic arm prototype combining speech recognition with servo control.",
    "description": "### Overview\nVoice-operated prosthetic arm prototype combining speech recognition with servo control.\n\n### Highlights\n- Collaborated on a functional voice-operated prosthetic arm prototype combining speech recognition with servo motor control.\n- Helped design a low-cost structure using cardboard and ice cream sticks to demonstrate accessibility and affordability in prosthetic development.",
    "category": "Embedded / IoT",
    "tags": [
      "Arduino",
      "Speech Recognition"
    ],
    "techStack": [
      "Arduino",
      "Speech Recognition"
    ],
    "role": "Developer",
    "startDate": "",
    "endDate": "",
    "client": "Group Project",
    "liveUrl": "",
    "repoUrl": "",
    "results": "",
    "status": "published",
    "featured": false,
    "order": 10,
    "createdAt": "2026-01-01T00:00:00Z",
    "updatedAt": "2026-01-01T00:00:00Z"
  },
  {
    "id": "proj-11",
    "title": "Bio-Mimetic Algorithm Evolution",
    "slug": "bio-mimetic-algorithm-evolution",
    "coverImage": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
    "gallery": [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000"
    ],
    "summary": "Research proposal for an EvoHash and Neural Collision Resolution System.",
    "description": "### Overview\nResearch proposal for an EvoHash and Neural Collision Resolution System.\n\n### Highlights\n- Collaborated on a research proposal for an EvoHash and Neural Collision Resolution System for adaptive, self-modifying data structure evolution.\n- Explored self-modifying algorithms inspired by biological processes such as neural networks and genetic patterns.",
    "category": "Research",
    "tags": [
      "Data Structures & Algorithms",
      "Research"
    ],
    "techStack": [
      "Data Structures & Algorithms",
      "Research"
    ],
    "role": "Developer",
    "startDate": "",
    "endDate": "",
    "client": "Research Project",
    "liveUrl": "",
    "repoUrl": "",
    "results": "",
    "status": "published",
    "featured": false,
    "order": 11,
    "createdAt": "2026-01-01T00:00:00Z",
    "updatedAt": "2026-01-01T00:00:00Z"
  }
],
  blogPosts: [
    {
      id: 'post-1',
      title: 'Deep Dive into Spring Boot REST APIs for Beginners',
      slug: 'deep-dive-into-spring-boot-rest-apis',
      coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
      excerpt: 'My journey building a Portfolio Management system and structuring clean CRUD API endpoints in Java.',
      body: `Building backend systems requires structured APIs. In this post, I write about constructing REST endpoints with Spring Boot, managing H2 in-memory databases, and connecting them to frontends.

### 1. REST Endpoint Structure
Using Spring Web, it's straightforward to define controllers that parse JSON requests. Ensuring we return correct HTTP status codes (201 for Created, 200 for OK, 404 for Not Found) is crucial for standard API clients.

### 2. In-Memory Persistence
Using H2 makes rapid local testing painless. Combined with Spring Data JPA, schema creation and database queries require minimal configuration, allowing you to focus on logic first.`,
      tags: ['Spring Boot', 'Java', 'REST APIs', 'Backend'],
      status: 'published',
      publishedAt: '2026-06-15',
      readTime: '5 min read',
      createdAt: '2026-06-15T00:00:00Z',
      updatedAt: '2026-06-15T00:00:00Z'
    },
    {
      id: 'post-2',
      title: 'Transitioning from Java to Go: A Student\'s Perspective',
      slug: 'transitioning-from-java-to-go',
      coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
      excerpt: 'Exploring Go concurrency, simple syntax, and how it compares to standard Java OOP patterns.',
      body: `I started my backend journey in Java, but recently I've been exploring Go (Golang). Here are my initial findings regarding goroutines, pointers, structs, and why Go makes building microservices a breeze.

### Concurrency and Speed
While Java has strong thread support and enterprise backing, Go was designed from the ground up for concurrent operations with lightweight Goroutines.

### Simplicity of Go
Go does not have class-based inheritance, which simplifies object mapping. Using structs and composition allows you to build modular code without deep hierarchy structures.`,
      tags: ['Go', 'Golang', 'Java', 'Learning'],
      status: 'published',
      publishedAt: '2026-07-20',
      readTime: '6 min read',
      createdAt: '2026-07-20T00:00:00Z',
      updatedAt: '2026-07-20T00:00:00Z'
    }
  ],
  testimonials: [],
  skills: [
  {
    "id": "sk-1",
    "name": "Java",
    "category": "Backend",
    "proficiency": 4,
    "icon": "code",
    "order": 1
  },
  {
    "id": "sk-2",
    "name": "Spring Boot",
    "category": "Backend",
    "proficiency": 4,
    "icon": "code",
    "order": 2
  },
  {
    "id": "sk-3",
    "name": "REST APIs",
    "category": "Backend",
    "proficiency": 4,
    "icon": "code",
    "order": 3
  },
  {
    "id": "sk-4",
    "name": "Go (Golang)",
    "category": "Backend",
    "proficiency": 2,
    "icon": "code",
    "order": 4
  },
  {
    "id": "sk-5",
    "name": "C++",
    "category": "Backend",
    "proficiency": 3,
    "icon": "code",
    "order": 5
  },
  {
    "id": "sk-6",
    "name": "JDBC & Maven",
    "category": "Backend",
    "proficiency": 3,
    "icon": "code",
    "order": 6
  },
  {
    "id": "sk-7",
    "name": "JavaScript",
    "category": "Frontend",
    "proficiency": 4,
    "icon": "code",
    "order": 7
  },
  {
    "id": "sk-8",
    "name": "React",
    "category": "Frontend",
    "proficiency": 4,
    "icon": "code",
    "order": 8
  },
  {
    "id": "sk-9",
    "name": "Next.js",
    "category": "Frontend",
    "proficiency": 3,
    "icon": "code",
    "order": 9
  },
  {
    "id": "sk-10",
    "name": "Vue.js",
    "category": "Frontend",
    "proficiency": 3,
    "icon": "code",
    "order": 10
  },
  {
    "id": "sk-11",
    "name": "Tailwind CSS",
    "category": "Frontend",
    "proficiency": 4,
    "icon": "code",
    "order": 11
  },
  {
    "id": "sk-12",
    "name": "HTML & CSS",
    "category": "Frontend",
    "proficiency": 4,
    "icon": "code",
    "order": 12
  },
  {
    "id": "sk-13",
    "name": "Bootstrap",
    "category": "Frontend",
    "proficiency": 3,
    "icon": "code",
    "order": 13
  },
  {
    "id": "sk-14",
    "name": "PostgreSQL",
    "category": "Databases",
    "proficiency": 3,
    "icon": "code",
    "order": 14
  },
  {
    "id": "sk-15",
    "name": "MySQL",
    "category": "Databases",
    "proficiency": 4,
    "icon": "code",
    "order": 15
  },
  {
    "id": "sk-16",
    "name": "SQLite",
    "category": "Databases",
    "proficiency": 3,
    "icon": "code",
    "order": 16
  },
  {
    "id": "sk-17",
    "name": "Neon PostgreSQL",
    "category": "Databases",
    "proficiency": 3,
    "icon": "code",
    "order": 17
  },
  {
    "id": "sk-18",
    "name": "Git & GitHub",
    "category": "Cloud & DevOps",
    "proficiency": 4,
    "icon": "code",
    "order": 18
  },
  {
    "id": "sk-19",
    "name": "Docker (Beginner)",
    "category": "Cloud & DevOps",
    "proficiency": 2,
    "icon": "code",
    "order": 19
  },
  {
    "id": "sk-20",
    "name": "Linux (Ubuntu)",
    "category": "Cloud & DevOps",
    "proficiency": 3,
    "icon": "code",
    "order": 20
  },
  {
    "id": "sk-21",
    "name": "Postman",
    "category": "Cloud & DevOps",
    "proficiency": 4,
    "icon": "code",
    "order": 21
  },
  {
    "id": "sk-22",
    "name": "OOP",
    "category": "Architecture",
    "proficiency": 4,
    "icon": "code",
    "order": 22
  },
  {
    "id": "sk-23",
    "name": "MVC & Layered Architecture",
    "category": "Architecture",
    "proficiency": 4,
    "icon": "code",
    "order": 23
  },
  {
    "id": "sk-24",
    "name": "Data Structures & Algorithms",
    "category": "Architecture",
    "proficiency": 4,
    "icon": "code",
    "order": 24
  },
  {
    "id": "sk-25",
    "name": "System Design (Learning)",
    "category": "Architecture",
    "proficiency": 2,
    "icon": "code",
    "order": 25
  }
],
  experience: [
  {
    "id": "exp-1",
    "company": "Voidium",
    "role": "Co-Founder & Backend Developer",
    "startDate": "2025-01",
    "endDate": "Present",
    "description": "Co-founded a student-led startup offering freelance development services and building SaaS products (open-source and closed-source). Contributed to backend development across App Development, AI integration, and IoT-based application projects. Collaborated with a 6-member team to deliver scalable solutions for clients and internal product ideas.",
    "location": "Remote",
    "order": 1
  }
],
  education: [
  {
    "id": "edu-1",
    "institution": "Mehran University of Engineering & Technology (MUET), Jamshoro",
    "degree": "Bachelor of Engineering (BE)",
    "field": "Computer Systems Engineering",
    "startDate": "",
    "endDate": "Present",
    "order": 1
  }
],
  messages: [],
  mediaAssets: []
};
