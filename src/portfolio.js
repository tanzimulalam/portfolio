/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  // Calm landing loads the main site directly; set true only if using the minimal /splash page
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Tanzimul Alam Fahim — Portfolio",
  description:
    "Cybersecurity analyst and researcher. Interests: cyber threat intelligence, machine learning for security, robotics safety, and digital forensics.",
  og: {
    title: "Tanzimul Alam Fahim — Cybersecurity & Research",
    type: "website",
    url: "https://www.tanzimulalam.com/",
  },
};

//Home Page
const greeting = {
  title: "Tanzimul Alam Fahim",
  logo_name: "Tanzimul Alam Fahim",
  nickname: "tanzimulalam",
  subTitle:
    "Cybersecurity analyst and researcher focused on threat intelligence, ML for security, and responsible technology.",
  resumeLink: "",
  portfolio_repository: "https://github.com/tanzimulalam/portfolio",
  githubProfile: "https://github.com/tanzimulalam",
};

// Academic-style home (hero, interests, CV). Headshot + bio for professional landing.
const academicProfile = {
  headshotUrl: "https://i.imgur.com/Mr40tL0.jpeg",
  role: "Independent Cyber Threat Intelligence Researcher",
  tagline: "Researcher · Mentor · Cybersecurity Analyst",
  bio:
    "Hi, I’m Tanzimul (Fahim). I work in cybersecurity with a strong interest in how intelligence, machine learning, and careful engineering make systems safer. I’ve contributed to open-source security (including coordinated disclosure in Joomla Core), built research-style tooling around synthetic CTI and knowledge graphs, and care about robotics safety and digital forensics as domains where assurance really matters. I enjoy shipping practical defenses, learning in public, and collaborating with teams that take both impact and ethics seriously.",
  researchInterests: [
    "Cyber Threat Intelligence",
    "Machine Learning for Cybersecurity",
    "Robotics Safety",
    "Digital Forensics",
  ],
  resumeUrl:
    "https://drive.google.com/file/d/1yIu1uHcYQCdNFv5NA22ht2P00r4GVieX/view?usp=sharing",
};

// Home “Latest updates” feed (month + year only); expandable on the landing page.
const liveFeedUpdates = [
  {
    date: "Mar 2026",
    text:
      "Reported a Joomla Core security issue disclosed and fixed as CVE-2026-21631 (XSS vector in com_associations comparison view).",
  },
  {
    date: "Mar 2026",
    text:
      "Became Technical Review Committee (TRC) at the 2026 IEEE 18th International Conference on Computational Intelligence and Communication Networks (CICN).",
  },
  {
    date: "Feb 2026",
    text: "Participated in HackUNCP 2026.",
  },
  {
    date: "Feb 2026",
    text:
      "Focus: independent CTI research, coordinated disclosure, and open-source security contributions.",
  },
  {
    date: "Dec 2025",
    text: "Graduated from UNC Pembroke with a B.S. in Cybersecurity.",
  },
  {
    date: "Nov 2025",
    text: "Participated in HackPrinceton 2025.",
  },
  {
    date: "Sep 2025",
    text: "Elected Vice President of Artificial Intelligence @ UNCP.",
  },
];

// Calm homepage (value proposition + CTAs)
const homepage = {
  headline: "I help teams ship calm, defensible security work.",
  subhead:
    "Cybersecurity analyst and researcher—threat intelligence, SOC operations, and careful engineering: from STIX knowledge graphs to coordinated disclosure and open collaboration.",
  primaryCta: { label: "View my work", to: "/work" },
  secondaryCta: { label: "Get in touch", to: "/contact" },
};

const services = [
  {
    title: "Security operations & CTI",
    description:
      "Enterprise SOC workflows, triage, and structured threat data.",
    to: "/work",
  },
  {
    title: "Research-style engineering",
    description: "Synthetic intel graphs, LLM pipelines, and evaluation rigor.",
    to: "/work",
  },
  {
    title: "Story & background",
    description: "Education, leadership, and how I work with teams.",
    to: "/about",
  },
];

