// File: /mnt/data/skills-data.js
// Skill nodes and certificate metadata for the site.
// Note: layout coordinates were removed (cards now drive the UI), keep semantic fields only.
const SKILL_NODES = [
  // Top-level roles used to group certifications in the UI
  {id: 'data_science', label: 'Data Science', desc: 'Data analysis, ML pipelines, model evaluation.', skills: ['Python','Pandas','Machine Learning'], 
    certIds: ['datacamp-ai-fundamentals',
      'datacamp-supervised-sklearn',
      'datacamp-unsupervised',
      'dicoding-ds-terapan',
      'dqlab-r',
      'datacamp-data-literacy',
      'datacamp-understanding-data-engineering']},


  {id: 'cloud_engineer', label: 'Cloud Engineer', desc: 'Cloud infra, data services, deployment and IaC.', skills: ['GCP','BigQuery','Terraform'], 
    certIds: ['credly-gcpf',
      'dicoding-gc-engineer',
      'google-terraform',
      'google-network',
      'aws-architect']},


  {id: 'it_support', label: 'IT Support', desc: 'Helpdesk, troubleshooting, and system admin tasks.', skills: ['Troubleshooting','Linux','Customer Support'], 
    certIds: ['google-it-support',
      'coursera-sysadmin',
      'google-it-security',
      'coursera-networks-security']},


  {id: 'administration', label: 'Administration', desc: 'Office automation, reporting, and coordination.', skills: ['Excel','Power BI','Reporting'], 
    certIds: ['datacamp-excel',
      'datacamp-powerbi']},


  {id: 'fullstack_dev', label: 'Full-stack Developer', desc: 'Frontend and backend web application development.', skills: ['JavaScript','Node.js','HTML/CSS'], 
    certIds: ['dicoding-frontend',
      'nodejs-dev',
      'idcamp-frontend']}
];
const SKILL_LINKS = [];




