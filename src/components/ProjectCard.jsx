import { Link } from 'react-router-dom'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function ProjectCard({ slug, title, description, tags = [], links = {} }) {
  const demoUrl = links?.demo && links.demo !== '#' ? links.demo : null
  const githubUrl = links?.github && links.github !== '#' ? links.github : null

  return (
    <motion.div
      className="card h-100"
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
    >
      <div className="card-body d-grid gap-2">
        <div className="d-flex align-items-start gap-2">
          <h3 className="h5 mb-0 flex-grow-1">{title}</h3>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm flex-shrink-0"
              title="Live Demo"
            >
              Live Demo <FiExternalLink className="ms-1" />
            </a>
          )}
        </div>
        <p className="text-muted mb-0">{description}</p>
        <div className="d-flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="badge text-bg-light border" title={t}>
              {t}
            </span>
          ))}
        </div>
        {githubUrl && (
          <div>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline-secondary btn-sm" title="GitHub">
              <FiGithub className="me-1" /> GitHub
            </a>
          </div>
        )}
        <div className="mt-auto">
          <Link className="btn btn-outline-secondary" title={`View details for ${title}`} to={`/projects/${slug}`}>
            Details
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
