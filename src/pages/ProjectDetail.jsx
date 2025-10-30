import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { headerVariant } from '../utils/motion'
import projects from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug])

  if (!project) {
    return (
      <main className="py-5 position-relative overflow-hidden">
        <div className="glass-bg glass-detail"></div>
        <div className="container position-relative">
          <motion.div className="card p-4" initial={{ opacity: 0, y: 18, filter: 'blur(2px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}>
            <h2 className="h4">Project not found</h2>
            <button className="btn btn-primary mt-2" onClick={() => navigate('/')}>Back to Home</button>
          </motion.div>
        </div>
      </main>
    )
  }

  return (
    <main className="py-5 position-relative overflow-hidden">
      <div className="glass-bg glass-detail"></div>
      <div className="container position-relative">
        <motion.article
          className="card p-4 d-grid gap-2"
          initial={{ opacity: 0, y: 18, filter: 'blur(2px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 className="h3 mb-0" variants={headerVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}>
            {project.title}
          </motion.h1>
          <p className="text-muted">{project.description}</p>
          <div className="d-flex gap-2 flex-wrap">
            {project.tags.map((t) => (
              <span key={t} className="badge text-bg-light border" title={t}>
                {t}
              </span>
            ))}
          </div>
          <div className="d-flex gap-2 mt-2">
            {project.links?.demo && (
              <a className="btn btn-primary" href={project.links.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            )}
            {project.links?.github && (
              <a className="btn btn-outline-secondary" href={project.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
          </div>
        </motion.article>
      </div>
    </main>
  )
}
