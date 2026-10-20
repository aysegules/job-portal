import { prisma } from "../lib/prisma.ts";

const jobs = [
  {
    companyId: "08e02970-0633-4ed0-b5c2-1b6494979ddc",
    title: "Accounting Assistant IV",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Zhaxirabdain",
    category: "Payment Adjustment Coordinator",
    level: "Senior",
    salary: 4570,
    visible: false,
  },
  {
    companyId: "08e02970-0633-4ed0-b5c2-1b6494979ddc",
    title: "Sales Representative",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Oncativo",
    category: "Statistician I",
    level: "Senior",
    salary: 2066,
    visible: false,
  },
  {
    companyId: "08e02970-0633-4ed0-b5c2-1b6494979ddc",
    title: "Database Administrator II",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Cambarus",
    category: "General Manager",
    level: "Senior",
    salary: 2612,
    visible: false,
  },
  {
    companyId: "08e02970-0633-4ed0-b5c2-1b6494979ddc",
    title: "Database Administrator IV",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Kroczyce",
    category: "Recruiter",
    level: "Senior",
    salary: 1342,
    visible: false,
  },
  {
    companyId: "0d906690-366d-4e7c-b3cc-892a5be93fb7",
    title: "Geological Engineer",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Artemisa",
    category: "Nurse",
    level: "Senior",
    salary: 1060,
    visible: true,
  },
  {
    companyId: "0d906690-366d-4e7c-b3cc-892a5be93fb7",
    title: "Business Systems Development Analyst",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Arcos de Valdevez",
    category: "Community Outreach Specialist",
    level: "Senior",
    salary: 3396,
    visible: true,
  },
  {
    companyId: "0d906690-366d-4e7c-b3cc-892a5be93fb7",
    title: "Assistant Professor",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Yangxi",
    category: "Research Assistant II",
    level: "Senior",
    salary: 1722,
    visible: true,
  },
  {
    companyId: "0d906690-366d-4e7c-b3cc-892a5be93fb7",
    title: "Account Executive",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Ortigueira",
    category: "Quality Engineer",
    level: "Beginner",
    salary: 4232,
    visible: false,
  },
  {
    companyId: "0d906690-366d-4e7c-b3cc-892a5be93fb7",
    title: "Social Worker",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "A dos Negros",
    category: "Human Resources Assistant II",
    level: "Beginner",
    salary: 307,
    visible: true,
  },
  {
    companyId: "146b69b2-dfbc-425e-b215-05a2d59c92a5",
    title: "Registered Nurse",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Charlton",
    category: "Paralegal",
    level: "Beginner",
    salary: 937,
    visible: true,
  },
  {
    companyId: "146b69b2-dfbc-425e-b215-05a2d59c92a5",
    title: "Graphic Designer",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Iaçu",
    category: "Senior Developer",
    level: "Beginner",
    salary: 989,
    visible: true,
  },
  {
    companyId: "146b69b2-dfbc-425e-b215-05a2d59c92a5",
    title: "Computer Systems Analyst III",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Pytalovo",
    category: "Operator",
    level: "Beginner",
    salary: 2531,
    visible: false,
  },
  {
    companyId: "1ba27d21-e774-4d0f-ac37-a78ae1a3984f",
    title: "Help Desk Operator",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Salvaleón de Higüey",
    category: "VP Accounting",
    level: "Beginner",
    salary: 3886,
    visible: false,
  },
  {
    companyId: "1ba27d21-e774-4d0f-ac37-a78ae1a3984f",
    title: "Product Engineer",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Zhongxian",
    category: "Teacher",
    level: "Beginner",
    salary: 2404,
    visible: false,
  },
  {
    companyId: "1c2b1c29-a33b-4771-aec0-ac14a4433696",
    title: "Clinical Specialist",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Ciroyom",
    category: "Senior Cost Accountant",
    level: "Beginner",
    salary: 1109,
    visible: true,
  },
  {
    companyId: "1c2b1c29-a33b-4771-aec0-ac14a4433696",
    title: "Structural Analysis Engineer",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Bayan Qagan",
    category: "Teacher",
    level: "Beginner",
    salary: 1899,
    visible: false,
  },
  {
    companyId: "1c2b1c29-a33b-4771-aec0-ac14a4433696",
    title: "Senior Editor",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Guanyang",
    category: "VP Accounting",
    level: "Beginner",
    salary: 1601,
    visible: false,
  },
  {
    companyId: "1c2b1c29-a33b-4771-aec0-ac14a4433696",
    title: "Human Resources Manager",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Zhuping",
    category: "Recruiter",
    level: "Beginner",
    salary: 1963,
    visible: false,
  },
  {
    companyId: "1c2b1c29-a33b-4771-aec0-ac14a4433696",
    title: "Registered Nurse",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Sayaxché",
    category: "Geological Engineer",
    level: "Beginner",
    salary: 3636,
    visible: false,
  },
  {
    companyId: "1c2b1c29-a33b-4771-aec0-ac14a4433696",
    title: "Geological Engineer",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Shuangyang",
    category: "Accountant IV",
    level: "Beginner",
    salary: 4241,
    visible: true,
  },
  {
    companyId: "1c2b1c29-a33b-4771-aec0-ac14a4433696",
    title: "Senior Editor",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Xishan",
    category: "Structural Engineer",
    level: "Beginner",
    salary: 4140,
    visible: false,
  },
  {
    companyId: "1c2b1c29-a33b-4771-aec0-ac14a4433696",
    title: "Quality Control Specialist",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Kalibunder",
    category: "Senior Financial Analyst",
    level: "Beginner",
    salary: 4301,
    visible: true,
  },
  {
    companyId: "1c2b1c29-a33b-4771-aec0-ac14a4433696",
    title: "Food Chemist",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Mabunga",
    category: "Actuary",
    level: "Beginner",
    salary: 534,
    visible: false,
  },
  {
    companyId: "1c2b1c29-a33b-4771-aec0-ac14a4433696",
    title: "Developer II",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Rzewnie",
    category: "Occupational Therapist",
    level: "Beginner",
    salary: 640,
    visible: false,
  },
  {
    companyId: "1c2b1c29-a33b-4771-aec0-ac14a4433696",
    title: "Automation Specialist I",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Scarborough",
    category: "Research Assistant I",
    level: "Beginner",
    salary: 2940,
    visible: true,
  },
  {
    companyId: "1c2b1c29-a33b-4771-aec0-ac14a4433696",
    title: "Automation Specialist III",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Madagali",
    category: "Nurse",
    level: "Beginner",
    salary: 584,
    visible: true,
  },
  {
    companyId: "1f06a08e-01b0-4045-b486-bf7ec5afe9b7",
    title: "Software Engineer III",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Jarocin",
    category: "Environmental Specialist",
    level: "Beginner",
    salary: 4485,
    visible: false,
  },
  {
    companyId: "1f06a08e-01b0-4045-b486-bf7ec5afe9b7",
    title: "Project Manager",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Guozhen",
    category: "Sales Representative",
    level: "Beginner",
    salary: 3697,
    visible: true,
  },
  {
    companyId: "1f06a08e-01b0-4045-b486-bf7ec5afe9b7",
    title: "Staff Scientist",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Kendaruan",
    category: "Paralegal",
    level: "Beginner",
    salary: 4716,
    visible: false,
  },
  {
    companyId: "1f06a08e-01b0-4045-b486-bf7ec5afe9b7",
    title: "Geologist II",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Xintang",
    category: "Assistant Professor",
    level: "Beginner",
    salary: 4058,
    visible: true,
  },
  {
    companyId: "1f06a08e-01b0-4045-b486-bf7ec5afe9b7",
    title: "Executive Secretary",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "La Roche-sur-Yon",
    category: "Dental Hygienist",
    level: "Beginner",
    salary: 2092,
    visible: true,
  },
  {
    companyId: "1f06a08e-01b0-4045-b486-bf7ec5afe9b7",
    title: "Accountant II",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Skaryszew",
    category: "Administrative Assistant IV",
    level: "Intermediate",
    salary: 2786,
    visible: true,
  },
  {
    companyId: "1f06a08e-01b0-4045-b486-bf7ec5afe9b7",
    title: "Statistician III",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Hangu",
    category: "VP Product Management",
    level: "Beginner",
    salary: 1690,
    visible: true,
  },
  {
    companyId: "1f06a08e-01b0-4045-b486-bf7ec5afe9b7",
    title: "Office Assistant III",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Mafra",
    category: "Librarian",
    level: "Intermediate",
    salary: 2171,
    visible: false,
  },
  {
    companyId: "1f06a08e-01b0-4045-b486-bf7ec5afe9b7",
    title: "Analog Circuit Design manager",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Gryazovets",
    category: "Social Worker",
    level: "Beginner",
    salary: 4520,
    visible: false,
  },
  {
    companyId: "1f06a08e-01b0-4045-b486-bf7ec5afe9b7",
    title: "Software Test Engineer III",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Zoumi",
    category: "Budget/Accounting Analyst III",
    level: "Intermediate",
    salary: 1591,
    visible: true,
  },
  {
    companyId: "1f06a08e-01b0-4045-b486-bf7ec5afe9b7",
    title: "Actuary",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Iwatsuki",
    category: "Pharmacist",
    level: "Beginner",
    salary: 3301,
    visible: false,
  },
  {
    companyId: "1f06a08e-01b0-4045-b486-bf7ec5afe9b7",
    title: "Operator",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "General La Madrid",
    category: "Assistant Manager",
    level: "Senior",
    salary: 874,
    visible: false,
  },
  {
    companyId: "1f06a08e-01b0-4045-b486-bf7ec5afe9b7",
    title: "Technical Writer",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Shibi",
    category: "Data Coordinator",
    level: "Beginner",
    salary: 3303,
    visible: true,
  },
  {
    companyId: "1f670aa8-ad86-48af-b71b-aa166df9871f",
    title: "Financial Analyst",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Shian",
    category: "Internal Auditor",
    level: "Beginner",
    salary: 4538,
    visible: true,
  },
  {
    companyId: "1f670aa8-ad86-48af-b71b-aa166df9871f",
    title: "Design Engineer",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Tongguan",
    category: "Speech Pathologist",
    level: "Beginner",
    salary: 1351,
    visible: true,
  },
  {
    companyId: "1f670aa8-ad86-48af-b71b-aa166df9871f",
    title: "Project Manager",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Monamon",
    category: "Geological Engineer",
    level: "Internship",
    salary: 240,
    visible: true,
  },
  {
    companyId: "1f670aa8-ad86-48af-b71b-aa166df9871f",
    title: "Automation Specialist I",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Bilicenii Vechi",
    category: "Cost Accountant",
    level: "Beginner",
    salary: 3660,
    visible: false,
  },
  {
    companyId: "2128abce-2c61-4f3a-8a35-c9a5f0691799",
    title: "Junior Executive",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Azilal",
    category: "Community Outreach Specialist",
    level: "Senior",
    salary: 1729,
    visible: true,
  },
  {
    companyId: "2128abce-2c61-4f3a-8a35-c9a5f0691799",
    title: "Assistant Professor",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Yantal’",
    category: "Nurse Practicioner",
    level: "Beginner",
    salary: 1200,
    visible: true,
  },
  {
    companyId: "2128abce-2c61-4f3a-8a35-c9a5f0691799",
    title: "Director of Sales",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Zaojiacheng",
    category: "Analyst Programmer",
    level: "Internship",
    salary: 0,
    visible: true,
  },
  {
    companyId: "2128abce-2c61-4f3a-8a35-c9a5f0691799",
    title: "Speech Pathologist",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Taipingxu",
    category: "Programmer II",
    level: "Internship",
    salary: 0,
    visible: true,
  },
  {
    companyId: "2128abce-2c61-4f3a-8a35-c9a5f0691799",
    title: "Cost Accountant",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Wengyang",
    category: "VP Marketing",
    level: "Beginner",
    salary: 3669,
    visible: true,
  },
  {
    companyId: "2128abce-2c61-4f3a-8a35-c9a5f0691799",
    title: "Staff Scientist",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Long Loreh",
    category: "Tax Accountant",
    level: "Senior",
    salary: 4987,
    visible: true,
  },
  {
    companyId: "2128abce-2c61-4f3a-8a35-c9a5f0691799",
    title: "Assistant Manager",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Al Mughayyir",
    category: "Staff Accountant IV",
    level: "Beginner",
    salary: 3467,
    visible: false,
  },
  {
    companyId: "2128abce-2c61-4f3a-8a35-c9a5f0691799",
    title: "Junior Executive",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Mertani",
    category: "GIS Technical Architect",
    level: "Beginner",
    salary: 2583,
    visible: false,
  },
  {
    companyId: "2128abce-2c61-4f3a-8a35-c9a5f0691799",
    title: "VP Product Management",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Santa Inês",
    category: "Financial Analyst",
    level: "Intermediate",
    salary: 2418,
    visible: false,
  },
  {
    companyId: "2128abce-2c61-4f3a-8a35-c9a5f0691799",
    title: "Teacher",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Paita",
    category: "Civil Engineer",
    level: "Senior",
    salary: 4427,
    visible: true,
  },
  {
    companyId: "2128abce-2c61-4f3a-8a35-c9a5f0691799",
    title: "Accountant III",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Nongba",
    category: "Food Chemist",
    level: "Beginner",
    salary: 1540,
    visible: true,
  },
  {
    companyId: "2128abce-2c61-4f3a-8a35-c9a5f0691799",
    title: "Environmental Tech",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Zephyrhills",
    category: "Account Representative III",
    level: "Intermediate",
    salary: 1362,
    visible: false,
  },
  {
    companyId: "2128abce-2c61-4f3a-8a35-c9a5f0691799",
    title: "General Manager",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Katunayaka",
    category: "Project Manager",
    level: "Beginner",
    salary: 2434,
    visible: true,
  },
  {
    companyId: "2128abce-2c61-4f3a-8a35-c9a5f0691799",
    title: "Executive Secretary",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Saint-Quentin-en-Yvelines",
    category: "Operator",
    level: "Beginner",
    salary: 2137,
    visible: true,
  },
  {
    companyId: "2128abce-2c61-4f3a-8a35-c9a5f0691799",
    title: "Media Manager I",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Chillia",
    category: "Recruiting Manager",
    level: "Beginner",
    salary: 4059,
    visible: true,
  },
  {
    companyId: "2128abce-2c61-4f3a-8a35-c9a5f0691799",
    title: "Assistant Professor",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Dengfang",
    category: "Recruiter",
    level: "Intermediate",
    salary: 4370,
    visible: false,
  },
  {
    companyId: "2128abce-2c61-4f3a-8a35-c9a5f0691799",
    title: "Environmental Tech",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Waegwan",
    category: "Project Manager",
    level: "Intermediate",
    salary: 2213,
    visible: true,
  },
  {
    companyId: "2128abce-2c61-4f3a-8a35-c9a5f0691799",
    title: "Geological Engineer",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Paraiso",
    category: "Paralegal",
    level: "Intermediate",
    salary: 355,
    visible: true,
  },
  {
    companyId: "2128abce-2c61-4f3a-8a35-c9a5f0691799",
    title: "Human Resources Manager",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Chiguang",
    category: "Recruiter",
    level: "Intermediate",
    salary: 4591,
    visible: false,
  },
  {
    companyId: "2128abce-2c61-4f3a-8a35-c9a5f0691799",
    title: "Environmental Specialist",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Clearwater",
    category: "Sales Representative",
    level: "Intermediate",
    salary: 3001,
    visible: true,
  },

  {
    companyId: "21dda214-969e-41c9-88c3-458cf36750c2",
    title: "Internal Auditor",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Thionville",
    category: "Help Desk Technician",
    level: "Senior",
    salary: 3995,
    visible: false,
  },
  {
    companyId: "21dda214-969e-41c9-88c3-458cf36750c2",
    title: "Tax Accountant",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Awilega",
    category: "Senior Financial Analyst",
    level: "Beginner",
    salary: 690,
    visible: false,
  },
  {
    companyId: "21dda214-969e-41c9-88c3-458cf36750c2",
    title: "Research Assistant I",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Suan Luang",
    category: "Nuclear Power Engineer",
    level: "Senior",
    salary: 4582,
    visible: false,
  },
  {
    companyId: "28ba01a6-da6e-495c-b72e-63880f4cdd9b",
    title: "Marketing Assistant",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Fonte Boa da Brincosa",
    category: "Junior Executive",
    level: "Senior",
    salary: 4699,
    visible: true,
  },

  {
    companyId: "28ba01a6-da6e-495c-b72e-63880f4cdd9b",
    title: "Programmer I",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Shilibu",
    category: "Librarian",
    level: "Senior",
    salary: 2945,
    visible: false,
  },
  {
    companyId: "28ba01a6-da6e-495c-b72e-63880f4cdd9b",
    title: "Actuary",
    description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candicreatedAt will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
    location: "Huangtan",
    category: "Electrical Engineer",
    level: "Senior",
    salary: 2641,
    visible: true,
  },
];

const main = async () => {
  console.log("Seeding job data...");

  await prisma.job.deleteMany();

  for (const job of jobs) {
    await prisma.job.create({
      data: job,
    });

    console.log(`Created job ${job.title}`);
  }

  console.log("Seeding completed!");
};

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
