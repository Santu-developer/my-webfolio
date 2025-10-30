// Projects for the Projects section and detail pages
const projects = [
  {
    slug: 'energy-analytics-platform',
    title: 'Energy Analytics Platform',
    description:
      'Analytics platform handling 10,000+ daily data points. Built with Java, Spring Boot/MVC, and MySQL; optimized modules improved performance by 30%. Deployed on AWS with Docker.',
    tags: ['Java', 'Spring Boot', 'Spring MVC', 'MySQL', 'AWS', 'Docker'],
    links: {
      github: 'https://github.com/XX/energy-analytics-platform',
      demo: '#',
    },
  },
  {
    slug: 'rishtaconnect',
    title: 'RishtaConnect – Matrimonial Web Platform',
    description:
      'Backend for 500+ concurrent users with load balancing and optimized queries (50% faster). 20+ REST APIs with JWT auth; responsive React + Angular frontend boosted mobile adoption by 45%.',
    tags: ['Spring Boot', 'REST', 'JWT', 'MySQL', 'React', 'Angular'],
    links: {
      github: 'https://github.com/XX/rishtaconnect',
      demo: '#',
    },
  },
  {
    slug: 'react-portfolio',
    title: 'Personal Portfolio (This Website)',
    description:
      'This very portfolio website, built with React 18, Vite, React Router, Framer Motion, and Bootstrap 5. It showcases projects, skills, and a contact form with EmailJS integration, and is deployed via GitHub Pages.',
    tags: ['React', 'Vite', 'Bootstrap 5', 'Framer Motion', 'React Router', 'SPA'],
    links: {
      // Demo points to the current site
      demo: '/',
      // Optionally add your repository URL here when available
      // github: 'https://github.com/<your-username>/<your-repo>',
    },
  },
]

export default projects
