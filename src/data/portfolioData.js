export const personalInfo = {
  name: "Kajol T A",
  role: "Computer Science and Engineering Student",
  headline: "Aspiring Software Engineer & Full-Stack Developer",
  tagline: "Building ideas into reliable digital solutions.",
  description:
    "Computer Science Engineering student with a strong foundation in software development, web technologies, databases, and problem solving.",
  email: "kajolta07@gmail.com",
  phone: "7338857472",
  location: "Tamil Nadu, India",
  college: "Bannari Amman Institute of Technology",
  degree: "B.E. Computer Science and Engineering",
  graduationYears: "2023 – 2027",
  cgpa: "7.3",
  socials: {
    github: "https://github.com/KAJOL-07",
    githubUsername: "github.com/KAJOL-07",
    linkedin: "https://linkedin.com/in/kajol7",
    linkedinUsername: "linkedin.com/in/kajol7",
    emailMailto: "mailto:kajolta07@gmail.com",
    phoneTel: "tel:+917338857472",
  },
  bio: "Computer Science and Engineering student with a strong foundation in Object-Oriented Programming, web application development, SQL database concepts, and software development practices. Hands-on experience developing full-stack applications with React.js, Node.js, Express.js, SQL, MongoDB, Java, and Python. Proven capability navigating requirement analysis, system design, iterative development, and systematic testing to deliver robust software solutions.",
  focusAreas: [
    "Full Stack Development",
    "Problem Solving",
    "Data Structures & Algorithms",
    "Database Systems",
    "AI-driven Applications",
  ],
  metrics: [
    { label: "Degree Program", value: "B.E. CSE" },
    { label: "Current CGPA", value: "7.3 / 10" },
    { label: "Key Projects", value: "5 Completed" },
    { label: "Internship", value: "Flutter Dev" },
  ],
};

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code2",
    description: "Core languages for algorithmic problem solving and system logic",
    skills: ["JavaScript", "Java", "Python", "C", "Dart", "SQL"],
  },
  {
    category: "Web Development",
    icon: "Globe",
    description: "Client and server frameworks with RESTful APIs and clean architecture",
    skills: ["React.js", "Node.js", "Express.js", "HTML", "CSS", "REST APIs", "MVC Architecture"],
  },
  {
    category: "Databases",
    icon: "Database",
    description: "Relational querying, schema modeling, and NoSQL storage",
    skills: ["MySQL", "MongoDB", "SQL Querying", "Database Concepts"],
  },
  {
    category: "Core CS",
    icon: "Cpu",
    description: "Fundamental theoretical foundations of software engineering",
    skills: [
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Software Development Lifecycle",
    ],
  },
  {
    category: "Data Analytics",
    icon: "BarChart3",
    description: "Data preparation, validation formulas, and structured reporting",
    skills: ["Excel", "Formulas", "Pivot Tables", "Data Cleaning & Validation", "Report Preparation"],
  },
  {
    category: "Tools & Practices",
    icon: "Wrench",
    description: "Engineering workflows, version control, and system security",
    skills: ["Git", "GitHub", "JWT Authentication", "Problem Solving", "System Design Fundamentals"],
  },
];

export const experienceData = [
  {
    position: "Flutter Developer Intern",
    company: "Gateway Software Solutions",
    location: "Internship",
    date: "March 2026",
    badge: "Internship Experience",
    summary:
      "Developed modular and maintainable cross-platform applications using clean architecture and Object-Oriented Programming principles.",
    responsibilities: [
      "Developed modular and maintainable cross-platform applications using clean architecture and Object-Oriented Programming principles.",
      "Integrated RESTful APIs to improve backend-frontend data consistency.",
      "Performed systematic testing and debugging to improve application stability.",
      "Worked with application workflows and API-driven data exchange.",
      "Maintained structured and reusable code.",
    ],
    technologies: ["Flutter", "Dart", "REST APIs", "Clean Architecture", "OOP", "Debugging", "Git"],
  },
];