/** LinkedIn recommendations (newest first; curated subset). */
const testimonials = [
  {
    name: "Shirsendu Mondal",
    role:
      "Cybersecurity Researcher | CNPen | eJPT | CEH | CC (ISC)² | NASA HoF | DHS HoF",
    text:
      "Tanzimul Alam Fahim is an excellent cybersecurity professional and a dependable teammate to work with in the SOC environment. During the time we worked together, I saw him handle security operations responsibilities with professionalism, consistency, and strong attention to detail. He approaches incidents and alerts with a calm mindset, thinks analytically, and works hard to ensure issues are properly investigated and addressed.\n\nWhat stands out most about Fahim is his reliability and teamwork. He is someone who can be trusted to contribute meaningfully during day-to-day SOC operations, collaborate well with others, and maintain a strong sense of responsibility in fast-paced situations. He is always willing to support the team and brings a solid work ethic to everything he does.\n\nI believe Fahim has a strong future in cybersecurity, and I am confident he will continue to do well in any security-focused role he takes on.",
  },
  {
    name: "Imran Sefat",
    role:
      "Data & Integration Architect | Enterprise Data Lifecycle, ETL, Governance | NSW Government · Powerhouse | Azure · AWS | HIPAA-regulated PHI experience",
    text:
      "I had the pleasure of working with Fahim during his time volunteering with IEEE BRACU Student Chapter (IEEE BRACU SC) and IEEE Computer Society BRACU SC. His dedication, technical expertise, and proactive approach made him an invaluable asset to the team.\n\nFahim consistently went above and beyond in every task he undertook. Whether it was coordinating events or managing web technologies, he always brought a level of professionalism and creativity that set him apart. His contribution to the Web Tech Hackathon 2021 was particularly impressive, where he was rightfully nominated as Best Volunteer for his outstanding efforts in ensuring the event’s success. He handled everything from troubleshooting technical issues to ensuring smooth communication between teams, making him a key player in the hackathon’s seamless execution. One of Fahim’s strongest qualities is his initiative. He often stepped up to take on challenging projects, such as leading the development of the chapter’s website and providing mentorship to new members. His ability to stay calm under pressure, paired with his problem-solving mindset, made him a go-to person for both technical and organizational matters. Beyond his technical skills, Fahim demonstrated remarkable leadership and team spirit. He’s someone who works well with diverse teams and knows how to bring out the best in others. His positive attitude, work ethic, and passion for learning left a lasting impression on everyone who had the opportunity to work with him.\n\nI highly recommend Fahim for any future opportunities he pursues. He has the rare combination of technical skill, leadership ability, and a genuine drive to make an impact.",
  },
  {
    name: "Tazrian Ismail",
    role:
      "Sustainable building & industrial automation | AMER Controls @ Amazon Web Services | PLC and Automation | Project Management",
    text:
      "I've had the pleasure of working with Tanzimul on a paper about security issues in building heating and cooling systems, focusing on universities. Tanzimul brings such a unique mix of skills to the table—from his work in geology to his knack for IT security. He's got this great way of tackling tricky problems, especially when it comes to analyzing data and handling security incidents. What really stands out is how hard-working and easy to work with Tanzimul is. He dives into challenges head-first and always has insightful ideas to share. I've got no doubt that Tanzimul would be a fantastic addition to any team. His blend of tech smarts and people skills is pretty hard to beat.",
  },
  {
    name: "Faysal Khan Shihab",
    role:
      "Marketing and Public Relations Specialist | Digital Marketer | Content Manager | Esports Athlete",
    text:
      "I worked with Tanzimul during our time together at both Tanzimul In Gamers of Bangladesh and GameVerse Bangladesh. Throughout our collaboration, Tanzimul proved to be a highly skilled and passionate individual with an exceptional talent for both gaming and robotics.\n\nTanzimul's technical abilities and expertise in robotics were particularly impressive, as evidenced by his numerous international awards in the field, including his achievements in the European Robotics League. He consistently demonstrated a remarkable level of focus and dedication in his work, consistently going above and beyond to ensure that projects were completed to the highest standard.\n\nBeyond his technical skills, Tanzimul's management abilities also stood out. As an organizer for the English Olympiad from its inception, he was instrumental in ensuring that the event ran smoothly and efficiently, handling all aspects of coordination and logistics with ease.\n\nI highly recommend this guy! His skills, passion, and dedication make him an invaluable asset to any team, and I am confident that he will continue to achieve great things in his future endeavors.",
  },
  {
    name: "Jahir Uddin",
    role:
      "Physical AI & Human Factor Engineering Researcher | Graduate Research Assistant at UNMC",
    text:
      "I have known Tanzimul for 2 years. During this time, I have worked with him on several projects. He is a very dedicated, enthusiastic person with sound skills in technology. We both worked in BracU Dichari, IMechE Bracu Student Chapter, and BracU Mongol Tori.\n\nBest wishes.",
  },
  {
    name: "Shahria Omar Fahim",
    role:
      "Office Engineer (Civil) at MEPC | Co-Founder at CloudString Technology | Sr. Coordinator at Beatbox Bangladesh | Lead of IT Department at English Olympiad™",
    text:
      "Tanzimul, hard working person I ever known. We both worked together at English Olympiad as Campus Ambassador. And, afterward as Lead and Deputy Lead of IT department at English Olympiad. We both also worked together as Representative of Coding Olympiad. CloudString Technology, a company co-founded by me and Tanzimul.\n\nAs we have been working over 5years together, I must admit I have learnt a lot from Tanzimul. He is the most coolest and intelligent person I ever known! There is a lot to learn from him. And I must mention one thing, Tanzimul is seriously a passionate person and takes work very seriously and always try to solve them on time and makes thing very simple to do with his knowledge!",
  },
];

