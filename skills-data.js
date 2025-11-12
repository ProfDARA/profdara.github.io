// Data file for skills and links - role-based layout
const SKILL_NODES = [
  // Five role-based nodes. Each role includes a list of representative skills and certIds
  {id: 'data_science', label: 'Data Science', x: 400, y: 140, color: '#34d399', desc: 'Data analysis, ML pipelines, model evaluation.', skills: ['Python','Pandas','Machine Learning'], certIds: ['datacamp-ai-fundamentals','datacamp-supervised-sklearn','datacamp-unsupervised','dicoding-ds-terapan','dqlab-r']},
  // Data Science sub-nodes (structured/runtut)
  {id: 'ds_python', label: 'Python', x: 700, y: 140, color: '#60a5fa', desc: 'Python programming for data processing and ML.', skills: ['Python','pandas'], isSkillNode:true},
  {id: 'ds_r', label: 'R Fundamental', x: 700, y: 200, color: '#60a5fa', desc: 'R for statistical analysis and data visualisation.', skills: ['R'], isSkillNode:true},
  {id: 'ai_fundamental', label: 'AI Fundamental', x: 700, y: 260, color: '#f472b6', desc: 'Foundations of AI and model thinking.', skills: ['AI Basics'], isSkillNode:true},
  {id: 'ai_supervised', label: 'Supervised Learning', x: 860, y: 320, color: '#f59e0b', desc: 'Supervised models and evaluation.', skills: ['Supervised Learning'], isSkillNode:true},
  {id: 'ai_terapan', label: 'AI Terapan', x: 860, y: 380, color: '#a78bfa', desc: 'Applied AI solutions and deployment.', skills: ['Applied AI'], isSkillNode:true},
  {id: 'cloud_engineer', label: 'Cloud Engineer', x: 400, y: 320, color: '#60a5fa', desc: 'Cloud infra, data services, deployment and IaC.', skills: ['GCP','BigQuery','Terraform'], certIds: ['credly-gcpf','dicoding-gc-engineer','google-terraform','google-network','aws-architect']},
  {id: 'it_support', label: 'IT Support', x: 400, y: 500, color: '#83c5be', desc: 'Helpdesk, troubleshooting, and system admin tasks.', skills: ['Troubleshooting','Linux','Customer Support'], certIds: ['google-it-support','coursera-sysadmin','google-it-security','coursera-networks-security']},
  {id: 'administration', label: 'Administration', x: 400, y: 680, color: '#94a3b8', desc: 'Office automation, reporting, and coordination.', skills: ['Excel','Power BI','Reporting'], certIds: ['datacamp-excel','datacamp-powerbi','datacamp-data-literacy']},
  {id: 'fullstack_dev', label: 'Full-stack Developer', x: 400, y: 860, color: '#f59e0b', desc: 'Frontend and backend web application development.', skills: ['JavaScript','Node.js','HTML/CSS'], certIds: ['dicoding-frontend','nodejs-dev','idcamp-frontend']},

  // Certificate nodes (children) — one node per SKILL_CERTS item used by certIds above
  // Data Science certs (placed to the right of the role)
  {id: 'cert_datacamp_ai_fundamentals', label: 'AI Fundamentals', x: 700, y: 120, color: '#e6fffa', desc: 'DataCamp - AI Fundamentals', certId: 'datacamp-ai-fundamentals'},
  {id: 'cert_datacamp_supervised_sklearn', label: 'Supervised (scikit-learn)', x: 820, y: 120, color: '#e6fffa', desc: 'DataCamp - Supervised Learning with scikit-learn', certId: 'datacamp-supervised-sklearn'},
  {id: 'cert_datacamp_unsupervised', label: 'Unsupervised Learning', x: 940, y: 120, color: '#e6fffa', desc: 'DataCamp - Unsupervised Learning in Python', certId: 'datacamp-unsupervised'},
  {id: 'cert_dicoding_ds_terapan', label: 'Data Science Terapan', x: 1060, y: 120, color: '#e6fffa', desc: 'Dicoding - Data Science Terapan', certId: 'dicoding-ds-terapan'},
  {id: 'cert_dqlab_r', label: 'R Fundamental', x: 1180, y: 120, color: '#e6fffa', desc: 'DQLab - R Fundamental for Data Science', certId: 'dqlab-r'},

  // Cloud certs
  {id: 'cert_credly_gcpf', label: 'GCP Foundation', x: 700, y: 300, color: '#eef2ff', desc: 'Credly - Google Cloud Computing Foundation', certId: 'credly-gcpf'},
  {id: 'cert_dicoding_gc_engineer', label: 'Google Cloud Engineer', x: 820, y: 300, color: '#eef2ff', desc: 'Dicoding - Menjadi Google Cloud Engineer', certId: 'dicoding-gc-engineer'},
  {id: 'cert_google_terraform', label: 'Terraform on GCP', x: 940, y: 300, color: '#eef2ff', desc: 'Google - Build Infrastructure with Terraform on Google Cloud', certId: 'google-terraform'},
  {id: 'cert_google_network', label: 'GCP Networking', x: 1060, y: 300, color: '#eef2ff', desc: 'Google - Develop your Google Cloud Network', certId: 'google-network'},
  {id: 'cert_aws_architect', label: 'Architecting on AWS', x: 1180, y: 300, color: '#eef2ff', desc: 'Dicoding - Architecting on AWS', certId: 'aws-architect'},

  // IT Support certs
  {id: 'cert_google_it_support', label: 'Google IT Support', x: 700, y: 480, color: '#f0f9ff', desc: 'Google - IT Support Specialization', certId: 'google-it-support'},
  {id: 'cert_coursera_sysadmin', label: 'System Administration', x: 820, y: 480, color: '#f0f9ff', desc: 'Coursera - System Administration and IT Infrastructure Services', certId: 'coursera-sysadmin'},
  {id: 'cert_google_it_security', label: 'Google IT Security', x: 940, y: 480, color: '#f0f9ff', desc: 'Google - IT Security', certId: 'google-it-security'},
  {id: 'cert_coursera_networks_security', label: 'Network Security', x: 1060, y: 480, color: '#f0f9ff', desc: 'Coursera - Connect and Protect: Networks and Network Security', certId: 'coursera-networks-security'},

  // Administration certs
  {id: 'cert_datacamp_excel', label: 'Introduction to Excel', x: 820, y: 660, color: '#fff7ed', desc: 'DataCamp - Introduction to Excel', certId: 'datacamp-excel'},
  {id: 'cert_datacamp_powerbi', label: 'Introduction to Power BI', x: 940, y: 660, color: '#fff7ed', desc: 'DataCamp - Introduction to Power BI', certId: 'datacamp-powerbi'},
  {id: 'cert_datacamp_data_literacy', label: 'Data Literacy', x: 1060, y: 660, color: '#fff7ed', desc: 'DataCamp - Data Literacy', certId: 'datacamp-data-literacy'},

  // Full-stack certs
  {id: 'cert_dicoding_frontend', label: 'Front-End Web Dev', x: 820, y: 840, color: '#fff1f2', desc: 'Dicoding - Fundamental Front-End Web Development', certId: 'dicoding-frontend'},
  {id: 'cert_nodejs_dev', label: 'Node.js Developer', x: 940, y: 840, color: '#fff1f2', desc: 'Dicoding - Node.js Application Developer', certId: 'nodejs-dev'},
  {id: 'cert_idcamp_frontend', label: 'Offline Front-End Training', x: 1060, y: 840, color: '#fff1f2', desc: 'IDCamp - Offline Training Front-End Web', certId: 'idcamp-frontend'}
];