export const projectsData = [
  {
    id: "vaximatch",
    featured: true,
    badge: "Latest Project",
    title: "VaxiMatch",
    subtitle: "Child Vaccination Slot Watcher",
    shortDescription:
      "A healthcare-focused agentic AI application designed to help parents monitor vaccination appointment availability, identify suitable slots from available data, and track appointments with parent review before confirmation.",
    technologies: ["React.js", "Node.js", "Python", "Agentic AI", "REST APIs", "SQL"],
    features: [
      "Child vaccination appointment availability watcher",
      "Slot matching based on application available data",
      "Timely parent notification when suitable slots become available",
      "Parental review requirement before appointment confirmation",
      "Vaccination schedule tracking & child immunization timeline",
      "Age-milestone dosage reminders",
      "Parent and healthcare coordinator views",
    ],
    github: "https://github.com/KAJOL-07",
    category: "Healthcare & AI",
    overview:
      "VaxiMatch is a healthcare-focused agentic AI application designed to assist parents in monitoring vaccination appointment availability. By analyzing available appointment data, the system identifies suitable openings for required childhood vaccines, notifies parents as soon as a slot is detected, and empowers parents to review all appointment specifics before confirming a booking.",
    problem:
      "Parents often face difficulties tracking complex childhood immunization timelines across multiple age milestones and miss appointment opportunities when clinics update their available schedules without direct alerts.",
    solution:
      "An intelligent slot-watching system that monitors schedule availability within available application data, maps child immunization milestones to suitable open slots, alerts parents promptly, and enforces parental verification prior to finalizing any appointment.",
    contribution:
      "Architected the slot-watching logic, implemented the parent dashboard in React with step-by-step appointment review, structured relational schemas for vaccination milestones, and established prompt notification triggers.",
    workflow: [
      "Child Profile Setup: Parent registers the child's age milestone and required vaccination checklist.",
      "Availability Monitoring: Application inspects available schedule records for matching clinic openings.",
      "Slot Matching: Matches recommended vaccines against suitable open slots using available schedule data.",
      "Notification & Parent Review: Alerts parent with slot details for thorough review before confirmation.",
      "Schedule Tracking: Confirmed appointments and future vaccination due dates are archived in the child health timeline.",
    ],
  },
  {
    id: "mediflow",
    featured: true,
    badge: "Flagship System",
    title: "MediFlow",
    subtitle: "AI-Driven Hospital Bed Management & Smart Allocation System",
    shortDescription:
      "An AI-driven hospital bed management platform for bed capacity forecasting, ward-wise occupancy monitoring, and intelligent bed allocation with smart inter-ward transfer recommendations.",
    technologies: ["React.js", "Node.js", "Java", "MySQL", "AI/ML"],
    features: [
      "Bed capacity forecasting",
      "Ward occupancy monitoring",
      "Intelligent bed allocation",
      "Smart inter-ward transfer recommendations",
      "Patient requirement analysis",
      "Role-based dashboard",
      "Admin, Doctor, Nurse and Receptionist modules",
    ],
    github: "https://github.com/KAJOL-07",
    category: "Healthcare & AI",
    overview:
      "MediFlow is an AI-driven hospital bed management dashboard designed to address hospital bed capacity forecasting, ward-wise occupancy monitoring, intelligent bed allocation, and smart inter-ward transfers. It equips hospital staff with clear real-time visibility into bed readiness.",
    problem:
      "Modern healthcare facilities face frequent overcrowding, bottlenecked emergency intakes, and lack of real-time visibility into bed sanitation and ward availability, causing critical delays in patient admission.",
    solution:
      "An integrated platform featuring real-time ward occupancy monitoring, AI-assisted bed capacity forecasting, and smart bed allocation algorithms that match patient clinical urgency with appropriate specialized care units.",
    contribution:
      "Engineered the full-stack system architecture, designed MySQL schemas for multi-ward bed status tracking, implemented role-based authorization for doctors, nurses, receptionists, and administrators, and integrated the prediction inference interface.",
    workflow: [
      "Patient Arrival & Triage: Receptionist logs patient medical criteria and clinical urgency level.",
      "Smart Matching: Algorithm assesses ward specializations and identifies the most optimal available bed.",
      "Real-time Allocation: Updates ward-wise occupancy dashboards across Doctor and Nurse terminals.",
      "Transfer & Discharge: Automated forecasting predicts bed turnaround times to streamline incoming admissions.",
    ],
  },
  {
    id: "soaas",
    featured: false,
    badge: "Academic Portal",
    title: "SOAAS",
    subtitle: "Secure Online Academic Approval System",
    shortDescription:
      "A secure web application for managing academic requests including leave, mark-related requests, and other official collegiate approvals.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "MVC Architecture"],
    features: [
      "Role-based access control",
      "Student, Staff and Admin roles",
      "Secure authentication and authorization",
      "Request submission",
      "Verification",
      "Approval/Rejection",
      "Status tracking",
      "Notifications",
    ],
    github: "https://github.com/KAJOL-07",
    category: "Full-Stack Web",
    overview:
      "SOAAS replaces slow, paper-heavy collegiate approval workflows with a centralized, auditable online portal. It enforces distinct authorization levels for students, faculty advisors, and departmental administrators.",
    problem:
      "Manual academic approvals for leaves, on-duty permissions, and mark rectifications suffer from physical file delays, lost documents, and a lack of real-time transparency for students.",
    solution:
      "A secure web application adopting MVC architecture with JWT authentication, encrypted credentials, and automated state-driven approval pipelines with instantaneous status notifications.",
    contribution:
      "Designed the RESTful API endpoints in Express.js, structured MongoDB document models with schema validations, implemented JWT-based RBAC middleware, and constructed the responsive React frontend.",
    workflow: [
      "Submission: Student creates an academic request attaching pertinent institutional documentation.",
      "Faculty Review: Staff members review requests assigned to their mentee cohort with approve/reject options.",
      "Administrative Confirmation: Final escalation to Head of Department or Admin for verified compliance.",
      "Audit Trail & Alerts: Real-time status tracker updates with immutable timestamped action logs.",
    ],
  },
  {
    id: "myroomiee",
    featured: false,
    badge: "Matching Platform",
    title: "MyRoomiee",
    subtitle: "Smart Roommate Matching Platform",
    shortDescription:
      "A roommate-matching platform that recommends compatible roommates based on lifestyle preferences, budget, location, and personal habits.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    features: [
      "Weighted compatibility scoring",
      "Preference-based search",
      "Roommate recommendations",
      "Roommate requests",
      "Secure communication",
      "User safety management",
    ],
    github: "https://github.com/KAJOL-07",
    category: "Full-Stack Web",
    overview:
      "MyRoomiee is a student and young professional roommate-matching platform that eliminates roommate friction by calculating compatibility across budget ranges, sleep schedules, cleanliness habits, and location preferences.",
    problem:
      "Finding compatible living partners is often unorganized and stressful, leading to lifestyle conflicts, safety risks, and mismatched budgetary expectations.",
    solution:
      "A platform powered by a weighted compatibility algorithm that calculates matching percentages across lifestyle dimensions and facilitates verified connection requests in a safe environment.",
    contribution:
      "Developed the compatibility scoring algorithm, built user profile state management, implemented preference filters, and created secure connection request handling.",
    workflow: [
      "Profile Setup: User completes a lifestyle questionnaire specifying budget, cleanliness, sleep cycles, and locations.",
      "Score Computation: Weighted matching algorithm calculates compatibility indices across candidate profiles.",
      "Discovery & Request: User browses top-matched roommates and dispatches verified connection requests.",
      "Mutual Approval: Once accepted, matched users unlock direct communication channels.",
    ],
  },
  {
    id: "curacare",
    featured: false,
    badge: "Computer Vision",
    title: "CuraCare+",
    subtitle: "Diabetic Wound Healing Duration Prediction System",
    shortDescription:
      "A deep learning-based system that predicts wound healing duration using wound images to assist medical evaluation.",
    technologies: ["Python", "Deep Learning", "CNN", "TensorFlow/Keras", "OpenCV"],
    features: [
      "Image upload",
      "Image preprocessing",
      "CNN-based feature extraction",
      "Healing-duration prediction",
      "Result visualization",
      "Patient history tracking",
    ],
    github: "https://github.com/KAJOL-07",
    category: "Deep Learning & CV",
    overview:
      "CuraCare+ is a computer vision healthcare solution that assists medical professionals in evaluating diabetic foot ulcers. By analyzing tissue patterns and wound margins from images, it forecasts estimated healing timelines.",
    problem:
      "Diabetic wounds require continuous clinical monitoring. Subjective manual visual assessments can lead to inconsistent recovery timeline estimates and delayed treatment adjustments.",
    solution:
      "A Convolutional Neural Network (CNN) pipeline trained to extract granular spatial features from preprocessed ulcer imagery to generate quantifiable healing duration forecasts.",
    contribution:
      "Implemented image preprocessing and normalization routines with OpenCV, integrated the CNN feature extraction pipeline, and created visual result representations with patient history records.",
    workflow: [
      "Ulcer Image Ingestion: Practitioner uploads clinical wound photographs through the interface.",
      "Preprocessing: Image normalization, noise filtration, and region-of-interest cropping via OpenCV.",
      "CNN Feature Extraction: Deep convolutional layers isolate tissue condition and wound boundary metrics.",
      "Prognosis Output: Predicted healing duration displayed alongside historical recovery comparison curves.",
    ],
  },
];

