// Projects for the Projects section and detail pages
const projects = [
  {
    slug: 'epowersports-vehiclehub',
    title: 'ePowerSports – VehicleHub Platform',
    description:
      'Full‑stack vehicle listing platform with secure auth, role-based dashboards, and checkout-ready flows—built for speed, security, and scalability.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
    links: {
      demo: 'https://epowersports.net/',
    },
    details: {
      motive:
        'Build a secure, modern vehicle marketplace where customers can browse categories and manage orders while admins can manage inventory, users, and operations from a dedicated dashboard.',
      architecture: [
        'Frontend (React + Vite) consumes REST APIs and handles routing, role-based UI, and theme state.',
        'Backend (Node.js + Express) exposes versioned REST endpoints, validates requests, and enforces RBAC.',
        'Auth uses JWT access tokens (short-lived) + refresh tokens (stored in HTTP-only cookies) for a secure session flow.',
        'MongoDB (Mongoose) stores users, products/categories, and operational entities; uploads handled via Multer.',
        'Swagger provides interactive API documentation for faster testing and integration.',
      ],
      techStack: [
        'Frontend: React, Vite, Tailwind CSS, React Router, Toast notifications',
        'Backend: Node.js, Express, JWT, bcrypt, express-validator, cookie-parser, CORS, Multer',
        'Database: MongoDB (Mongoose ODM)',
        'Docs/Tooling: Swagger UI, Postman collection',
      ],
      features: [
        'JWT authentication with refresh-token flow (HTTP-only cookies)',
        'Role-based access control (Admin / Customer)',
        'Admin dashboard: manage products, orders, users, and analytics views',
        'Customer dashboard: profile management, orders/history, category browsing',
        'File upload support for profile images with size limits',
        'Input validation and centralized error handling for safer APIs',
      ],
      role: [
        'Built the full application end-to-end (frontend + backend) and structured the repo as a real-world full-stack project.',
        'Designed the auth flow (access/refresh tokens) and implemented RBAC-protected routes on both client and server.',
        'Integrated API documentation (Swagger) and standardized responses/errors for maintainability.',
      ],
      conclusion:
        'VehicleHub demonstrates a production-style full-stack setup with secure authentication, clean separation of concerns, and an admin/customer experience built around real operational needs.',
      improvements: [
        'Add rate limiting + security headers (Helmet) and stronger audit logging',
        'Implement email verification, password reset, and optional 2FA',
        'Expand checkout + payment workflows end-to-end where applicable',
        'Add unit/integration tests (API + UI) and CI quality gates',
      ],
    },
  },
  {
    slug: 'sonnen-tech',
    title: 'Sonnen Tech – Company Website',
    description:
      'Modern, responsive company website for services, portfolio, careers, and lead capture—optimized for SEO and clean brand presentation.',
    tags: ['Bootstrap 5', 'HTML/CSS', 'JavaScript', 'Responsive Design', 'SEO'],
    links: {
      demo: 'https://sonnentechs.com/',
    },
    details: {
      motive:
        'Create a professional, mobile-first company website that clearly communicates services, builds trust with strong branding, and converts visitors into leads through clear calls-to-action.',
      architecture: [
        'Static website architecture: HTML pages + CSS + JavaScript with Bootstrap for layout and components.',
        'Reusable UI sections (hero, services, portfolio, contact, footer) for consistent content structure.',
        'SEO-oriented metadata and clean information hierarchy to improve discoverability.',
      ],
      techStack: [
        'Frontend: HTML5, CSS3, JavaScript',
        'UI Framework: Bootstrap 5',
        'Assets: Optimized images + vendor libraries as needed',
      ],
      features: [
        'Responsive layout (mobile/tablet/desktop)',
        'Services and portfolio presentation',
        'Careers/CTA section for hiring and inquiries',
        'Contact section for lead capture',
        'SEO-friendly page structure and content hierarchy',
      ],
      role: [
        'Customized and implemented the complete website content, branding, and sections end-to-end.',
        'Ensured responsiveness and improved content clarity to support lead generation goals.',
      ],
      conclusion:
        'A clean, conversion-focused business website that balances strong visuals with fast, responsive delivery and clear information architecture.',
      improvements: [
        'Add form backend with spam protection + email notifications',
        'Add performance budget (Lighthouse) and image optimization pipeline',
        'Add CMS integration for easier content updates (optional)',
      ],
    },
  },
  {
    slug: 'energy-analytics-platform',
    title: 'Enacto – Energy Management Platform (Enterprise)',
    description:
      'Enterprise energy management platform for monitoring and optimizing energy consumption across facilities—enhanced through maintenance, bug fixes, i18n improvements, and secure credential handling.',
    tags: ['Java', 'GWT', 'MVP Architecture', 'Oracle DB', 'JIRA', 'i18n', 'HashiCorp Vault', 'Enterprise App'],
    links: {
      // github: 'https://github.com/XX/energy-analytics-platform',
      demo: '#',
    },
    details: {
      motive:
        'Support monitoring, analysis, and optimization of energy consumption across multiple facilities, enabling actionable insights for operational efficiency and sustainability.',
      architecture: [
        'Large-scale enterprise web application built with Java + Google Web Toolkit (GWT) using MVP architecture patterns.',
        'Oracle DB-backed data workflows with UI-to-database synchronization across multiple application modules.',
        'Issue-driven development via JIRA with debugging and stabilization of legacy modules.',
        'Secure secret management using HashiCorp Vault to avoid hardcoded credentials/config values.',
      ],
      techStack: [
        'Application: Java, Google Web Toolkit (GWT), MVP Architecture',
        'Database: Oracle DB (SQL)',
        'Security: HashiCorp Vault (secrets/credentials)',
        'Tooling: JIRA (issue tracking), Debugging/maintenance workflows',
      ],
      features: [
        'Maintenance, enhancement, and bug-fix delivery for production modules',
        'Language preference persistence with i18n support for dynamic language switching',
        'Improved stability via debugging legacy flows and fixing data synchronization issues',
        'More secure runtime configuration by integrating Vault-managed secrets',
      ],
      role: [
        'Handled JIRA tickets: analyzed issues, debugged legacy modules, and delivered production-ready fixes.',
        'Fixed critical functional issues (e.g., language preference persistence) and implemented i18n enhancements.',
        'Troubleshot Oracle DB data flow problems and optimized queries to ensure accurate updates.',
        'Improved security by integrating HashiCorp Vault for secure credential management.',
        'Collaborated with cross-functional teams to ship enhancements and deploy fixes smoothly.',
      ],
      conclusion:
        'A complex enterprise platform improved through consistent maintenance, stability upgrades, i18n enhancements, and stronger security practices.',
      improvements: [
        'Add automated regression coverage around critical legacy workflows',
        'Expand monitoring/observability around data-sync and user preference flows',
        'Broaden Vault adoption for environment-specific configuration across modules',
      ],
    },
  },
  {
    slug: 'recruitment-portal',
    title: 'Recruitment Portal – In‑House Hiring Management System',
    description:
      'Internal hiring management system to streamline recruitment workflows, candidate management, and recruitment lifecycle tracking with secure REST APIs and PostgreSQL.',
    tags: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'JUnit', 'Mockito', 'Figma'],
    links: {
      demo: '#',
      // github: 'https://github.com/<your-username>/recruitment-portal',
    },
    details: {
      motive:
        'Streamline recruitment workflows and internal collaboration through a centralized platform that manages candidate data, stages, and hiring processes.',
      architecture: [
        'Backend-first architecture using Spring Boot services exposing RESTful APIs for recruitment workflows.',
        'Relational data model in PostgreSQL with optimized queries for efficient candidate and stage management.',
        'API documentation and internal documentation to support team collaboration and onboarding.',
        'Frontend integration aligned with Figma designs to ensure smooth UX and UI-to-API consistency.',
      ],
      techStack: [
        'Backend: Java, Spring Boot, REST APIs',
        'Database: PostgreSQL',
        'Testing: JUnit, Mockito',
        'Collaboration: Figma (UI collaboration), Documentation (API flows + features)',
      ],
      features: [
        'Candidate onboarding and profile management APIs',
        'Recruitment lifecycle tracking across stages',
        'Centralized candidate data handling and internal workflow management',
        'Automated tests for reliability and code quality',
      ],
      role: [
        'Developed the application from scratch using Java and Spring Boot with scalable backend services.',
        'Designed and implemented secure REST APIs for onboarding, profiles, and lifecycle tracking.',
        'Designed PostgreSQL schemas and optimized queries for performance and data integrity.',
        'Added automated tests using JUnit/Mockito to improve reliability and maintain quality.',
        'Collaborated on UI improvements based on Figma designs and ensured frontend–backend integration.',
        'Documented system features, API flows, and development processes for team onboarding.',
      ],
      conclusion:
        'A reliable internal recruitment system that improves hiring operations through clean APIs, structured data modeling, and a workflow-focused backend.',
      improvements: [
        'Add role-based access and audit logs for sensitive hiring operations',
        'Add advanced search/filtering for candidate pipelines and reporting dashboards',
        'Add CI checks for tests, formatting, and API contract validation',
      ],
    },
  },
  {
    slug: 'itrshift',
    title: 'ITRShift – AI‑Powered Integration Migration Platform',
    description:
      'Enterprise integration migration platform UI built with React—focused on reusable components, workflow screens, dashboards, and clean API integration for real-time updates.',
    tags: ['React', 'JavaScript', 'Component Architecture', 'API Integration', 'Dashboards', 'Forms'],
    links: {
      demo: '#',
      // github: 'https://github.com/<your-username>/itrshift',
    },
    details: {
      motive:
        'Simplify and accelerate enterprise integration migration workflows through automation and a user-friendly interface.',
      architecture: [
        'React UI organized around reusable, component-based architecture for scalability and consistent UX.',
        'API integration layer connecting frontend modules with backend services for seamless data flow and updates.',
        'Workflow-first UX: screens, dashboards, and form-based modules aligned to business processes.',
      ],
      techStack: [
        'Frontend: React.js, JavaScript',
        'Integration: REST API consumption and state-driven UI updates',
      ],
      features: [
        'Workflow screens and dashboards for migration operations',
        'Form-based modules for configuration and operational inputs',
        'Reusable UI components to improve consistency and delivery speed',
        'Improved performance/usability through clean coding practices',
      ],
      role: [
        'Developed and enhanced the UI layer using React with reusable components and smooth UX focus.',
        'Implemented API integrations to connect frontend modules with backend services and real-time updates.',
        'Built interactive screens (workflows, dashboards, forms) based on project requirements.',
        'Collaborated with backend and design teams to align UI with business workflows.',
      ],
      conclusion:
        'A workflow-oriented React frontend that improves usability and accelerates delivery for an enterprise migration platform.',
      improvements: [
        'Add component-level tests and integration tests for critical workflows',
        'Add performance profiling for heavy dashboard views',
        'Standardize API error handling and empty/loading states across modules',
      ],
    },
  },
  {
    slug: 'rishtaconnect',
    title: 'RishtaConnect – Matrimonial Web Platform',
    description:
      'Secure matrimonial platform with JWT authentication, protected user dashboards, and scalable REST APIs—built for smooth, responsive experiences.',
    tags: ['Spring Boot', 'REST API', 'JWT', 'MySQL', 'PostgreSQL', 'React', 'Bootstrap'],
    links: {
      // github: 'https://github.com/XX/rishtaconnect',
      demo: '#',
    },
    details: {
      motive:
        'Build a secure matrimonial platform where users can discover profiles, manage interests, and access protected dashboard features with strong authentication and data safety.',
      architecture: [
        'Frontend: React (CRA) app with React Router and protected routes for authenticated user areas.',
        'Backend: Spring Boot REST API handling authentication, validation, and core domain workflows.',
        'Security: JWT-based stateless auth with Spring Security; server-side validation and safe error responses.',
        'Database: Local MySQL for development; Postgres support included for production deployment scenarios.',
        'Uploads: multipart upload support with server-side storage for user gallery assets.',
      ],
      techStack: [
        'Frontend: React, react-router-dom, Bootstrap, axios, react-hook-form, react-toastify',
        'Backend: Java 21, Spring Boot, Spring Security, Spring Data JPA, Validation, JJWT',
        'Database: MySQL (local), PostgreSQL (runtime/production)',
      ],
      features: [
        'Authentication + protected routes for user dashboards',
        'User dashboard modules (profile settings, gallery, interests, messages, support tickets)',
        'Server-side validation and secure error responses (no sensitive stack traces)',
        'File upload support for gallery/profile media',
      ],
      role: [
        'Implemented the platform end-to-end with secure auth patterns and modular user dashboard flows.',
        'Built and integrated REST APIs with a responsive React UI and improved reliability/security settings.',
      ],
      conclusion:
        'RishtaConnect demonstrates secure full-stack delivery with a focus on protected user experiences and scalable REST API design.',
      improvements: [
        'Add email verification, password reset, and stronger account recovery flows',
        'Add moderation tools + abuse reporting and content review workflows',
        'Add automated testing for critical auth and dashboard flows',
      ],
    },
  },
  {
    slug: 'react-portfolio',
    title: 'Personal Portfolio (This Website)',
    description:
      'A polished React + Vite portfolio with dark mode, animations, project detail pages, and a smooth contact flow—deployed on GitHub Pages.',
    tags: ['React', 'Vite', 'Bootstrap 5', 'Framer Motion', 'React Router', 'SPA'],
    links: {
      // Demo points to the current site
      demo: 'https://santu-developer.github.io/my-webfolio/',
      // Optionally add your repository URL here when available
      // github: 'https://github.com/<your-username>/<your-repo>',
    },
    details: {
      motive:
        'Present your work with a premium UI, fast loading, and clear navigation—so recruiters/clients can quickly understand skills, projects, and how to contact you.',
      architecture: [
        'React SPA with route-based pages: Home, CV, Projects, Project Details.',
        'Centralized project/skills data files to update content without editing components.',
        'Theme system using Bootstrap theme attributes with persisted preference (dark by default).',
        'GitHub Pages-friendly routing using Vite base path + SPA 404 fallback for deep links.',
      ],
      techStack: [
        'Frontend: React, Vite, React Router',
        'UI/UX: Bootstrap 5, Framer Motion, react-icons',
        'Contact: FormSubmit (action-based, no backend required)',
        'Deployment: GitHub Pages (GitHub Actions)',
      ],
      features: [
        'Dark mode with persistent theme preference',
        'Smooth motion/scroll reveal animations for sections and cards',
        'Projects list + individual project detail pages',
        'CV page and quick access navigation',
        'Contact form with in-page success feedback (no scroll jumps)',
      ],
      role: [
        'Designed and built the entire portfolio UI and routing structure.',
        'Implemented GitHub Pages deployment and SPA routing compatibility.',
        'Implemented contact flow without Netlify/EmailJS dependencies.',
      ],
      conclusion:
        'A clean, maintainable portfolio that focuses on speed, clarity, and a premium presentation of your work.',
      improvements: [
        'Add image optimization for project thumbnails and lazy loading',
        'Add analytics (privacy-friendly) to measure engagement',
        'Add accessibility audits and automated checks (axe/Lighthouse CI)',
      ],
    },
  },
  {
    slug: 'user-management-system',
    title: 'User Management System – Full Stack (RBAC + JWT)',
    description:
      'Full‑stack user management system with JWT-based authentication and role-based access control—built with React + Vite and Spring Boot.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Spring Boot', 'Spring Security', 'JWT', 'JPA', 'MySQL'],
    links: {
      demo: '#',
      // github: 'https://github.com/<your-username>/user-management-system',
    },
    details: {
      motive:
        'Build a scalable user management platform that supports secure signup/login, role-based admin operations, and clean API design that can be reused across products.',
      architecture: [
        'Frontend (React + Vite) handles authentication UI, protected routes, and admin screens.',
        'Backend (Spring Boot) follows clean layering: Controller → Service → Repository with DTO-based API responses.',
        'Security uses Spring Security + stateless JWT with a custom authentication filter.',
        'RBAC enforced via method-level security (e.g., ROLE_ADMIN for admin endpoints).',
        'Persistence via Spring Data JPA with MySQL (or any SQL database) as the backing store.',
      ],
      techStack: [
        'Frontend: React, Vite, Tailwind CSS',
        'Backend: Spring Boot, Spring Security, Validation, JPA',
        'Auth: JWT (stateless)',
        'Database: MySQL (recommended)',
      ],
      features: [
        'Signup/login with JWT token issuance',
        'Protected “/me” style endpoint for user identity',
        'Admin-only user CRUD endpoints with RBAC',
        'Validation + centralized exception handling for consistent API errors',
      ],
      role: [
        'Designed and implemented the backend architecture and security flow step-by-step (JWT + RBAC).',
        'Built the full-stack integration and ensured a clean separation of concerns for maintainability.',
      ],
      conclusion:
        'A production-style user management foundation demonstrating clean architecture, security best practices, and scalable RBAC patterns.',
      improvements: [
        'Add refresh tokens, token rotation, and session revocation',
        'Add audit logs and admin activity tracking',
        'Add test coverage for security and controller/service layers',
      ],
    },
  },
]

export default projects
