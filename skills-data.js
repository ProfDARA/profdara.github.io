const SKILL_NODES = [

  {id: 'data_science', label: 'Data Science', desc: 'Data analysis, ML pipelines, model evaluation.', skills: ['Python','Pandas','Machine Learning'], 
    certIds: [
      'data-literacy-datacamp',
      'ai-fundamentals-datacamp',
      'understanding-data-science-datacamp',
      'ai-ethics-datacamp',
      'understanding-data-engineering-datacamp',
      'penerapan-data-science-dicoding',
      'fundamental-deep-learning-dicoding',
      'fundamental-data-processing-dicoding',
      'python-data-analysis-dicoding',
      'data-science-basic-dicoding',
      'ai-basics-dicoding',
      'machine-learning-basic-dicoding'
    ]},

  {id: 'cloud_engineer', label: 'Cloud Engineer', desc: 'Cloud infra, data services, deployment and IaC.', skills: ['GCP','BigQuery','Terraform'], 
    certIds: [
      'machine-learning-implementation-google-cloud-dicoding',
      'google-cloud-computing-foundations-credly',
      'google-cloud-engineer-dicoding',
      'architecting-on-aws-dicoding',
      'aws-cloud-practitioner-essentials-dicoding'
    ]},

  {id: 'it_support', label: 'IT Support', desc: 'Helpdesk, troubleshooting, and system admin tasks.', skills: ['Troubleshooting','Linux','Customer Support'], 
    certIds: [
      'google-it-support-coursera',
      'google-cybersecurity-coursera'
    ]},

  {id: 'fullstack_dev', label: 'Full-stack Developer', desc: 'Frontend and backend web application development.', skills: ['JavaScript','Node.js','HTML/CSS'], 
    certIds: [
      'nodejs-application-developer-dicoding',
      'back-end-basic-js-dicoding',
      'basic-javascript-programming-dicoding',
      'fundamental-front-end-web-development-dicoding',
      'front-end-web-basics-dicoding',
      'kadin-idcamp-offline-frontend-2023',
      'github-basics-dicoding',
      'ux-design-basics-dicoding'
    ]},

  {id: 'administration', label: 'Administration', desc: 'Office automation, reporting, and coordination.', skills: ['Excel','Power BI','Reporting'], 
    certIds: [
      'introduction-to-excel-datacamp',
      'introduction-to-power-bi-datacamp',
      'project-management-basic-dicoding',
      'english-for-business-the-british-institute'
    ]},

  {id: 'others', label: 'Other', desc: 'Miscellaneous short courses and overviews.', skills: ['General'], certIds: [
      'understanding-chatgpt-datacamp',
      'sql-basics-dicoding',
      'devops-basic-dicoding',
      'programming-logic-101-dicoding'
    ]}
];
const SKILL_LINKS = [];




