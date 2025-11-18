// File: /mnt/data/skills-data.js
// Reworked node positions and links so Data Science -> (Python, R) -> AI Fundamental -> AI branches
const SKILL_NODES = [

  // other roles kept vertically separated on the left
  {id: 'data_science', label: 'Data Science', x: 100, y: 100, color: '#34d399', desc: 'Data analysis, ML pipelines, model evaluation.', skills: ['Python','Pandas','Machine Learning'], certIds: ['datacamp-ai-fundamentals','datacamp-supervised-sklearn','datacamp-unsupervised','dicoding-ds-terapan','dqlab-r']},
  {id: 'cloud_engineer', label: 'Cloud Engineer', x: 100, y: 300, color: '#60a5fa', desc: 'Cloud infra, data services, deployment and IaC.', skills: ['GCP','BigQuery','Terraform'], certIds: ['credly-gcpf','dicoding-gc-engineer','google-terraform','google-network','aws-architect']},
  {id: 'it_support', label: 'IT Support', x: 100, y: 500, color: '#83c5be', desc: 'Helpdesk, troubleshooting, and system admin tasks.', skills: ['Troubleshooting','Linux','Customer Support'], certIds: ['google-it-support','coursera-sysadmin','google-it-security','coursera-networks-security']},
  {id: 'administration', label: 'Administration', x: 100, y: 700, color: '#94a3b8', desc: 'Office automation, reporting, and coordination.', skills: ['Excel','Power BI','Reporting'], certIds: ['datacamp-excel','datacamp-powerbi','datacamp-data-literacy']},
  {id: 'fullstack_dev', label: 'Full-stack Developer', x: 100, y: 900, color: '#f59e0b', desc: 'Frontend and backend web application development.', skills: ['JavaScript','Node.js','HTML/CSS'], certIds: ['dicoding-frontend','nodejs-dev','idcamp-frontend']},



  // clear, ordered sub-nodes (left-to-right progression)
  {id: 'ds_python', label: 'Python', x: 320, y: 10, color: '#60a5fa', desc: 'Python programming for data processing and ML.', skills: ['Python','pandas'], isSkillNode:true},
  {id: 'ds_r', label: 'R Fundamental', x: 320, y: 190, color: '#60a5fa', desc: 'R for statistical analysis and data visualisation.', skills: ['R'], isSkillNode:true},
  {id: 'ai_fundamental', label: 'AI Fundamental', x: 740, y: 140, color: '#f472b6', desc: 'Foundations of AI and model thinking.', skills: ['AI Basics'], isSkillNode:true},
  {id: 'ai_supervised', label: 'Supervised Learning', x: 920, y: 10, color: '#f59e0b', desc: 'Supervised models and evaluation.', skills: ['Supervised Learning'], isSkillNode:true},
  {id: 'ai_terapan', label: 'AI Terapan', x: 920, y: 180, color: '#a78bfa', desc: 'Applied AI solutions and deployment.', skills: ['Applied AI'], isSkillNode:true},


  // Certificate nodes placed to the far right to avoid crowding
  {id: 'cert_datacamp_ai_fundamentals', label: 'AI Fundamentals', x: 1140, y: 140, color: '#e6fffa', desc: 'DataCamp - AI Fundamentals', certId: 'datacamp-ai-fundamentals'},
  {id: 'cert_datacamp_supervised_sklearn', label: 'Supervised (scikit-learn)', x: 1140, y: 100, color: '#e6fffa', desc: 'DataCamp - Supervised Learning with scikit-learn', certId: 'datacamp-supervised-sklearn'},
  {id: 'cert_datacamp_unsupervised', label: 'Unsupervised Learning', x: 1140, y: 180, color: '#e6fffa', desc: 'DataCamp - Unsupervised Learning in Python', certId: 'datacamp-unsupervised'},
  {id: 'cert_dicoding_ds_terapan', label: 'Data Science Terapan', x: 1140, y: 220, color: '#e6fffa', desc: 'Dicoding - Data Science Terapan', certId: 'dicoding-ds-terapan'},
  {id: 'cert_dqlab_r', label: 'R Fundamental', x: 1140, y: 260, color: '#e6fffa', desc: 'DQLab - R Fundamental for Data Science', certId: 'dqlab-r'},

  // Cloud certs (keep grouping to the right of cloud role)
  {id: 'cert_credly_gcpf', label: 'GCP Foundation', x: 340, y: 320, color: '#eef2ff', desc: 'Credly - Google Cloud Computing Foundation', certId: 'credly-gcpf'},
  {id: 'cert_dicoding_gc_engineer', label: 'Google Cloud Engineer', x: 460, y: 320, color: '#eef2ff', desc: 'Dicoding - Menjadi Google Cloud Engineer', certId: 'dicoding-gc-engineer'},
  {id: 'cert_google_terraform', label: 'Terraform on GCP', x: 580, y: 320, color: '#eef2ff', desc: 'Google - Build Infrastructure with Terraform on Google Cloud', certId: 'google-terraform'},
  {id: 'cert_google_network', label: 'GCP Networking', x: 700, y: 320, color: '#eef2ff', desc: 'Google - Develop your Google Cloud Network', certId: 'google-network'},
  {id: 'cert_aws_architect', label: 'Architecting on AWS', x: 820, y: 320, color: '#eef2ff', desc: 'Dicoding - Architecting on AWS', certId: 'aws-architect'},

  // Other certs kept as-is (positions tweaked)
  {id: 'cert_google_it_support', label: 'Google IT Support', x: 340, y: 480, color: '#f0f9ff', desc: 'Google - IT Support Specialization', certId: 'google-it-support'},
  {id: 'cert_coursera_sysadmin', label: 'System Administration', x: 460, y: 480, color: '#f0f9ff', desc: 'Coursera - System Administration and IT Infrastructure Services', certId: 'coursera-sysadmin'},
  {id: 'cert_google_it_security', label: 'Google IT Security', x: 580, y: 480, color: '#f0f9ff', desc: 'Google - IT Security', certId: 'google-it-security'},
  {id: 'cert_coursera_networks_security', label: 'Network Security', x: 700, y: 480, color: '#f0f9ff', desc: 'Coursera - Connect and Protect: Networks and Network Security', certId: 'coursera-networks-security'},

  {id: 'cert_datacamp_excel', label: 'Introduction to Excel', x: 460, y: 660, color: '#fff7ed', desc: 'DataCamp - Introduction to Excel', certId: 'datacamp-excel'},
  {id: 'cert_datacamp_powerbi', label: 'Introduction to Power BI', x: 580, y: 660, color: '#fff7ed', desc: 'DataCamp - Introduction to Power BI', certId: 'datacamp-powerbi'},
  {id: 'cert_datacamp_data_literacy', label: 'Data Literacy', x: 700, y: 660, color: '#fff7ed', desc: 'DataCamp - Data Literacy', certId: 'datacamp-data-literacy'},

  {id: 'cert_dicoding_frontend', label: 'Front-End Web Dev', x: 460, y: 840, color: '#fff1f2', desc: 'Dicoding - Fundamental Front-End Web Development', certId: 'dicoding-frontend'},
  {id: 'cert_nodejs_dev', label: 'Node.js Developer', x: 580, y: 840, color: '#fff1f2', desc: 'Dicoding - Node.js Application Developer', certId: 'nodejs-dev'},
  {id: 'cert_idcamp_frontend', label: 'Offline Front-End Training', x: 700, y: 840, color: '#fff1f2', desc: 'IDCamp - Offline Training Front-End Web', certId: 'idcamp-frontend'}
];

