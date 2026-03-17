/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Tanzimul Alam Fahim's Portfolio",
  description:
    "Cybersecurity professional and researcher specializing in security operations, threat intelligence, machine learning, and data science. Experienced in SOC analysis, vulnerability assessments, and developing innovative cybersecurity solutions.",
  og: {
    title: "Tanzimul Alam Fahim Portfolio",
    type: "website",
    url: "https://www.tanzimulalam.com/",
  },
};

//Home Page
const greeting = {
  title: "Tanzimul Alam Fahim",
  logo_name: "TanzimulAlamFahim",
  nickname: "tanzimulalam",
  subTitle:
    "Cybersecurity professional and researcher specializing in security operations, threat intelligence, machine learning, and data science. Passionate about developing innovative solutions for cybersecurity challenges.",
  resumeLink: "",
  portfolio_repository: "https://github.com/tanzimulalam/masterPortfolio",
  githubProfile: "https://github.com/tanzimulalam",
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
  {
    name: "Devpost",
    link: "https://devpost.com/fahim5898",
    iconUrl: "https://www.svgrepo.com/show/330293/devpost.svg",
    fontAwesomeIcon: "fa-code", // fallback if iconUrl fails
    backgroundColor: "#003E52", // Devpost brand color
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
          fontAwesomeClassname: "simple-icons:stix",
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
          fontAwesomeClassname: "fa-shield-alt",
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
          fontAwesomeClassname: "simple-icons:java",
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
          fontAwesomeClassname: "simple-icons:matlab",
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
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
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
            "https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/269265388_437140104692210_184097023900869449_n.png?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=FD2sp5c8kNoQ7kNvwEYlcGj&_nc_oc=AdnmxuZSNf5Ko2IGvJxAeI2URaGMxkxGQZqzCh3LMmOg7_v30nL3oy4XRK-76npwBsrM-ghH8t1pWw4XkKipM6ah&_nc_zt=23&_nc_ht=scontent-iad3-1.xx&_nc_gid=MpFx2GAYB090r9nSWD-KtA&_nc_ss=8&oh=00_AfzQEH8DJzB7gzTRKXYuLVBSPhnYsx0Ifptu5PuqF2C8UQ&oe=69BEABC2",
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
      id: "betterats",
      name: "betterATS",
      createdAt: "2024-01-01T00:00:00Z",
      description:
        "AI-native ATS that uses contextual AI to rank candidates by true fit and potential, not keywords. Hire smarter with betterATS. Team: Najmul Hasan, Tanzimul Alam Fahim, Ubayeid Bin Habib, Mohammad Kawsar",
      url: "https://devpost.com/software/betterats",
    },
    {
      id: "synthetica",
      name: "Synthetica!",
      createdAt: "2023-08-01T00:00:00Z",
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
    profile_image_path: "animated_ashutosh.png",
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
            "https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/277748940_124007493541864_7622640440864708500_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=nbTvOVGH-LsQ7kNvwFnS5Rh&_nc_oc=Adk0HV_xVIGhx1QoA6otgQ3zkUnl4rX3uIDG8SMoSOaapNzaWzJVODnDnbNOc4pE_570EsHXi3rk7M7qeOY1aY-n&_nc_zt=23&_nc_ht=scontent-iad3-2.xx&_nc_gid=YqhE0n7yunpueFtWzmMC6A&_nc_ss=8&oh=00_Afy3M1BUo1-dDe219fHCz3MaI7TgBbRqjXLWBCK7SOh2Vg&oe=69BEB71B",
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
          logo_path: "english_olympiad_logo.png",
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
          logo_path: "coding_olympiad_logo.png",
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
          logo_path: "woc_logo.png",
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
          logo_path: "wsda_logo.png",
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
          logo_path: "mun_logo.png",
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
          logo_path: "guinness_logo.png",
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