const SKILL_CERTS = [
  // --- DataCamp (from CSV + existing)
  {
    id: 'data-literacy-datacamp',
    name: 'Data Literacy',
    issuer: 'DataCamp',
    issued: '2025-11',
    url: 'https://www.datacamp.com/skill-verification/DL0031326339327',
    image: 'assets/certs/Data Literacy.png',
    skills: ['Analytics fundamentals', 'Data visualization', 'Data storytelling'],
    desc: 'Analytics fundamentals; creating effective visualizations; communicating insights through data storytelling.'
  },
  {
    id: 'ai-fundamentals-datacamp',
    name: 'AI Fundamentals',
    issuer: 'DataCamp',
    issued: '2025-11',
    url: 'https://www.datacamp.com/skill-verification/AIF0022429893962',
    image: 'assets/certs/AI fundamentals.png',
    skills: ['AI basics', 'Generative AI', 'Ethical generative AI'],
    desc: 'Foundational AI concepts; overview of generative models; high-level ethical considerations for AI.'
  },
  {
    id: 'understanding-data-science-datacamp',
    name: 'Understanding Data Science',
    issuer: 'DataCamp',
    issued: '2025-11',
    url: 'https://www.datacamp.com/skill-verification/UDS0028710042472',
    image: 'assets/certs/Understanding Data Science.png',
    skills: ['Data science concepts', 'Workflows', 'Data types & storage', 'Modeling basics'],
    desc: 'Core data science concepts and workflows; data types and storage; roles and model usage (A/B testing, basic ML) in decision-making.'
  },
  {
    id: 'ai-ethics-datacamp',
    name: 'AI Ethics',
    issuer: 'DataCamp',
    issued: '2025-11',
    url: 'https://www.datacamp.com/skill-verification/AIE0028194915592',
    image: 'assets/certs/AI Ethics.png',
    skills: ['Ethics frameworks', 'Bias & fairness', 'Transparency', 'Consent'],
    desc: 'Principles of data & AI ethics; identify risks across data lifecycle; considerations for bias, transparency and governance.'
  },
  {
    id: 'understanding-data-engineering-datacamp',
    name: 'Understanding Data Engineering',
    issuer: 'DataCamp',
    issued: '2025-11',
    url: 'https://www.datacamp.com/skill-verification/UDE0014688431999',
    image: 'assets/certs/Data Engineering.png',
    skills: ['Data pipelines', 'ETL', 'Data cleaning', 'Cataloging'],
    desc: 'Responsibilities of data engineers; fundamentals of pipelines, cleaning and cataloging; collaboration points with data scientists.'
  },
  {
    id: 'introduction-to-excel-datacamp',
    name: 'Introduction to Excel',
    issuer: 'DataCamp',
    issued: '2025-11',
    url: 'https://www.datacamp.com/skill-verification/ITE0011344223676',
    image: 'assets/certs/Excel.png',
    skills: ['Core Excel functions', 'Formulas', 'Charts', 'Data validation'],
    desc: 'Cells/tables/formulas; aggregation (SUM/AVERAGE/COUNT); formatting and validation; selecting appropriate charts for datasets.'
  },
  {
    id: 'introduction-to-power-bi-datacamp',
    name: 'Introduction to Power BI',
    issuer: 'DataCamp',
    issued: '2025-11',
    url: 'https://www.datacamp.com/skill-verification/ITPB0018227290634',
    image: 'assets/certs/Power BI.png',
    skills: ['Power BI reports', 'DAX basics', 'Visuals', 'Deployment'],
    desc: 'Power BI components (report/data/relationship views); DAX vs M basics; visual techniques (hierarchies, drilldowns); deployment via Power BI Service.'
  },
  {
    id: 'understanding-chatgpt-datacamp',
    name: 'Understanding ChatGPT',
    issuer: 'DataCamp',
    issued: '2025-11',
    url: 'https://www.datacamp.com/skill-verification/UCG0013653598785',
    image: 'assets/certs/chatGPT.png',
    skills: ['ChatGPT basics', 'Prompting techniques', 'Use cases', 'Ethics overview'],
    desc: 'How ChatGPT differs from classic chatbots; practical prompting techniques; core use cases and ethical/privacy considerations.'
  },

  // --- Dicoding (CSV entries)
  {
    id: 'penerapan-data-science-dicoding',
    name: 'Advanced Data Science',
    issuer: 'Dicoding',
    issued: '2025-06',
    url: 'https://www.dicoding.com/certificates/1OP82Q28LPQK',
    image: 'assets/certs/Data Science.png',
    skills: ['Project management', 'Dashboarding', 'Customer segmentation', 'Credit scoring', 'PySpark', 'Cloud deployment'],
    desc: 'Project management for DS; building business dashboards; customer segmentation and credit scoring models; big data processing with PySpark; cloud deployment of DS projects.'
  },
  {
    id: 'fundamental-deep-learning-dicoding',
    name: 'Fundamental Deep Learning',
    issuer: 'Dicoding',
    issued: '2025-06',
    url: 'https://www.dicoding.com/certificates/2VX3KG2RJXYQ',
    image: 'assets/certs/Deep Learning.png',
    skills: ['Neural networks', 'TensorFlow/Keras', 'NLP', 'Time series', 'Image classification', 'Recommendation systems', 'Generative AI', 'RL'],
    desc: 'Deep learning foundations; TensorFlow/Keras workflows; NLP, time-series, image classification; recommendation systems and generative AI; model conversion and deployment.'
  },
  {
    id: 'fundamental-data-processing-dicoding',
    name: 'Fundamental Data Processing',
    issuer: 'Dicoding',
    issued: '2025-05',
    url: 'https://www.dicoding.com/certificates/98XWEDK9LXM3',
    image: 'assets/certs/Data Processing.png',
    skills: ['Software engineering for data', 'Data repositories', 'ETL pipelines', 'Automation with Python'],
    desc: 'Software engineering practices for data projects; choosing data storage; full ETL pipeline (extract/transform/load); automation with Python.'
  },
  {
    id: 'python-data-analysis-dicoding',
    name: 'Python Data Analysis',
    issuer: 'Dicoding',
    issued: '2025-05',
    url: 'https://www.dicoding.com/certificates/2VX3KD49JXYQ',
    image: 'assets/certs/Data Analysis.png',
    skills: ['Descriptive statistics', 'Data wrangling', 'EDA', 'Visualization', 'Streamlit dashboards'],
    desc: 'Descriptive statistics and basic analysis; data wrangling techniques; exploratory data analysis; visualization best practices; building dashboards with Streamlit.'
  },
  {
    id: 'data-science-basic-dicoding',
    name: 'Data Science Basic',
    issuer: 'Dicoding',
    issued: '2024-10',
    url: 'https://www.dicoding.com/certificates/KEXL2NM6WZG2',
    image: 'assets/certs/Data Science Basic.png',
    skills: ['Data fundamentals', 'Analysis workflows', 'Intro ML', 'Tools overview'],
    desc: 'Intro to data fundamentals and analysis lifecycle; overview of tools (SQL/NoSQL/Excel/Tableau); basic machine learning concepts and portfolio steps.'
  },
  {
    id: 'nodejs-application-developer-dicoding',
    name: 'Node.js Application Developer',
    issuer: 'Dicoding',
    issued: '2024-08',
    url: 'https://www.dicoding.com/certificates/KEXL791WYXG2',
    image: 'assets/certs/Node.js App developer.png',
    skills: ['Node.js internals', 'Debugging', 'Package management', 'Async patterns', 'Streams', 'Testing'],
    desc: 'Node.js internals and best practices; debugging & diagnostics; package/dependency management; asynchronous patterns, streams, buffers, and unit testing.'
  },
  {
    id: 'architecting-on-aws-dicoding',
    name: 'Architecting on AWS',
    issuer: 'Dicoding',
    issued: '2024-08',
    url: 'https://www.dicoding.com/certificates/GRX539O1YZ0M',
    image: 'assets/certs/Architechting on AWS.png',
    skills: ['AWS architecture', 'Compute & storage', 'Networking', 'HA & scaling', 'IaC', 'Monitoring'],
    desc: 'AWS Well-Architected concepts; compute/storage/database services; VPC & networking; high availability and autoscaling; IaC and monitoring practices.'
  },
  {
    id: 'github-basics-dicoding',
    name: 'GitHub Basics',
    issuer: 'Dicoding',
    issued: '2024-05',
    url: 'https://www.dicoding.com/certificates/JMZVV0LR3ZN9',
    image: 'assets/certs/git.png',
    skills: ['Git fundamentals', 'Branching', 'Collaboration', 'Portfolio'],
    desc: 'Core Git/GitHub workflows; branching/merging/conflict resolution; collaboration practices and using GitHub as a portfolio.'
  },
  {
    id: 'machine-learning-implementation-google-cloud-dicoding',
    name: 'Machine Learning Implementation using Google Cloud',
    issuer: 'Dicoding',
    issued: '2024-05',
    url: 'https://www.dicoding.com/certificates/07Z60WMORZQR',
    image: 'assets/certs/Gcloud Machine Learning.png',
    skills: ['Model training & deployment', 'Vertex AI', 'Cloud storage', 'MLOps basics'],
    desc: 'Training and deploying TensorFlow models on GCP; Vertex AI usage; storage optimization; MLOps and production considerations.'
  },
  {
    id: 'ai-basics-dicoding',
    name: 'AI Basics',
    issuer: 'Dicoding',
    issued: '2024-05',
    url: 'https://www.dicoding.com/certificates/07Z6086KRZQR',
    image: 'assets/certs/AI Basic.png',
    skills: ['AI intro', 'Data for AI', 'ML intro', 'Deep learning fundamentals'],
    desc: 'Intro to AI, data roles in AI, basic ML workflows and an approachable deep learning overview.'
  },
  {
    id: 'google-cloud-engineer-dicoding',
    name: 'Google Cloud Engineer',
    issuer: 'Dicoding',
    issued: '2024-05',
    url: 'https://www.dicoding.com/certificates/MRZMELE8RPYQ',
    image: 'assets/certs/Gcloud Engineer.png',
    skills: ['GCP services', 'Compute & data', 'Networking', 'Monitoring', 'IAM'],
    desc: 'Fundamentals of GCP compute and data services; networking, monitoring & IAM; deploying cloud solutions.'
  },
  {
    id: 'project-management-basic-dicoding',
    name: 'Project Management Basic',
    issuer: 'Dicoding',
    issued: '2024-08',
    url: 'https://www.dicoding.com/certificates/NVP7O0MN4PR0',
    image: 'assets/certs/project.png',
    skills: ['PM fundamentals', 'Methodologies', 'Stakeholder management', 'Project lifecycle'],
    desc: 'Project management fundamentals; methodologies (Waterfall/Agile/Lean); stakeholder and PMO roles; closing projects.'
  },
  {
    id: 'machine-learning-basic-dicoding',
    name: 'Machine Learning Basics',
    issuer: 'Dicoding',
    issued: '2023-11',
    url: 'https://www.dicoding.com/certificates/MRZML090NXYQ',
    image: 'assets/certs/Machine Learning Basic.png',
    skills: ['Supervised learning', 'Unsupervised learning', 'Feature engineering', 'Tuning'],
    desc: 'ML workflow from data collection to evaluation; supervised/unsupervised techniques; feature engineering and hyperparameter tuning.'
  },

  // --- Other Dicoding / Full-stack / Front-end / JS entries
  {
    id: 'ux-design-basics-dicoding',
    name: 'UX Design Basics',
    issuer: 'Dicoding',
    issued: '2023-10',
    url: 'https://www.dicoding.com/certificates/KEXLLNJWWXG2',
    image: 'assets/certs/UX Design.png',
    skills: ['Design thinking', 'User research', 'Wireframing', 'Prototyping'],
    desc: 'UX fundamentals: empathy, user journeys, wireframes, high-fidelity prototypes and usability testing.'
  },
  {
    id: 'sql-basics-dicoding',
    name: 'Structured Query Language (SQL) Basics',
    issuer: 'Dicoding',
    issued: '2023-08',
    url: 'https://www.dicoding.com/certificates/81P239J1JXOY',
    image: 'assets/certs/sql.png',
    skills: ['SQL basics', 'DDL/DML', 'Basic queries', 'DBMS concepts'],
    desc: 'Intro to relational DBs and SQL; DDL/DML basics; common queries (SELECT/INSERT/UPDATE/DELETE) and DBMS overview.'
  },
  {
    id: 'back-end-basic-js-dicoding',
    name: 'Back-End Basic with JavaScript',
    issuer: 'Dicoding',
    issued: '2023-07',
    url: 'https://www.dicoding.com/certificates/2VX3JMLDNPYQ',
    image: 'assets/certs/back end basic.png',
    skills: ['Node.js basics', 'Web services', 'Deployment', 'API testing'],
    desc: 'Backend fundamentals: Node.js, building RESTful services, deploy to EC2, and API testing with Postman.'
  },
  {
    id: 'kotlin-basic-programming-dicoding',
    name: 'Kotlin Basic Programming',
    issuer: 'Dicoding',
    issued: '2023-06',
    url: 'https://www.dicoding.com/certificates/07Z6VO282XQR',
    image: 'assets/certs/kotlin.png',
    skills: ['Kotlin fundamentals', 'OOP', 'Coroutines', 'Functional features'],
    desc: 'Kotlin fundamentals including OOP, coroutines, generics and functional programming features.'
  },
  {
    id: 'basic-javascript-programming-dicoding',
    name: 'Basic Javascript Programming',
    issuer: 'Dicoding',
    issued: '2024-04',
    url: 'https://www.dicoding.com/certificates/07Z60RR9WZQR',
    image: 'assets/certs/JS basic.png',
    skills: ['JS fundamentals', 'Data structures', 'OOP', 'Async'],
    desc: 'JavaScript fundamentals: syntax, data structures, OOP, functional programming, asynchronous programming and testing.'
  },
  {
    id: 'aws-cloud-practitioner-essentials-dicoding',
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'Dicoding',
    issued: '2023-04',
    url: 'https://www.dicoding.com/certificates/QLZ9QWJ39Z5D',
    image: 'assets/certs/Cloud Practice.png',
    skills: ['AWS fundamentals', 'Pricing & support', 'Security', 'Migration basics'],
    desc: 'Fundamentals of AWS services, pricing/support models, security basics and migration concepts aligned to Cloud Practitioner.'
  },
  {
    id: 'fundamental-front-end-web-development-dicoding',
    name: 'Fundamental Front-End Web Development',
    issuer: 'Dicoding',
    issued: '2023-04',
    url: 'https://www.dicoding.com/certificates/QLZ9QWJR7Z5D',
    image: 'assets/certs/fundamental FE.png',
    skills: ['ES6', 'Web Components', 'Bundling', 'Async requests'],
    desc: 'Modern front-end fundamentals: ES6 features, web components, bundling, and async HTTP requests (fetch).'
  },
  {
    id: 'front-end-web-basics-dicoding',
    name: 'Front-End Web Basics',
    issuer: 'Dicoding',
    issued: '2023-03',
    url: 'https://www.dicoding.com/certificates/81P23E94JXOY',
    image: 'assets/certs/front end basics.png',
    skills: ['DOM/BOM', 'Events', 'Web storage'],
    desc: 'DOM/BOM manipulation, event-driven interactivity, and browser web storage techniques.'
  },
  {
    id: 'devops-basic-dicoding',
    name: 'DevOps Basic',
    issuer: 'Dicoding',
    issued: '2022-12',
    url: 'https://www.dicoding.com/certificates/4EXGNMWQDZRL',
    image: 'assets/certs/devops basic.png',
    skills: ['DevOps principles', 'CALMS', 'Pipelines', 'Tools overview'],
    desc: 'DevOps principles and culture (CALMS), CI/CD pipeline concepts and common DevOps tools.'
  },
  {
    id: 'programming-logic-101-dicoding',
    name: 'Programming Logic 101',
    issuer: 'Dicoding',
    issued: '2024-05',
    url: 'https://www.dicoding.com/certificates/72ZDKDMLLPYW',
    image: 'assets/certs/programming 101.png',
    skills: ['Logic basics', 'Computational thinking', 'Basic algorithms'],
    desc: 'Logic gates and computational thinking fundamentals; basic algorithmic problem solving.'
  },
  {
    id: 'kadin-idcamp-offline-frontend-2023',
    name: 'Offline Training Front-End Web Developer (IDCamp x KADIN)',
    issuer: 'KADIN / IDCamp',
    issued: '2023-05',
    url: '',
    image: 'assets/certs/offline training.png',
    skills: ['HTML', 'CSS', 'JavaScript', 'Frameworks (React/Vue)', 'UI/UX basics'],
    desc: 'Intensive offline front-end training: core HTML/CSS/JS, modern frameworks and UI/UX considerations for industry readiness.'
  },

  // --- Coursera / Google / Credly / Other platform entries (CSV)
  {
    id: 'google-it-support-coursera',
    name: 'Google IT Support',
    issuer: 'Coursera',
    issued: '2024-03',
    url: 'https://coursera.org/share/dfee4abb6019cc508704ecbf5c2b2c14',
    image: 'assets/certs/Google IT Support.png',
    skills: ['Helpdesk', 'Hardware & networking', 'Linux', 'Customer service'],
    desc: 'Practical IT support skills: troubleshooting hardware/networking, using Linux and providing end-to-end customer support.'
  },
  {
    id: 'google-cybersecurity-coursera',
    name: 'Google Cybersecurity',
    issuer: 'Coursera',
    issued: '2024-07',
    url: 'https://coursera.org/share/b5b12d110fedca285b319f45b8b97383',
    image: 'assets/certs/IT Cysec.png',
    skills: ['Cybersecurity fundamentals', 'Threats & mitigations', 'SIEM', 'Hands-on security tools'],
    desc: 'Fundamentals of cybersecurity: threat/vulnerability identification, mitigation strategies and practical exposure to SIEM and security tooling.'
  },
  {
    id: 'google-cloud-computing-foundations-credly',
    name: 'Google Cloud Computing Foundations Certificate',
    issuer: 'Google Cloud / Credly',
    issued: '2024-05',
    url: 'https://www.credly.com/badges/00912830-1fe7-4b13-824c-06abbc6e3ef6/public_url',
    image: 'assets/certs/GCLOUD.png',
    skills: ['Cloud fundamentals', 'Networking & security', 'Data & ML basics', 'Load balancing'],
    desc: 'Comprehensive foundations: cloud fundamentals, networking & security, data/ML basics and practical skill badges for GCP.'
  },

  // --- Others / miscellaneous (Dicoding + The British Institute)
  {
    id: 'english-for-business-the-british-institute',
    name: 'English for Business',
    issuer: 'The British Institute',
    issued: '2024-07',
    url: '',
    image: 'assets/certs/TBI.png',
    skills: ['Business English', 'Professional communication', 'Presentations'],
    desc: 'Business English skills for workplace communication, presentations and professional correspondence.'
  },
];

// expose to window for compatibility with tree.js which reads window.SKILL_CERTS
if(typeof window !== 'undefined'){
  window.SKILL_CERTS = SKILL_CERTS;
  window.SKILL_NODES = SKILL_NODES;
  window.SKILL_LINKS = SKILL_LINKS;
}


