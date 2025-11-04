import { motion } from 'framer-motion'
import { headerVariant, fadeUp, staggerChildren } from '../utils/motion'
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiOpenjdk,
  SiSpringboot,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiPostman,
  SiGit,
} from 'react-icons/si'
import { FaProjectDiagram } from 'react-icons/fa'

const HIGHLIGHTS = ['Java', 'Spring Boot', 'React', 'Microservices', 'AWS']

const STACK = {
  frontend: [
    { label: 'React', icon: SiReact },
    { label: 'JavaScript', icon: SiJavascript },
    { label: 'HTML5', icon: SiHtml5 },
    { label: 'CSS3', icon: SiCss3 },
    { label: 'Bootstrap', icon: SiBootstrap },
    { label: 'Tailwind CSS', icon: SiTailwindcss },
  ],
  backend: [
    { label: 'Java', icon: SiOpenjdk },
    { label: 'Spring Boot', icon: SiSpringboot },
    { label: 'Microservices', icon: FaProjectDiagram },
    { label: 'MySQL', icon: SiMysql },
  ],
  devops: [
    { label: 'Docker', icon: SiDocker },
    { label: 'Kubernetes', icon: SiKubernetes },
    { label: 'Postman', icon: SiPostman },
    { label: 'Git', icon: SiGit },
  ],
}

export default function About() {
  return (
    <section id="about" className="py-5 position-relative overflow-hidden">
      <div className="glass-bg glass-about"></div>
      <div className="container position-relative">
        <motion.div
          className="glass-card p-4 p-md-5"
          initial={{ opacity: 0, y: 22, filter: 'blur(3px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp(0.05, 24)}>
          <motion.h2 variants={headerVariant} className="h2 mb-2">
            About Me
          </motion.h2>
          <p className="text-muted" style={{ maxWidth: 900 }}>
            Results-driven Java Full Stack Developer with 1+ years of experience building scalable
            applications with Spring Boot, Spring MVC, React/Angular, Hibernate JPA, and MySQL. I
            design clean REST APIs, optimize databases, and deploy cloud-native solutions on AWS
            using Docker and Kubernetes. Comfortable collaborating in Agile/Scrum and shipping via
            CI/CD.
          </p>
          <div className="d-flex flex-wrap gap-2 mt-3">
            {HIGHLIGHTS.map((h) => (
              <span key={h} className="badge text-bg-light border" title={h}>
                {h}
              </span>
            ))}
          </div>

          <motion.h3 variants={headerVariant} className="h5 mt-4 mb-3">
            Tech Stack
          </motion.h3>
          <motion.div
            className="row row-cols-1 row-cols-md-3 g-3"
            variants={staggerChildren(0.06, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div className="col" variants={fadeUp(0, 20)}>
              <motion.div className="card h-100 p-3" whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
                <strong>Frontend</strong>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {STACK.frontend.map(({ label, icon: Icon }) => (
                    <span key={label} className="badge text-bg-light border d-inline-flex align-items-center gap-1" title={label}>
                      <Icon size={16} /> {label}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            <motion.div className="col" variants={fadeUp(0, 20)}>
              <motion.div className="card h-100 p-3" whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
                <strong>Backend & Data</strong>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {STACK.backend.map(({ label, icon: Icon }) => (
                    <span key={label} className="badge text-bg-light border d-inline-flex align-items-center gap-1" title={label}>
                      <Icon size={16} /> {label}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            <motion.div className="col" variants={fadeUp(0, 20)}>
              <motion.div className="card h-100 p-3" whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
                <strong>DevOps & Tools</strong>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {STACK.devops.map(({ label, icon: Icon }) => (
                    <span key={label} className="badge text-bg-light border d-inline-flex align-items-center gap-1" title={label}>
                      <Icon size={16} /> {label}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp(0.08, 24)} className="mt-5">
          <motion.h3 variants={headerVariant} className="h5">
            Professional Experience
          </motion.h3>
          <div className="card p-3 mt-3">
            <strong>Full Stack Developer | Sonnen Techs, Indore</strong>
            <div className="text-muted">May 2024 – Present</div>
            <ul className="mt-3 mb-0" style={{ lineHeight: 1.7 }}>
              <li>
                Developed and deployed 8+ enterprise web apps (React.js/Angular/Java), improving
                customer satisfaction by 40%.
              </li>
              <li>
                Built 15+ RESTful APIs (Spring Boot/MVC + MySQL) serving 1,000+ users with 99.9%
                uptime and sub-200ms responses.
              </li>
              <li>Implemented JWT auth with Spring Security, reducing vulnerabilities by 60%.</li>
              <li>Optimized SQL queries and schema, cutting server load by 45%.</li>
              <li>Integrated 5+ third-party APIs (PayPal, Stripe) to expand core features ~35%.</li>
              <li>Led Agile/Scrum sprints; delivered projects ~20% ahead of schedule.</li>
              <li>Deployed to AWS (EC2, RDS) with Docker & Kubernetes.</li>
            </ul>
          </div>

          <motion.h3 variants={headerVariant} className="h5 mt-5">
            Education & Certifications
          </motion.h3>
          <motion.div
            className="row row-cols-1 row-cols-md-2 g-3 mt-0"
            variants={staggerChildren(0.06, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div className="col" variants={fadeUp(0, 18)}>
              <div className="card p-3 h-100">
                <strong>
                  PG-DAC (Post Graduate Diploma in Advanced Computing), C-DAC (Centre for Development of Advanced Computing)
                </strong>
                <div className="text-muted">Expected Feb 2025</div>
              </div>
            </motion.div>
            <motion.div className="col" variants={fadeUp(0, 18)}>
              <div className="card p-3 h-100">
                <strong>B.Tech (Bachelor of Technology), Agricultural Engineering</strong>
                <div className="text-muted">Dr. PDKV, Akola (Aug 2019 – May 2023)</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
