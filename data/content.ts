import { type Experience, type Project, type Achievement, type Skill, type ExtracurricularActivity } from '../types';

export const tagline: string = "Driving business impact through strategic problem-solving and data-driven insights.";

export const professionalSummary: string = "Results-oriented professional with 7+ years of cross-functional experience delivering measurable business impact through strategic problem-solving, process optimization, and stakeholder management across telecommunications, technology, manufacturing, and professional services sectors. Proven expertise in consultative client advisory, data-driven decision making, and project management with a track record of reducing operational costs by 10-30%.";

export const keySkills: string[] = [
    "Strategic Management",
    "Financial Analysis",
    "Process Optimization",
    "Project Management",
    "Stakeholder Management",
    "Quality Management (ISO 9001)",
    "Lean Six Sigma",
    "Data Analytics (Power BI)",
];

export const professionalExperience: Experience[] = [
    {
        slug: "customer-solutions-advisor-vodafone",
        role: "Customer Solutions Advisor",
        company: "Vodafone Three UK",
        period: "June 2025 - Present",
        location: "Eastleigh, UK",
        description: "Leading telecommunications provider serving 25+ million customers; driving integrated mobile and broadband solutions. My role involves delivering consultative client advisory services, analysing customer needs, and architecting tailored telecommunications solutions.",
        achievements: [
            "Achieved top 10 performance ranking nationally among 1,000+ advisors, consistently exceeding all KPIs by 200% monthly.",
            "Maintained 94%+ mystery shopper scores through exceptional customer experience delivery and regulatory compliance.",
            "Ensured full adherence to FCC and telecommunications regulations, mitigating organizational compliance risks."
        ],
        skills: ["Client Advisory", "Sales", "Telecommunications", "CRM", "Regulatory Compliance"],
    },
    {
        slug: "immigration-solutions-consultant-y-axis",
        role: "Immigration Solutions Consultant",
        company: "Y-Axis Consultancy UK",
        period: "November 2024 - April 2025",
        location: "Southampton, UK",
        description: "Global immigration consultancy with 50+ offices worldwide, specializing in complex visa and migration solutions. I provided regulatory advisory services and designed solutions for complex immigration cases.",
        achievements: [
            "Provided regulatory advisory services to 5000+ clients on UK immigration pathways including Tier 2, Tier 4, and Business visas.",
            "Conducted needs assessment and solution design for complex immigration cases across 50+ countries.",
            "Collaborated with legal teams, government agencies, and international offices to deliver seamless client experiences."
        ],
        skills: ["Regulatory Advisory", "Solution Design", "International Law", "Stakeholder Collaboration"],
    },
    {
        slug: "business-development-executive-emudhra",
        role: "Business Development Executive",
        company: "Emudhra Ltd.",
        period: "May 2022 - August 2023",
        location: "Bengaluru, India",
        description: "Leading digital security provider specializing in PKI solutions. I was responsible for driving business growth, managing enterprise clients, and presenting customized infrastructure solutions.",
        achievements: [
            "Drove business development generating INR 2.5 crores (£250,000) in individual sales revenue over a 15-month tenure.",
            "Architected and presented customized PKI infrastructure solutions to C-suite executives and senior management.",
            "Designed and delivered an AI adoption training program for senior management on ChatGPT integration within one month of platform launch."
        ],
        skills: ["Business Development", "PKI", "Sales Strategy", "C-Suite Engagement", "AI Adoption"],
    },
    {
        slug: "quality-control-assistant-manager-godrej",
        role: "Quality Control & Assurance Assistant Manager",
        company: "Godrej & Boyce Mfg. Co. Ltd.",
        period: "August 2018 - December 2020",
        location: "Mohali, India",
        description: "Flagship manufacturing company operating across appliances, furniture, aerospace, and security. I led a large cross-functional team to deploy and manage quality systems.",
        achievements: [
            "Engineered and deployed comprehensive quality management systems, achieving a 20% reduction in manufacturing defects and 10% operational cost savings.",
            "Led a cross-functional team of 50+ members across production and quality functions, establishing performance KPIs.",
            "Operated and programmed Coordinate Measurement Machine (CMM) for precision quality verification, developing measurement programs for complex components.",
            "Ensured organizational adherence to ISO 9001:2015 and ISO 14001:2015 standards, successfully leading certification audits."
        ],
        skills: ["Quality Management", "ISO 9001/14001", "Lean Manufacturing", "CMM Programming", "Team Leadership"],
    },
];