// Links: make python & R point to AI Fundamental (both ways conceptually by showing ai_fundamental as next node)
const SKILL_LINKS = [
  // role progression (vertical on left)
  // Data Science branching -> Python, R
  {source: 'data_science', target: 'ds_python'},
  {source: 'data_science', target: 'ds_r'},

  // both Python and R progress into AI fundamentals
  {source: 'ds_python', target: 'ai_fundamental'},
  {source: 'ds_r', target: 'ai_fundamental'},

  // AI Fundamental branches
  {source: 'ai_fundamental', target: 'ai_supervised'},
  {source: 'ai_fundamental', target: 'ai_terapan'},

  // role -> certificate links for data science (kept, but positioned so they don't overlap)
  {source: 'ai_fundamental', target: 'cert_datacamp_ai_fundamentals'},
  {source: 'ai_supervised', target: 'cert_datacamp_supervised_sklearn'},
  {source: 'ai_terapan', target: 'cert_datacamp_unsupervised'},
  {source: 'ai_fundamental', target: 'cert_dicoding_ds_terapan'},
  {source: 'ai_fundamental', target: 'cert_dqlab_r'},

  // cloud certs
  {source: 'cloud_engineer', target: 'cert_credly_gcpf'},
  {source: 'cloud_engineer', target: 'cert_dicoding_gc_engineer'},
  {source: 'cloud_engineer', target: 'cert_google_terraform'},
  {source: 'cloud_engineer', target: 'cert_google_network'},
  {source: 'cloud_engineer', target: 'cert_aws_architect'},

  // it support certs
  {source: 'it_support', target: 'cert_google_it_support'},
  {source: 'cert_google_it_support', target: 'cert_google_it_security'},
  {source: 'cert_google_it_security', target: 'cert_coursera_networks_security'},
  {source: 'cert_coursera_networks_security', target: 'cert_coursera_sysadmin'},


  // admin certs
  {source: 'administration', target: 'cert_datacamp_excel'},
  {source: 'administration', target: 'cert_datacamp_powerbi'},
  {source: 'administration', target: 'cert_datacamp_data_literacy'},

  // fullstack certs
  {source: 'fullstack_dev', target: 'cert_dicoding_frontend'},
  {source: 'fullstack_dev', target: 'cert_nodejs_dev'},
  {source: 'fullstack_dev', target: 'cert_idcamp_frontend'}
];

// SKILL_CERTS: a global array used by `tree.js` to render certificate list and link nodes.
// This maps the certId values used in nodes/links to human-friendly metadata.
const SKILL_CERTS = [
  {id:'datacamp-ai-fundamentals', name:'AI Fundamentals', issuer:'DataCamp', issued:'2023', url:'#', skills:['AI Basics','Math']},
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
  {id:'datacamp-data-literacy', name:'Data Literacy', issuer:'DataCamp', issued:'2020', url:'#', skills:['Data Literacy']},

  {id:'dicoding-frontend', name:'Front-End Web Dev', issuer:'Dicoding', issued:'2022', url:'#', skills:['HTML','CSS','JS']},
  {id:'nodejs-dev', name:'Node.js Developer', issuer:'Dicoding', issued:'2022', url:'#', skills:['Node.js','APIs']},
  {id:'idcamp-frontend', name:'Offline Front-End Training', issuer:'IDCamp', issued:'2021', url:'#', skills:['Frontend','Practice']}
];

// expose to window for compatibility with tree.js which reads window.SKILL_CERTS
if(typeof window !== 'undefined') window.SKILL_CERTS = SKILL_CERTS;