const toolkitCategories = [
  {
    name: "Security & platforms",
    items: [
      "Splunk",
      "Microsoft Defender",
      "Cisco AMP / Umbrella",
      "PhishER",
      "STIX 2.1 / TAXII",
    ],
  },
  {
    name: "Engineering",
    items: ["Python", "Django", "Angular", "LangChain", "Docker", "Git"],
  },
  {
    name: "Workflow",
    items: ["VS Code", "Markdown", "Wireshark (basics)", "Jupyter"],
  },
];

/** In-depth case-style entries for the Work page. */
const caseStudies = [
  {
    id: "sakura-cti",
    title: "Synthetic CTI knowledge graphs (SAKURA / Synthetica)",
    role: "Research engineer — NSA LAS internship",
    problem:
      "Analysts need realistic STIX 2.1 data without exposing sensitive production intel.",
    approach:
      "Designed generation pipelines with LangChain, GAN-style components where appropriate, and GPT-4o–assisted STIX objects; shipped a Django + Angular stack for scenario-driven graph creation.",
    stack: ["Python", "Django", "Angular", "STIX 2.1", "LangChain", "PyTorch"],
    result:
      "Large-scale synthetic graphs and a repeatable workflow for CTI training and tooling validation.",
    href: "https://devpost.com/software/synthetica",
  },
  {
    id: "soc-uncp",
    title: "SOC analysis & response (campus scale)",
    role: "Security Operations Center Analyst — UNCP IT",
    problem:
      "High alert volume across email, endpoint, and network controls with limited analyst time.",
    approach:
      "Triaged and investigated in Splunk, Defender, Cisco AMP, Umbrella, and PhishER; standardized notes and escalation paths for recurring scenarios.",
    stack: ["Splunk", "Microsoft Defender", "Cisco", "PhishER"],
    result:
      "Faster mean time to contain common phishing and endpoint cases; clearer handoffs for deeper incidents.",
    href: null,
  },
  {
    id: "mdl-identity",
    title: "Mobile Driver’s License architecture research",
    role: "Research Assistant — Cyber Defense Education Center",
    problem:
      "mDL systems must balance privacy, crypto agility, and real-world issuance constraints.",
    approach:
      "Surveyed 100+ sources on digital identity and protocols; evaluated architectures (NFC, Bluetooth, QR) against threat models relevant to adoption.",
    stack: [
      "Literature review",
      "Threat modeling",
      "Writing for technical audiences",
    ],
    result:
      "Actionable synthesis for secure identity research direction and stakeholder communication.",
    href: null,
  },
  {
    id: "joomla-cve",
    title: "Coordinated disclosure — Joomla Core (CVE-2026-21631)",
    role: "Independent researcher",
    problem:
      "A stored XSS class of issue in a widely deployed CMS comparison view.",
    approach:
      "Responsible report with reproduction detail; worked through the vendor coordinated disclosure process.",
    stack: ["Web app security", "XSS", "Coordinated disclosure"],
    result:
      "Issue fixed in core; users protected through an official security release.",
    href: null,
  },
  {
    id: "pfas-pipelines",
    title: "Environmental data pipelines at scale",
    role: "Data Science Research Assistant — UNCP Geology",
    problem:
      "Tens of thousands of PFAS well records required cleaning, deduplication, and geographic matching.",
    approach:
      "Python pipelines with automated validation and Haversine matching; PCA for exploratory insight.",
    stack: ["Python", "Pandas", "Scikit-learn"],
    result:
      "Roughly 60% reduction in manual cleaning time; more reliable merged datasets for analysis.",
    href: null,
  },
];

