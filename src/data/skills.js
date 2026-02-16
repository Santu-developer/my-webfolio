// List of skills to display in the Skills section
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiOpenjdk,
  SiSpringboot,
  SiSpring,
  SiHibernate,
  SiMysql,
  SiDocker,
  SiApachemaven,
  SiPostman,
  SiGit,
  SiIntellijidea,
  SiEclipseide,
  SiJira,
  SiTrello,
  SiBootstrap,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiStripe,
  SiNodedotjs,
} from 'react-icons/si'
import { FiDatabase, FiCloud, FiCode } from 'react-icons/fi'

const skills = [
  // Frontend
  { name: 'HTML5', level: 95, icon: SiHtml5, category: 'Frontend' },
  { name: 'CSS3', level: 90, icon: SiCss3, category: 'Frontend' },
  { name: 'JavaScript (ES6+)', level: 88, icon: SiJavascript, category: 'Frontend' },
  { name: 'React.js', level: 86, icon: SiReact, category: 'Frontend' },
  { name: 'Bootstrap', level: 78, icon: SiBootstrap, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 65, icon: SiTailwindcss, category: 'Frontend' },

  // Backend
  { name: 'Core Java (SE 8+)', level: 84, icon: SiOpenjdk, category: 'Backend' },
  { name: 'Spring Boot', level: 82, icon: SiSpringboot, category: 'Backend' },
  { name: 'Spring MVC', level: 78, icon: SiSpring, category: 'Backend' },
  { name: 'Spring Security (JWT)', level: 72, icon: SiSpring, category: 'Backend' },
  { name: 'Hibernate JPA', level: 75, icon: SiHibernate, category: 'Backend' },
  { name: 'RESTful APIs', level: 80, icon: SiSpring, category: 'Backend' },
  { name: 'Node.js', level: 68, icon: SiNodedotjs, category: 'Backend' },
  { name: 'Stripe', level: 62, icon: SiStripe, category: 'Backend' },

  // Databases
  { name: 'MySQL', level: 78, icon: SiMysql, category: 'Database' },
  { name: 'PostgreSQL', level: 66, icon: SiPostgresql, category: 'Database' },
  { name: 'MongoDB', level: 64, icon: SiMongodb, category: 'Database' },
  { name: 'SQL', level: 78, icon: FiDatabase, category: 'Database' },
  { name: 'MS SQL Server', level: 70, icon: FiDatabase, category: 'Database' },

  // Cloud & DevOps
  { name: 'AWS (EC2, S3, RDS)', level: 65, icon: FiCloud, category: 'Cloud & DevOps' },
  { name: 'Docker', level: 70, icon: SiDocker, category: 'Cloud & DevOps' },
  { name: 'CI/CD', level: 60, icon: SiGit, category: 'Cloud & DevOps' },

  // Tools
  { name: 'Git & GitHub', level: 85, icon: SiGit, category: 'Tools' },
  { name: 'Maven', level: 78, icon: SiApachemaven, category: 'Tools' },
  { name: 'Postman', level: 80, icon: SiPostman, category: 'Tools' },
  { name: 'IntelliJ IDEA', level: 75, icon: SiIntellijidea, category: 'Tools' },
  { name: 'Eclipse', level: 70, icon: SiEclipseide, category: 'Tools' },
  { name: 'VS Code', level: 80, icon: FiCode, category: 'Tools' },
  { name: 'Jira', level: 65, icon: SiJira, category: 'Tools' },
  { name: 'Trello', level: 60, icon: SiTrello, category: 'Tools' },
]

export default skills