export const certificationsData = [
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "February 2026",
    badge: "Verified Credential",
    description: "Hands-on foundation in data gathering, data cleansing, statistical summary, and reporting actionable insights.",
    skills: ["Data Cleaning", "Data Analysis", "Reporting", "Statistical Insights"],
  },
  {
    title: "Introduction to JavaScript Essentials",
    issuer: "Cisco Networking Academy",
    date: "Verified",
    badge: "Verified Credential",
    description: "Core JavaScript syntax, asynchronous logic, DOM manipulation, functional paradigms, and modern ES6+ standards.",
    skills: ["JavaScript ES6+", "DOM Manipulation", "Async Programming", "Logic Building"],
  },
  {
    title: "Introduction to Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "Verified",
    badge: "Verified Credential",
    description: "Fundamental networking concepts, OSI and TCP/IP protocol layers, subnetting, and network security foundations.",
    skills: ["Network Protocols", "IP Addressing", "OSI Model", "Network Architecture"],
  },
];

export const achievementsData = [
  {
    title: "CODE CLASH 2.0 Hackathon",
    institution: "IIIT Delhi",
    level: "National Level",
    highlight: "National Competitor",
    description: "Collaborated under intense competitive constraints solving algorithmic problems and architecting functional software prototypes evaluated by expert panelists.",
  },
  {
    title: "Frontend Battle",
    institution: "IIIT Bhubaneswar",
    level: "National Level",
    highlight: "UI/UX & Engineering",
    description: "Competed in high-velocity frontend engineering, implementing pixel-accurate responsive layouts, smooth interactions, and performant state handling.",
  },
  {
    title: "24-Hour UI/UX Design Hackathon",
    institution: "Rablo.in",
    level: "Design Sprint",
    highlight: "24-Hour Sprint",
    description: "Rapidly researched user personas, built wireframes, and delivered high-fidelity UI prototypes solving real user friction within a strict 24-hour design sprint.",
  },
];

export const educationData = {
  degree: "B.E. Computer Science and Engineering",
  institution: "Bannari Amman Institute of Technology",
  timeline: "2023 – 2027",
  cgpa: "7.3",
  location: "Sathyamangalam, Tamil Nadu",
  description:
    "Pursuing rigorous undergraduate coursework in core computer science, software engineering methodologies, data structures, and database systems.",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java/C++)",
    "Database Management Systems (SQL)",
    "Operating Systems",
    "Computer Networks",
    "Software Development Lifecycle",
  ],
};