const SKILL_CERTS = [
  {id:'datacamp-ai-fundamentals', name:'AI Fundamentals', issuer:'DataCamp', issued:'2025', url:'https://www.datacamp.com/skill-verification/AIF0022429893962', image:'assets/certs/AI fundamentals.png', skills:['AI Basics','Generative AI'], desc: 'AI Fundamentals, Generative AI, ethical Generative AI'},
  {id:'datacamp-supervised-sklearn', name:'Supervised Learning (scikit-learn)', issuer:'DataCamp', issued:'2023', url:'#', skills:['Supervised Learning','scikit-learn']},
  {id:'datacamp-unsupervised', name:'Unsupervised Learning', issuer:'DataCamp', issued:'2023', url:'#', skills:['Clustering','Dimensionality Reduction']},
  {id:'dicoding-ds-terapan', name:'Data Science Terapan', issuer:'Dicoding', issued:'2020', url:'#', skills:['Python','ML Projects']},
  {id:'dqlab-r', name:'R Fundamental', issuer:'DQLab', issued:'2021', url:'#', skills:['R','Statistics']},
  {id:'datacamp-understanding-data-engineering', name:'Understanding Data Engineering', issuer:'DataCamp', issued:'2025', url:'https://www.datacamp.com/skill-verification/UDE0014688431999', image:'assets/certs/Data Engineering.png', skills:['Data Engineering','Pipelines'], desc: 'Data engineering responsibilities, data collection/cleaning/cataloging, and foundations for collaborating with data engineers.'},

  {id:'credly-gcpf', name:'GCP Foundation', issuer:'Credly', issued:'2023', url:'#', skills:['GCP','Cloud Basics']},
  {id:'dicoding-gc-engineer', name:'Google Cloud Engineer', issuer:'Dicoding', issued:'2023', url:'#', skills:['GCP','IaC']},
  {id:'google-terraform', name:'Terraform on GCP', issuer:'Google', issued:'2023', url:'#', skills:['Terraform','IaC']},
  {id:'google-network', name:'GCP Networking', issuer:'Google', issued:'2023', url:'#', skills:['Networking','GCP']},
  {id:'aws-architect', name:'Architecting on AWS', issuer:'Dicoding', issued:'2022', url:'#', skills:['AWS','Architecture']},

  {id:'google-it-support', name:'Google IT Support', issuer:'Google', issued:'2021', url:'#', skills:['Helpdesk','Troubleshooting']},
  {id:'coursera-sysadmin', name:'System Administration', issuer:'Coursera', issued:'2022', url:'#', skills:['SysAdmin','Monitoring']},
  {id:'google-it-security', name:'Google IT Security', issuer:'Google', issued:'2022', url:'#', skills:['Security','Hardening']},
  {id:'coursera-networks-security', name:'Network Security', issuer:'Coursera', issued:'2022', url:'#', skills:['Network Security']},

  {id:'datacamp-excel', name:'Introduction to Excel', issuer:'DataCamp', issued:'2025', url:'https://www.datacamp.com/skill-verification/ITE0011344223676', image:'assets/certs/Excel.png', skills:['Excel','Reporting'], desc: 'Core Excel concepts, formulas, aggregation functions, data formatting, validation, and visualization choices.'},
  {id:'datacamp-powerbi', name:'Introduction to Power BI', issuer:'DataCamp', issued:'2025', url:'https://www.datacamp.com/skill-verification/ITPB0018227290634', image:'assets/certs/Power BI.png', skills:['Power BI','Visualization'], desc: 'Power BI components, report building, DAX vs M, visualization techniques, and deployment options.'},
  {id:'datacamp-data-literacy', name:'Data Literacy', issuer:'DataCamp', issued:'2025', url:'https://www.datacamp.com/skill-verification/DL0031326339327', image:'assets/certs/Data Literacy.png', skills:['Analytics Fundamentals','Data Visualization','Data Storytelling'], desc: 'Analytics fundamentals, data visualization, and data storytelling for communicating insights.'},

  {id:'dicoding-frontend', name:'Front-End Web Dev', issuer:'Dicoding', issued:'2022', url:'#', skills:['HTML','CSS','JS']},
  {id:'nodejs-dev', name:'Node.js Developer', issuer:'Dicoding', issued:'2022', url:'#', skills:['Node.js','APIs']},
  {id:'idcamp-frontend', name:'Offline Front-End Training', issuer:'IDCamp', issued:'2021', url:'#', skills:['Frontend','Practice']}
  ,{id:'datacamp-understanding-data-science', name:'Understanding Data Science', issuer:'DataCamp', issued:'2025', url:'https://www.datacamp.com/skill-verification/UDS0028710042472', image:'assets/certs/Understanding Data Science.png', skills:['Data Science Concepts','Workflows'], desc: 'Core data science concepts, workflows, roles, common tools, data types and sources, and how modeling techniques inform decisions.'}
  ,{id:'datacamp-ai-ethics', name:'AI Ethics', issuer:'DataCamp', issued:'2025', url:'https://www.datacamp.com/skill-verification/AIE0028194915592', image:'assets/certs/AI Ethics.png', skills:['AI Ethics','Responsible AI'], desc: 'Principles of data and AI ethics, identifying risks across the data lifecycle, and applying transparency, consent, and ownership practices.'}
  ,{id:'datacamp-understanding-chatgpt', name:'Understanding ChatGPT', issuer:'DataCamp', issued:'2025', url:'https://www.datacamp.com/skill-verification/UCG0013653598785', image:'assets/certs/chatGPT.png', skills:['ChatGPT','Prompting'], desc: 'Overview of ChatGPT, strengths/limitations, prompt-writing techniques, and practical business use cases and considerations.'}
  
];

// expose to window for compatibility with tree.js which reads window.SKILL_CERTS
if(typeof window !== 'undefined'){
  window.SKILL_CERTS = SKILL_CERTS;
  window.SKILL_NODES = SKILL_NODES;
  window.SKILL_LINKS = SKILL_LINKS;
}