export const education: Experience[] = [
    {
        slug: "msc-business-management-qmul",
        role: "MSc Business Management",
        company: "Queen Mary University of London",
        period: "Sep 2023 - Sep 2024",
        location: "London, UK",
        description: "Achieved First Class Honours. Key Modules included Strategic Management, Financial Analysis, Organizational Behavior, and Risk & Crisis in Global Economy.",
        achievements: [
            "Capstone Consulting Project: Developed Diversity, Equity & Inclusion (DEI) implementation strategies for the UK financial services sector.",
            "QHack Startup Challenge: Led a cross-functional team presenting a circular economy solution for waste tire management to venture capitalists.",
            "Academic Leadership: Presented Qnomics research project findings to QMUL senior management team and academic stakeholders."
        ],
        skills: ["Strategic Management", "Financial Analysis", "Consulting", "DEI Strategy", "Circular Economy"],
    },
    {
        slug: "be-mechanical-engineering-panjab-university",
        role: "BE Mechanical Engineering",
        company: "Panjab University, CCET",
        period: "Aug 2014 - May 2018",
        location: "India",
        description: "Graduated with a 2:1 honours degree, focusing on core mechanical engineering principles, manufacturing processes, and quality control.",
        achievements: [
            "JEE Main Qualifier: Ranked in the top 3% (50,000) among 1.7 million candidates in a highly competitive national engineering entrance examination."
        ],
        skills: ["Mechanical Engineering", "Quality Control", "Manufacturing Processes", "Metrology"],
    }
];

export const projects: Project[] = [
    {
        slug: "process-optimization-godrej",
        title: "Process Optimization & Cost Reduction Initiative",
        shortDescription: "An initiative at Godrej & Boyce to analyze and improve the manufacturing process of refrigerator compressor shafts.",
        longDescription: "This key consulting-style project involved a complete end-to-end value chain analysis of refrigerator compressor shaft manufacturing. The goal was to identify inefficiencies from raw material sourcing to final assembly and implement solutions to optimize the production flow.",
        technologies: ["Lean Manufacturing", "Value Chain Analysis", "Cost Reduction", "Process Improvement"],
        imageUrl: "https://images.unsplash.com/photo-1579621970795-87f91d908377?q=80&w=800&auto=format&fit=crop",
        githubUrl: "#",
        liveUrl: "#",
        problem: "The manufacturing process had multiple inefficiencies, including material handling touchpoints and a high defect rate, leading to increased operational costs.",
        solution: "Implemented lean manufacturing methodologies to reduce material handling touchpoints. The production flow was optimized by re-sequencing operations and introducing new quality checkpoints.",
        challenges: "Overcoming resistance to change from the production floor team and accurately identifying the root causes of defects across a multi-stage manufacturing process were the main challenges.",
        results: "Delivered £14,400 in annual cost savings and achieved a 20% reduction in defects. The comprehensive business case and recommendations were presented to and accepted by cross-functional stakeholders.",
        category: "Manufacturing",
        date: "2020-10-01",
        featured: true,
    },
    {
        slug: "npd-framework-godrej",
        title: "New Product Development & Quality Framework",
        shortDescription: "Led the quality strategy for the Deep Freezer product line launch at Godrej & Boyce, establishing a robust framework for quality and performance.",
        longDescription: "This project focused on establishing a world-class quality framework for a new product line. It involved collaboration with R&D, maintenance, and international teams to ensure the product met rigorous standards from day one.",
        technologies: ["NPD", "Quality Assurance", "Benchmarking", "Stage-Gate Control"],
        imageUrl: "https://images.unsplash.com/photo-1558494949-54fb20346899?q=80&w=800&auto=format&fit=crop",
        problem: "Launching a new product line required a comprehensive quality strategy to ensure it could compete with top competitor products on quality, reliability, and performance.",
        solution: "A multi-faceted quality framework was designed, which included competitive benchmarking, stage-gate controls, standard operating procedures (SOPs), and rigorous lifecycle testing protocols.",
        challenges: "Aligning quality parameters across different departments (R&D, production, maintenance) and ensuring the framework was robust enough for successful commercialization within a tight timeline.",
        results: "Delivered the project within a 6-month timeline, enabling a successful product commercialization. The established quality framework became a standard for future new product developments.",
        category: "Manufacturing",
        date: "2019-05-15",
    },
    {
        slug: "qhack-startup-challenge",
        title: "QHack Startup Challenge: Waste Tire Management",
        shortDescription: "Led a cross-functional team to develop a circular economy solution for waste tire management, presented to venture capitalists and university leadership.",
        longDescription: "As part of the QHack Startup Challenge at Queen Mary University of London, I led a team to tackle the environmental problem of waste tire management. We developed a business proposal for a sustainable infrastructure solution.",
        technologies: ["Circular Economy", "Sustainability", "Venture Capital Pitch", "Team Leadership"],
        imageUrl: "https://images.unsplash.com/photo-1611095790444-1dfa3c3e6b5a?q=80&w=800&auto=format&fit=crop",
        problem: "Over 40 million waste tires are generated annually in the UK, contributing significantly to landfill dependency and waste management costs.",
        solution: "Proposed a sustainable infrastructure that leverages waste tires to create construction materials. This solution reduces landfill dependency and turns a waste product into a valuable resource.",
        challenges: "Developing a financially viable business model while ensuring the technical feasibility of the proposed material creation process. Pitching a complex environmental solution to a diverse audience of VCs and academics.",
        results: "Successfully presented the circular economy solution to venture capitalists and senior QMUL leadership, receiving positive feedback on the innovative approach and potential for impact.",
        category: "University",
        date: "2024-03-20",
        featured: true,
    },
];

