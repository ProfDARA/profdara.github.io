// File: /mnt/data/skills-data.js
// Skill nodes and certificate metadata for the site.
// Note: layout coordinates were removed (cards now drive the UI), keep semantic fields only.
const SKILL_NODES = [
  // Top-level roles used to group certifications in the UI
  {id: 'data_science', label: 'Data Science', desc: 'Data analysis, ML pipelines, model evaluation.', skills: ['Python','Pandas','Machine Learning'], certIds: ['datacamp-ai-fundamentals','datacamp-supervised-sklearn','datacamp-unsupervised','dicoding-ds-terapan','dqlab-r','datacamp-data-literacy']},
  {id: 'cloud_engineer', label: 'Cloud Engineer', desc: 'Cloud infra, data services, deployment and IaC.', skills: ['GCP','BigQuery','Terraform'], certIds: ['credly-gcpf','dicoding-gc-engineer','google-terraform','google-network','aws-architect']},
  {id: 'it_support', label: 'IT Support', desc: 'Helpdesk, troubleshooting, and system admin tasks.', skills: ['Troubleshooting','Linux','Customer Support'], certIds: ['google-it-support','coursera-sysadmin','google-it-security','coursera-networks-security']},
  {id: 'administration', label: 'Administration', desc: 'Office automation, reporting, and coordination.', skills: ['Excel','Power BI','Reporting'], certIds: ['datacamp-excel','datacamp-powerbi']},
  {id: 'fullstack_dev', label: 'Full-stack Developer', desc: 'Frontend and backend web application development.', skills: ['JavaScript','Node.js','HTML/CSS'], certIds: ['dicoding-frontend','nodejs-dev','idcamp-frontend']}
];

// Links are not used by the simplified card UI but keep an empty array to avoid undefined references
const SKILL_LINKS = [];

// SKILL_CERTS: a global array used by `tree.js` to render certificate list and link nodes.
// This maps the certId values used in nodes/links to human-friendly metadata.
const SKILL_CERTS = [
  {id:'datacamp-ai-fundamentals', name:'AI Fundamentals', issuer:'DataCamp', issued:'2023', url:'https://www.datacamp.com/skill-verification/AIF0022429893962', image:'assets/certs/AI fundamentals.png', skills:['AI Basics','Math']},
  {id:'datacamp-supervised-sklearn', name:'Supervised Learning (scikit-learn)', issuer:'DataCamp', issued:'2023', url:'#', skills:['Supervised Learning','scikit-learn']},
  {id:'datacamp-unsupervised', name:'Unsupervised Learning', issuer:'DataCamp', issued:'2023', url:'#', skills:['Clustering','Dimensionality Reduction']},
  {id:'dicoding-ds-terapan', name:'Data Science Terapan', issuer:'Dicoding', issued:'2020', url:'#', skills:['Python','ML Projects']},
  {id:'dqlab-r', name:'R Fundamental', issuer:'DQLab', issued:'2021', url:'#', skills:['R','Statistics']},

  {id:'credly-gcpf', name:'GCP Foundation', issuer:'Credly', issued:'2023', url:'#', skills:['GCP','Cloud Basics']},
  {id:'dicoding-gc-engineer', name:'Google Cloud Engineer', issuer:'Dicoding', issued:'2023', url:'#', skills:['GCP','IaC']},
  {id:'google-terraform', name:'Terraform on GCP', issuer:'Google', issued:'2023', url:'#', skills:['Terraform','IaC']},
  {id:'google-network', name:'GCP Networking', issuer:'Google', issued:'2023', url:'#', skills:['Networking','GCP']},
  {id:'aws-architect', name:'Architecting on AWS', issuer:'Dicoding', issued:'2022', url:'#', skills:['AWS','Architecture']},

  {id:'google-it-support', name:'Google IT Support', issuer:'Google', issued:'2021', url:'#', skills:['Helpdesk','Troubleshooting']},
  {id:'coursera-sysadmin', name:'System Administration', issuer:'Coursera', issued:'2022', url:'#', skills:['SysAdmin','Monitoring']},
  {id:'google-it-security', name:'Google IT Security', issuer:'Google', issued:'2022', url:'#', skills:['Security','Hardening']},
  {id:'coursera-networks-security', name:'Network Security', issuer:'Coursera', issued:'2022', url:'#', skills:['Network Security']},

  {id:'datacamp-excel', name:'Introduction to Excel', issuer:'DataCamp', issued:'2020', url:'#', skills:['Excel','Reporting']},
  {id:'datacamp-powerbi', name:'Introduction to Power BI', issuer:'DataCamp', issued:'2021', url:'#', skills:['Power BI','Visualization']},
  {id:'datacamp-data-literacy', name:'Data Literacy', issuer:'DataCamp', issued:'2020', url:'https://www.datacamp.com/skill-verification/DL0031326339327', image:'assets/certs/Data Literacy.png', skills:['Analytics Fundamentals','Data Visualization','Data Storytelling']},

  {id:'dicoding-frontend', name:'Front-End Web Dev', issuer:'Dicoding', issued:'2022', url:'#', skills:['HTML','CSS','JS']},
  {id:'nodejs-dev', name:'Node.js Developer', issuer:'Dicoding', issued:'2022', url:'#', skills:['Node.js','APIs']},
  {id:'idcamp-frontend', name:'Offline Front-End Training', issuer:'IDCamp', issued:'2021', url:'#', skills:['Frontend','Practice']}
];

// expose to window for compatibility with tree.js which reads window.SKILL_CERTS
if(typeof window !== 'undefined'){
  window.SKILL_CERTS = SKILL_CERTS;
  window.SKILL_NODES = SKILL_NODES;
  window.SKILL_LINKS = SKILL_LINKS;
}


