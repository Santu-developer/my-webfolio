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

  const demoUrl = project.links?.demo && project.links.demo !== '#' ? project.links.demo : null
  const githubUrl = project.links?.github && project.links.github !== '#' ? project.links.github : null
  const details = project.details || {}

  const renderMaybeList = (value) => {
    if (!value) return null
    if (Array.isArray(value)) {
      if (value.length === 0) return null
      return (
        <ul className="mb-0">
          {value.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    }
    return <p className="text-muted mb-0">{value}</p>
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
            {demoUrl && (
              <a className="btn btn-primary" href={project.links.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a className="btn btn-outline-secondary" href={project.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
          </div>

          {(details.motive || details.architecture || details.techStack || details.features || details.role || details.conclusion || details.improvements) && (
            <div className="mt-3 d-grid gap-3">
              {details.motive && (
                <section>
                  <h2 className="h5 mb-2">Motive</h2>
                  {renderMaybeList(details.motive)}
                </section>
              )}

              {details.architecture && (
                <section>
                  <h2 className="h5 mb-2">Architecture</h2>
                  {renderMaybeList(details.architecture)}
                </section>
              )}

              {details.techStack && (
                <section>
                  <h2 className="h5 mb-2">Tech Stack</h2>
                  {renderMaybeList(details.techStack)}
                </section>
              )}

              {details.features && (
                <section>
                  <h2 className="h5 mb-2">Features</h2>
                  {renderMaybeList(details.features)}
                </section>
              )}

              {details.role && (
                <section>
                  <h2 className="h5 mb-2">My Role</h2>
                  {renderMaybeList(details.role)}
                </section>
              )}

              {details.conclusion && (
                <section>
                  <h2 className="h5 mb-2">Conclusion</h2>
                  {renderMaybeList(details.conclusion)}
                </section>
              )}

              {details.improvements && (
                <section>
                  <h2 className="h5 mb-2">Future Improvements</h2>
                  {renderMaybeList(details.improvements)}
                </section>
              )}
            </div>
          )}
        </motion.article>
      </div>
    </main>
  )
}