export const achievements: Achievement[] = [
    {
        title: "First Class Honours in MSc Business Management",
        description: "Achieved the highest classification for the Master's degree program, demonstrating academic excellence in strategic management, financial analysis, and organizational behavior.",
        year: "2024",
        issuer: "Queen Mary University of London"
    },
    {
        title: "National Top 10 Performance Ranking",
        description: "Consistently ranked among the top 10 advisors nationally (out of 1,000+) at Vodafone, exceeding all KPIs including sales, customer satisfaction, and retention by 200% monthly.",
        year: "2025",
        issuer: "Vodafone Three UK"
    },
    {
        title: "Regional Quality Excellence Recognition",
        description: "Awarded for exceptional leadership and significant contribution to quality improvements, including a 20% defect reduction, at Godrej & Boyce manufacturing plant.",
        year: "2019",
        issuer: "Godrej & Boyce Mfg. Co. Ltd."
    },
    {
        title: "JEE Main Qualifier",
        description: "Secured a rank in the top 3% among 1.7 million candidates in one of India's most competitive engineering entrance examinations, earning a place at a prestigious university.",
        year: "2014",
        issuer: "CBSE, India"
    }
];

export const aboutContent = {
    paragraph1: "I am a dedicated and tenacious individual, demonstrated by my academic and professional achievements. My journey started from a small town in India, and through relentless hard work, I have pursued opportunities across different industries and countries. This has equipped me with a unique blend of technical expertise, business acumen, and cross-cultural adaptability.",
    paragraph2: "Throughout my career, I've cultivated key skills that are highly transferable to any graduate role. My experiences include strong analytical and problem-solving skills, stakeholder management, and a proven ability to adapt and learn quickly. I thrive in dynamic environments and am passionate about applying my knowledge to solve complex business challenges.",
    paragraph3: "Beyond my professional and academic pursuits, I am a perpetual learner. I actively engage in extracurricular activities that complement and enhance my qualifications. I'm driven by a passion for continuous improvement, empathy, and sustainability, and I am always eager to learn and grow in all aspects of my life.",
    hobbies: [
        "Hiking & Trekking",
        "Reading (Novels, Case Studies)",
        "Chess & Sudoku",
        "Gym & Fitness",
        "Following Geopolitics",
        "Basketball",
        "Voluntary Work",
        "Entrepreneurship"
    ]
}

export const languages: Skill[] = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Native" },
    { name: "Punjabi", level: "Native" },
    { name: "German", level: "Beginner" },
];

export const extracurricularActivities: ExtracurricularActivity[] = [
    {
        icon: 'heart',
        category: 'Volunteering',
        categoryColor: 'bg-pink-100 text-pink-800',
        title: 'Community Service in Kangra',
        organization: 'Nagarkot Seva Sabha',
        period: 'Ongoing',
        description: 'As part of an NGO, I help train women from low-income families to make and sell sustainable goods, providing them with a means of earning and financial independence.',
        skillsDeveloped: ['Community Engagement', 'Social Entrepreneurship', 'Mentorship'],
        gridSpan: 'md:col-span-2',
    },
    {
        icon: 'briefcase',
        category: 'Entrepreneurship',
        categoryColor: 'bg-green-100 text-green-800',
        title: 'Family Business Turnaround',
        period: '2021',
        description: 'Revitalized the family’s food retail outlet post-COVID by redesigning the menu, managing finances, and increasing online visibility to overcome low tourist footfall.',
        skillsDeveloped: ['Business Strategy', 'Financial Management', 'Digital Marketing', 'Resilience'],
    },
     {
        icon: 'users',
        category: 'Leadership',
        categoryColor: 'bg-purple-100 text-purple-800',
        title: 'Capstone Project Lead',
        organization: 'Queen Mary University of London',
        period: '2024',
        description: 'Led a team in a consulting project for a UK firm, developing DEI strategies for the financial sector. Coordinated with C-level executives and presented findings to stakeholders.',
        skillsDeveloped: ['Project Management', 'Team Leadership', 'Client Relations', 'DEI Strategy'],
    },
    {
        icon: 'lightbulb',
        category: 'University Initiative',
        categoryColor: 'bg-yellow-100 text-yellow-800',
        title: 'qNomics Financial Literacy Project',
        organization: 'Queen Mary University of London',
        period: '2023-2024',
        description: 'Contributed to a university project to develop resources and guidance to help international students manage their finances and navigate financial challenges in the UK.',
        skillsDeveloped: ['Financial Literacy', 'Content Creation', 'Cross-Cultural Communication'],
        gridSpan: 'md:col-span-2',
    },
    {
        icon: 'book',
        category: 'Self-Development',
        categoryColor: 'bg-blue-100 text-blue-800',
        title: 'GMAT & Language Proficiency',
        period: '2021',
        description: 'Independently studied for and achieved a 710 GMAT score on the first attempt while working full-time. Later transitioned to a sales role to improve English proficiency for international career prospects.',
        skillsDeveloped: ['Self-Discipline', 'Time Management', 'Standardized Testing', 'Communication'],
    },
];