const contactForm = {
  /** Optional: set after creating a form at https://formspree.io */
  formspreeAction: "",
  bookChatMailto:
    "mailto:fahim.communicate@gmail.com?subject=Book%20a%2020-minute%20chat",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/tanzimulalam",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tanzimulalam",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
];

const skills = {
  data: [
    {
      title: "Cybersecurity & Security Tools",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proactively investigated and conducted vulnerability assessments, executed security tests, and analyzed systems to detect threats using Splunk, Microsoft Defender, Cisco Anti-Malware Protection, Umbrella, and PhishER",
        "⚡ Experienced in Security Operations Center (SOC) analysis, threat detection, incident response, and security monitoring",
        "⚡ Developed synthetic cyber threat intelligence (CTI) software with STIX 2.1-compliant knowledge graphs for threat analysis",
        "⚡ Researched and enhanced Mobile Driver's License (mDL) architecture focusing on security, privacy, and cryptographic protocols",
        "⚡ Applied Cryptography expertise in course development and security architecture design",
      ],
      softwareSkills: [
        {
          skillName: "Splunk",
          fontAwesomeClassname: "simple-icons:splunk",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Cisco",
          fontAwesomeClassname: "simple-icons:cisco",
          style: {
            color: "#1BA0D7",
          },
        },
        {
          skillName: "Microsoft Defender",
          fontAwesomeClassname: "simple-icons:microsoft",
          style: {
            color: "#0078D4",
          },
        },
        {
          skillName: "STIX",
          fontAwesomeClassname: "",
          imageUrl:
            "https://www.oasis-open.org/wp-content/uploads/2020/11/sTIX.png",
          style: {
            backgroundColor: "transparent",
            color: "#FF6B35",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Cryptography",
          fontAwesomeClassname: "",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/8948/8948693.png",
          style: {
            backgroundColor: "transparent",
            color: "#FFD700",
          },
        },
      ],
    },
    {
      title: "Data Science & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developed machine learning models using TensorFlow, PyTorch, and Scikit-learn for various applications",
        "⚡ Experience with GANs, GNN, GCN for synthetic data generation and knowledge graph analysis",
        "⚡ Built data pipelines and performed advanced analytics using Pandas, NumPy, and LangChain",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#150458",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            backgroundColor: "transparent",
            color: "#013243",
          },
        },
      ],
    },
    {
      title: "Programming & Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in Python, Java, JavaScript, and C++ for various software development projects",
        "⚡ Building web applications using Django, Angular, and modern JavaScript frameworks",
        "⚡ Experience with Git, GitHub, and collaborative development workflows",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            backgroundColor: "transparent",
            color: "#ED8B00",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            backgroundColor: "transparent",
            color: "#00599C",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            backgroundColor: "transparent",
            color: "#092E20",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            backgroundColor: "transparent",
            color: "#DD0031",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            backgroundColor: "transparent",
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "fa-github",
          style: {
            backgroundColor: "transparent",
            color: "#181717",
          },
        },
      ],
    },
    {
      title: "Tools & Technologies",
      fileName: "DesignImg",
      skills: [
        "⚡ Working with cloud platforms including AWS and Microsoft Azure for deployment and infrastructure",
        "⚡ Using development tools like VS Code, Jupyter Notebook, MATLAB, and ROS for various projects",
        "⚡ Experience with design tools including Figma, Adobe XD, Photoshop, and Premier Pro",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "MATLAB",
          fontAwesomeClassname: "",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/330px-Matlab_Logo.png",
          style: {
            color: "#0076A8",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            color: "#F37626",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of North Carolina at Pembroke",
      subtitle: "Bachelor of Science: Cybersecurity",
      logo_path: "uncp_logo.png",
      alt_name: "UNCP",
      duration: "2025",
      descriptions: [
        "⚡ Cum Laude — Honors Scholar Fellowship, Chancellor's Honor List, National Honors Society",
        "⚡ Pembroke Scholar (2023, 2024, 2025)",
        "⚡ Focused on cybersecurity, application security, incident response, and secure identity research",
      ],
      website_link: "https://www.uncp.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Cybersecurity Professional",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link: "",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "ISO 27001:2022 ISMS Lead Auditor",
      subtitle: "- Mastermind",
      logo_path: "iso_logo.png",
      certificate_link: "",
      alt_name: "Mastermind",
      color_code: "#00336699",
    },
    {
      title: "Certified in Cybersecurity",
      subtitle: "- (ISC)²",
      logo_path: "isc2_logo.png",
      certificate_link: "",
      alt_name: "(ISC)²",
      color_code: "#FF660099",
    },
    {
      title: "MATLAB Onramp",
      subtitle: "- MathWorks",
      logo_path: "mathworks_logo.png",
      certificate_link: "",
      alt_name: "MathWorks",
      color_code: "#0076A899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Research",
  description:
    "Cybersecurity professional with extensive experience in Security Operations Center (SOC) analysis, threat intelligence, machine learning research, and data science. Passionate about developing innovative solutions for cybersecurity challenges and advancing research in digital identity and threat intelligence.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Security Operations Center (SOC) Analyst",
          company:
            "UNCP Division of Information Technology, Network & Security Department",
          company_url: "https://www.uncp.edu/",
          logo_path:
            "https://upload.wikimedia.org/wikipedia/en/f/ff/University_of_North_Carolina_at_Pembroke_seal.svg",
          duration: "Jan 2024 – Sep 2025",
          location: "Pembroke, NC",
          description:
            "Proactively conducted vulnerability analysis and security operations in Splunk, Microsoft Defender, Cisco AMP, Umbrella, and PhishER, triaging alerts and performing incident response workflows to detect and mitigate threats.",
          color: "#003366",
        },
        {
          title: "Teaching Assistant (TA) & Web Information Coordinator (WIC)",
          company: "UNCP Department of Mathematics & Computer Science",
          company_url: "https://www.uncp.edu/",
          logo_path:
            "https://upload.wikimedia.org/wikipedia/en/f/ff/University_of_North_Carolina_at_Pembroke_seal.svg",
          duration: "Aug 2024 – May 2025",
          location: "Pembroke, NC",
          description:
            "Assisted in Applied Cryptography and application security courses through syllabus development, assignment design, and student support. Created and distributed departmental marketing emails showcasing cybersecurity resources and events, improving engagement in security workshops and initiatives. Kept the department website updated so information stayed current for students and visitors.",
          color: "#003366",
        },
        {
          title: "Data Science Research Assistant",
          company: "UNCP Department of Geology",
          company_url: "https://www.uncp.edu/",
          logo_path:
            "https://upload.wikimedia.org/wikipedia/en/f/ff/University_of_North_Carolina_at_Pembroke_seal.svg",
          duration: "May 2024 – May 2025",
          location: "Pembroke, NC",
          description:
            "Built Python pipelines processing 100k+ PFAS well-water records; cut manual cleaning time by 60% via automated validation & Haversine matching. Applied Principal Component Analysis (PCA) with Scikit-learn for dimensionality reduction, identifying key data insights and trends. Engineered robust data integration pipelines with Python, merging datasets and ensuring data consistency and integrity through validation techniques.",
          color: "#003366",
        },
        {
          title: "Research Assistant",
          company: "UNCP Cyber Defense Education Center",
          company_url: "https://www.uncp.edu/",
          logo_path:
            "https://upload.wikimedia.org/wikipedia/en/f/ff/University_of_North_Carolina_at_Pembroke_seal.svg",
          duration: "Jan 2024 – May 2025",
          location: "Pembroke, NC",
          description:
            "Researched and enhanced Mobile Driver's License (mDL) architecture focused on secure identity management, privacy, and interoperability. Analyzed 100+ studies on digital identity, cryptographic protocols, and mobile security to identify research gaps and propose innovations. Investigated scalable, secure mDL architectures including blockchain, biometric authentication, and communication protocols (NFC, Bluetooth, QR codes).",
          color: "#003366",
        },
        {
          title: "Resident Assistant",
          company: "UNCP Housing & Residence Life",
          company_url: "https://www.uncp.edu/",
          logo_path:
            "https://upload.wikimedia.org/wikipedia/en/f/ff/University_of_North_Carolina_at_Pembroke_seal.svg",
          duration: "Jan 2024 – Apr 2025",
          location: "Pembroke, NC",
          description:
            "Managed field & administrative responsibilities and ensured a harmonious living environment of 577 residents.",
          color: "#003366",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Research and ML Intern",
          company:
            "Laboratory for Analytic Sciences and National Security Agency",
          company_url: "https://www.nsa.gov/",
          logo_path:
            "https://ncsu-las.org/wp-content/uploads/2022/08/LAS_logo_fullcolor-e1660057075455.png",
          duration: "Dec 2023 – Aug 2024",
          location: "Raleigh, NC",
          description:
            "Led a team of 5 in developing a large-scale synthetic cyber threat intelligence (CTI) software, generating a knowledge graph with 100,000+ nodes. Developed a Django-based web application for user-defined attack scenario and entity selection. Engineered Generative Adversarial Networks (GANs) using PyTorch for synthetic data generation. Integrated LangChain & GPT-4 to auto-generate STIX 2.1 objects with 90% validity; presented results at LAS Research Symposium.",
          color: "#003366",
        },
        {
          title: "Research Intern",
          company: "Laboratory for Space Systems Engineering & Technology",
          company_url: "",
          logo_path:
            "https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/269265388_437140104692210_184097023900869449_n.png?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=ThVrCTIgt4sQ7kNvwHp1PNo&_nc_oc=AdqtZYl-qjUtlkYeNxdjq9YRHvjuMafezxDaOIsz7jihwoZvr_jo4tx1G3FNdGVG-8US46lL3rbpm0VnjIjR60Z9&_nc_zt=23&_nc_ht=scontent-iad3-1.xx&_nc_gid=Z_frhUfYWsDSlIi0Iuv4OQ&_nc_ss=7b2a8&oh=00_Af5odsxfIQuxFtXYyq1qJPInq9aoP9BmUMZDX6yDHXF1jQ&oe=69FF4542",
          duration: "Feb 2021 – Jul 2022",
          location: "Dhaka, Bangladesh",
          description:
            "Served as a Team Lead of Operations for BRACU Dichari project, overseeing project operations and leading the team to the European Robotics League 2022 final round as the first Asian Team winning Perseverance Award in Aero-Klub Poznan, Poland. Contributed to the Mechanical Team for the BRACU Mongol Tori 6.0 project, supporting the design and physical implementation of the rover body through 3D modeling in SolidWorks. Participated in the International Rover Challenge 2021 and University Rover Challenge 2021 securing 3rd position, with the team advancing as a finalist in the University Rover Challenge 2022.",
          color: "#0066CC",
        },
      ],
    },
    {
      title: "Leadership Experience",
      experiences: [
        {
          title: "Vice President, Artificial Intelligence @ UNCP Club",
          company: "UNCP",
          company_url: "https://www.uncp.edu/",
          logo_path:
            "https://upload.wikimedia.org/wikipedia/en/f/ff/University_of_North_Carolina_at_Pembroke_seal.svg",
          duration: "",
          location: "Pembroke, NC",
          description:
            "Attended NC-PaCE Symposium, gaining insights into cybersecurity trends and initiatives in NC. Organized monthly programming competitions in collaboration with ACM Chapter at UNCP.",
          color: "#003366",
        },
        {
          title: "Organizer, HackUNCP Hackathon",
          company: "UNCP",
          company_url: "https://www.uncp.edu/",
          logo_path:
            "https://upload.wikimedia.org/wikipedia/en/f/ff/University_of_North_Carolina_at_Pembroke_seal.svg",
          duration: "Aug 2024 – Dec 2025",
          location: "Pembroke, NC",
          description:
            "Coordinated logistics, sponsorships management, industry engagement, and participant engagement for the hackathon.",
          color: "#003366",
        },
        {
          title: "Committee Chairman, Cyber Defense Club",
          company: "UNCP",
          company_url: "https://www.uncp.edu/",
          logo_path:
            "https://upload.wikimedia.org/wikipedia/en/f/ff/University_of_North_Carolina_at_Pembroke_seal.svg",
          duration: "Aug 2024 – Aug 2025",
          location: "Pembroke, NC",
          description:
            "Organized and led committee initiatives, fostering collaboration among members and leadership to strengthen the organization.",
          color: "#003366",
        },
        {
          title:
            "Head of Electoral Commission, Student Government Association 77th Election",
          company: "UNCP",
          company_url: "https://www.uncp.edu/",
          logo_path:
            "https://upload.wikimedia.org/wikipedia/en/f/ff/University_of_North_Carolina_at_Pembroke_seal.svg",
          duration: "Jan 2024 – Apr 2025",
          location: "Pembroke, NC",
          description:
            "Oversaw the election process, ensuring transparency, fairness, and increased student involvement.",
          color: "#003366",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects span cybersecurity, machine learning, data science, and robotics. I specialize in developing innovative solutions using cutting-edge technologies including STIX knowledge graphs, GANs, LLMs, and autonomous systems.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Projects and Research",
  description:
    "Research projects, publications, and innovative solutions in cybersecurity, machine learning, and data science.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "skelevision",
      name: "SkeleVision",
      createdAt: "2026-02-22T00:00:00Z",
      description:
        "Turn your body into a live, interactive anatomy classroom. An AI-powered anatomy learning app that overlays a real-time skeleton on the user using webcam + pose detection, with contextual explanations.",
      url: "https://devpost.com/software/skelevision",
    },
    {
      id: "betterats",
      name: "betterATS",
      createdAt: "2026-01-01T00:00:00Z",
      description:
        "AI-native ATS that uses contextual AI to rank candidates by true fit and potential, not keywords. Hire smarter with betterATS. Team: Najmul Hasan, Tanzimul Alam Fahim, Ubayeid Bin Habib, Mohammad Kawsar",
      url: "https://devpost.com/software/better-ats",
    },
    {
      id: "synthetica",
      name: "Synthetica!",
      createdAt: "2024-08-01T00:00:00Z",
      description:
        "Synthetic Cyber Knowledge Graph Generator for Analysts & Cyber Security Professionals! Platform to generate synthetic STIX 2.1-compliant cyber knowledge graphs for CTI analysis. Team: Tanzimul Alam Fahim, Harry Lamichhane, AndrewCart5, C Rajwardhan Shinde. Tools: STIX 2.1, Django, Angular, three.js, GPT-4o, LangChain",
      url: "https://devpost.com/software/synthetica",
    },
    {
      id: "golapi-care",
      name: "Golapi-Care",
      createdAt: "2023-01-01T00:00:00Z",
      description:
        "An ML-based approach to identify Mild Cognitive Impairment among the elderly using data from day-to-day wearable devices. Tools: JavaScript, JSON, Python, Terra-API, TribeHR-WebHook",
      url: "https://devpost.com/software/golapi-care",
    },
    {
      id: "heal-care",
      name: "Heal Care",
      createdAt: "2023-01-01T00:00:00Z",
      description:
        "Introducing 'Heal Care' - where advanced AI meets healthcare. Your AI Healthcare Companion for OTC Medications. AI-powered healthcare chatbot using Django with a GPT-4 API fine-tuned for health queries. Team: Tanzimul Alam Fahim, Harry Lamichhane, MdMushfiqueRahman. Tools: LLM, GPT-4, HTML/CSS, Django",
      url: "https://devpost.com/software/heal-care",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_profile.png",
    description:
      "I am available for opportunities in cybersecurity, machine learning, and data science. Feel free to reach out via email or LinkedIn. I typically respond within 24 hours. I can help with cybersecurity analysis, threat intelligence, ML/AI projects, and research collaborations.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I document my research experiences, technical insights, and career journey in cybersecurity and machine learning.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Pembroke, NC, USA",
    locality: "Pembroke",
    country: "USA",
    region: "North Carolina",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+1 435.675.6894",
  },
};

// Extra Curricular Achievements Page
const achievements = {
  title: "Extra Curricular Achievements",
  subtitle: "National & International Events",
  description:
    "Active participation in global initiatives, leadership roles in international organizations, and recognition for outstanding contributions to education, technology, and social causes.",
  sections: [
    {
      title: "National & International Events",
      achievements: [
        {
          title:
            "Team Lead of Operations — BRACU Dichari (European Robotics League 2022)",
          organization: "BRACU Dichari Robotics Team",
          organization_url:
            "https://www.tbsnews.net/features/pursuit/bracu-dichari-bangladeshi-robotics-team-world-stage-479498",
          logo_path:
            "https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2022/08/18/img-20220705-wa0006.jpg",
          duration: "2022",
          location: "Aero Klub Poznań, Poland",
          description:
            "Led operations for the BRACU Dichari robotics team at European Robotics League (ERL) 2022 — first Asian team to reach the final round; won the Perseverance Award and placed Top 5.",
          color: "#1E88E5",
          links: [
            {
              label: "News (TBS)",
              url:
                "https://www.tbsnews.net/features/pursuit/bracu-dichari-bangladeshi-robotics-team-world-stage-479498",
            },
            {
              label: "News (The Daily Star)",
              url:
                "https://online.thedailystar.net/tech-startup/news/team-brac-university-makes-it-the-top-5-the-european-robotics-league-3019991",
            },
            {
              label: "Team photo",
              url:
                "https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2022/08/18/img-20220705-wa0006.jpg",
            },
          ],
        },
        {
          title: "Global Affairs Deputy Head",
          organization: "English Olympiad Global",
          organization_url: "",
          logo_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgYcwEzBvZvnq6MWU2LaWIGKgKu9mWadE5bw&s",
          duration: "",
          location: "Global",
          description:
            "Responsible for maintaining and overseeing all operations related to the Global Affairs Department of English Olympiad Global.",
          color: "#1E88E5",
        },
        {
          title: "National Event Coordinator",
          organization: "Coding Olympiad Global",
          organization_url: "",
          logo_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZESpQwieBzQkhPq_I2JHIiss1clbEpL8QQ&s",
          duration: "2021",
          location: "Bangladesh",
          description:
            "Inaugurated in 2021, Coding Olympiad is a worldwide coding competition. Responsible for event coordination of this competition in Bangladesh.",
          color: "#00ACC1",
        },
        {
          title: "Convenor & Country Ambassador (BANGLADESH)",
          organization: "Worldwide Organization for Charity (WOC)",
          organization_url: "",
          logo_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLD_3SLpXK_gDGCic6orAQmZRJkYq6I6ISBg&s",
          duration: "",
          location: "Bangladesh",
          description:
            "Served as Convenor & Country Ambassador for Bangladesh. World Orphans Day (20th April) was declared by Worldwide Organization for Charity (WOC) and is observed all over the world.",
          color: "#43A047",
        },
        {
          title: "Former IYS Deputy Country Coordinator",
          organization:
            "Workplace Skill Development Academy New Zealand (WSDA NZ)",
          organization_url: "",
          logo_path:
            "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/163239651_381325526494841_4179118879986352282_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=X3woEen8isIQ7kNvwGowYf4&_nc_oc=Adpf8yM7PnFmJuimtQsLsM7PYG2_--x2oKY9CMaavVry_S4pzVhEvqhENFvQCxmqjCUmgNDFfwYE5wz_UuoQOOMb&_nc_zt=23&_nc_ht=scontent-iad3-1.xx&_nc_gid=Qt2itfRnorZeqK1c3cvATA&_nc_ss=7b2a8&oh=00_Af7eLJ5u6u6y9OUfYWbdjW1-xSED3jU5Smz_aw9F-zY8cg&oe=6A20C11D",
          duration: "2020",
          location: "Bangladesh",
          description:
            "Workplace Skill Development Academy New Zealand (WSDA NZ) organizes International Youth Summit (IYS) every year worldwide. I played the role of Deputy Country Coordinator in International Youth Summit 2020.",
          color: "#5E35B1",
        },
        {
          title: "Delegate of Japan",
          organization: "HIS Model United Nations 2019",
          organization_url: "",
          logo_path:
            "https://i2.wp.com/oehowl.org/wp-content/uploads/2021/02/Model-UN-Logo.jpg?fit=698%2C600&ssl=1",
          duration: "2019",
          location: "Bangladesh",
          description:
            "Participated as Delegate of Japan under International Labor Organization (ILO) in HURDCO International School Model United Nations 2019.",
          color: "#E53935",
        },
      ],
    },
    {
      title: "Guinness World Records",
      achievements: [
        {
          title: "Worlds Largest Crop Field Mosaic Art",
          organization: "National Implementation Committee of Bangabandhu 100",
          organization_url: "",
          logo_path:
            "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Guinness_World_Records_logo.svg/1280px-Guinness_World_Records_logo.svg.png",
          duration: "",
          location: "Bangladesh",
          description:
            "Worked on the Youth & Voluntary Sub-Committee with National AgriCare. The picture covers 119,430.273 m² (1,285,536.75 ft²).",
          color: "#F57C00",
        },
      ],
    },
  ],
};

export {
  settings,
  seo,
  greeting,
  academicProfile,
  liveFeedUpdates,
  homepage,
  services,
  testimonials,
  toolkitCategories,
  caseStudies,
  contactForm,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  achievements,
  contactPageData,
};