// Simple progression links between roles (vertical progression)
const SKILL_LINKS = [
  // role progression
  {source: 'data_science', target: 'cloud_engineer'},
  // Data Science branching -> Python, R, AI fundamental
  {source: 'data_science', target: 'ds_python'},
  {source: 'data_science', target: 'ds_r'},
  {source: 'data_science', target: 'ai_fundamental'},
  // AI Fundamental branches
  {source: 'ai_fundamental', target: 'ai_supervised'},
  {source: 'ai_fundamental', target: 'ai_terapan'},
  {source: 'cloud_engineer', target: 'it_support'},
  {source: 'it_support', target: 'administration'},
  {source: 'administration', target: 'fullstack_dev'},

  // role -> certificate links (branching)
  {source: 'data_science', target: 'cert_datacamp_ai_fundamentals'},
  {source: 'data_science', target: 'cert_datacamp_supervised_sklearn'},
  {source: 'data_science', target: 'cert_datacamp_unsupervised'},
  {source: 'data_science', target: 'cert_dicoding_ds_terapan'},
  {source: 'data_science', target: 'cert_dqlab_r'},

  {source: 'cloud_engineer', target: 'cert_credly_gcpf'},
  {source: 'cloud_engineer', target: 'cert_dicoding_gc_engineer'},
  {source: 'cloud_engineer', target: 'cert_google_terraform'},
  {source: 'cloud_engineer', target: 'cert_google_network'},
  {source: 'cloud_engineer', target: 'cert_aws_architect'},

  {source: 'it_support', target: 'cert_google_it_support'},
  {source: 'it_support', target: 'cert_coursera_sysadmin'},
  {source: 'it_support', target: 'cert_google_it_security'},
  {source: 'it_support', target: 'cert_coursera_networks_security'},

  {source: 'administration', target: 'cert_datacamp_excel'},
  {source: 'administration', target: 'cert_datacamp_powerbi'},
  {source: 'administration', target: 'cert_datacamp_data_literacy'},

  {source: 'fullstack_dev', target: 'cert_dicoding_frontend'},
  {source: 'fullstack_dev', target: 'cert_nodejs_dev'},
  {source: 'fullstack_dev', target: 'cert_idcamp_frontend'}
];
// Licenses & certifications list. desc and url left empty so you can fill them later.
const SKILL_CERTS = [
  {id: 'datacamp-ai-ethics', name: 'AI Ethics', issuer: 'DataCamp', issued: 'Nov 2025', credentialId: '#AIE0028194915592', skills: ['Artificial Intelligence', 'Generative AI'], desc: '', url: ''},
  {id: 'datacamp-ai-fundamentals', name: 'AI Fundamentals', issuer: 'DataCamp', issued: 'Nov 2025', credentialId: 'AIF0022429893962', skills: ['AI', 'Machine Learning', 'Python'], desc: '', url: ''},
  {id: 'datacamp-data-literacy', name: 'Data Literacy', issuer: 'DataCamp', issued: 'Nov 2025', credentialId: 'DL0031326339327', skills: ['Data & ML', 'Business Dashboard', 'Database Management'], desc: '', url: ''},
  {id: 'datacamp-excel', name: 'Introduction to Excel', issuer: 'DataCamp', issued: 'Nov 2025', credentialId: '#ITE0011344223676', skills: ['Microsoft Office'], desc: '', url: ''},
  {id: 'datacamp-powerbi', name: 'Introduction to Power BI', issuer: 'DataCamp', issued: 'Nov 2025', credentialId: '#ITPB0018227290634', skills: ['SQL', 'Microsoft Office'], desc: '', url: ''},
  {id: 'datacamp-supervised-sklearn', name: 'Supervised Learning with scikit-learn', issuer: 'DataCamp', issued: 'Nov 2025', credentialId: '#44305376', skills: ['Machine Learning'], desc: '', url: ''},
  {id: 'datacamp-data-eng', name: 'Understanding Data Engineering', issuer: 'DataCamp', issued: 'Nov 2025', credentialId: '#UDE0014688431999', skills: ['ETL Pipelines'], desc: '', url: ''},
  {id: 'datacamp-unsupervised', name: 'Unsupervised Learning in Python', issuer: 'DataCamp', issued: 'Nov 2025', credentialId: '#44404768', skills: ['Python', 'Machine Learning'], desc: '', url: ''},

  {id: 'dicoding-ds-terapan', name: 'Data Science Terapan', issuer: 'Dicoding', issued: 'Jun 2025', credentialId: '1OP82Q28LPQK', skills: ['AI', 'PySpark', 'Python', 'Big Data', 'Machine Learning'], desc: '', url: ''},
  {id: 'dicoding-fund-dl', name: 'Fundamental Deep Learning', issuer: 'Dicoding', issued: 'Jun 2025', credentialId: '2VX3KG2RJXYQ', skills: ['Deep Learning', 'NLP', 'TensorFlow', 'Keras'], desc: '', url: ''},
  {id: 'dicoding-fund-data', name: 'Fundamental Pemrosesan Data', issuer: 'Dicoding', issued: 'May 2025', credentialId: '98XWEDK9LXM3', skills: ['Python Software Engineering', 'ETL Pipelines'], desc: '', url: ''},

  {id: 'dbs-facilitator', name: 'DBS Coding Camp Front-End Web Developer Facilitator for Educators', issuer: 'DBS Bank', issued: 'Oct 2024', credentialId: 'DBS2024/F2-FE-EDU-03', skills: ['Program Facilitation'], desc: '', url: ''},

  {id: 'aws-architect', name: 'Architecting on AWS', issuer: 'Dicoding', issued: 'Aug 2024', credentialId: 'GRX539O1YZ0M', skills: ['AWS', 'Database Management', 'Backup and DR', 'Microservices'], desc: '', url: ''},
  {id: 'nodejs-dev', name: 'Node.js Application Developer', issuer: 'Dicoding', issued: 'Aug 2024', credentialId: 'KEXL791WYXG2', skills: ['Node.js', 'Unit Testing', 'NPM'], desc: '', url: ''},

  {id: 'coursera-networks-security', name: 'Connect and Protect: Networks and Network Security', issuer: 'Coursera', issued: 'Jul 2024', credentialId: 'LVFCCP77C34T', skills: ['Network Security', 'TCP/IP', 'Cloud Networks'], desc: '', url: ''},
  {id: 'tbi-efset-english', name: 'English for Business Communication', issuer: 'TBI - The British Institute', issued: 'Jul 2024', credentialId: 'TBI-DAGO/CORP/7059', skills: ['English Communication'], desc: '', url: ''},

  {id: 'google-cyber', name: 'Google Cybersecurity Certificate', issuer: 'Google', issued: 'Jul 2024', credentialId: '', skills: ['Threat Analysis', 'Information Security', 'Network Security', 'Python'], desc: '', url: ''},
  {id: 'credly-gcpf', name: 'Google Cloud Computing Foundation', issuer: 'Credly by Pearson', issued: 'May 2024', credentialId: '00912830-1fe7-4b13-824c-06abbc6e3ef6', skills: ['BigQuery', 'Cloud Functions', 'IAM', 'Cloud Infrastructure'], desc: '', url: ''},

  {id: 'dicoding-gc-engineer', name: 'Menjadi Google Cloud Engineer', issuer: 'Dicoding', issued: 'May 2024', credentialId: 'MRZMELE8RPYQ', skills: ['Python', 'Cloud Computing'], desc: '', url: ''},
  {id: 'dicoding-ml-gcloud', name: 'Penerapan Machine Learning dengan Google Cloud', issuer: 'Dicoding', issued: 'May 2024', credentialId: '07Z60WMORZQRC', skills: ['TensorFlow', 'Google Cloud Data Services', 'ML Deployment'], desc: '', url: ''},

  {id: 'google-terraform', name: 'Build Infrastructure with Terraform on Google Cloud', issuer: 'Google', issued: 'Apr 2024', credentialId: '8670744', skills: ['Terraform', 'Cloud Infrastructure'], desc: '', url: ''},
  {id: 'google-network', name: 'Develop your Google Cloud Network', issuer: 'Google', issued: 'Apr 2024', credentialId: '8668195', skills: ['Cloud Networking'], desc: '', url: ''},

  {id: 'google-it-security', name: 'Google IT Security', issuer: 'Google', issued: 'Mar 2024', credentialId: 'QQNBPHUQHKG', skills: ['Cybersecurity', 'Cryptography', 'Network Security'], desc: '', url: ''},
  {id: 'google-it-support', name: 'Google IT Support Specialization', issuer: 'Google', issued: 'Mar 2024', credentialId: 'ADTAKT4LYC97', skills: ['Troubleshooting', 'Linux', 'Customer Support'], desc: '', url: ''},

  {id: 'coursera-sysadmin', name: 'System Administration and IT Infrastructure Services', issuer: 'Coursera', issued: 'Feb 2024', credentialId: 'T9S85GYLW9AY', skills: ['Backup and DR', 'LDAP', 'System Administration'], desc: '', url: ''},

  {id: 'idcamp-frontend', name: 'Offline Training Front-End Web Developer (IDCamp x KADIN)', issuer: 'IDCamp', issued: 'May 2023', credentialId: '', skills: ['Front-End Development'], desc: '', url: ''},
  {id: 'dicoding-frontend', name: 'Fundamental Front-End Web Development', issuer: 'Dicoding', issued: 'Apr 2023', credentialId: 'QLZ9QWJR7Z5D', skills: ['JavaScript', 'Web Applications', 'Front-End'], desc: '', url: ''},

  {id: 'dicoding-devops', name: 'Belajar Dasar-Dasar DevOps', issuer: 'Dicoding', issued: 'Dec 2022', credentialId: '4EXGNMWQDZRLC', skills: ['DevOps Basics'], desc: '', url: ''},
  {id: 'dqlab-r', name: 'R Fundamental for Data Science', issuer: 'DQLab', issued: 'May 2022', credentialId: 'DQLABINTR1RFCJAE', skills: ['R', 'Data Science'], desc: '', url: ''},

  {id: 'ut-seminar', name: '1st International Seminar of Science and Technology for Society Development', issuer: 'Universitas Terbuka', issued: 'Oct 2021', credentialId: '', skills: [], desc: '', url: ''}
];

