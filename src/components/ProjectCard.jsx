import { Link } from 'react-router-dom'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function ProjectCard({ slug, title, description, tags = [], links = {} }) {
  return (
    <motion.div
      className="card h-100"
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
    >
      <div className="card-body d-grid gap-2">
        <div className="d-flex align-items-center">
          <h3 className="h5 mb-0 me-auto">{title}</h3>
          <div className="d-flex gap-2">
            {links.github && (
              <a href={links.github} target="_blank" rel="noreferrer" className="btn btn-outline-secondary btn-sm" title="GitHub">
                <FiGithub />
              </a>
            )}
            {links.demo && (
              <a href={links.demo} target="_blank" rel="noreferrer" className="btn btn-outline-secondary btn-sm" title="Live Demo">
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>
        <p className="text-muted mb-0">{description}</p>
        <div className="d-flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="badge text-bg-light border" title={t}>
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <Link className="btn btn-outline-secondary" title={`View details for ${title}`} to={`/projects/${slug}`}>
            Details
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
