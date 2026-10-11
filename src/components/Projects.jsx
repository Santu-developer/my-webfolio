import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'
import { staggerChildren, fadeUp } from '../utils/motion'

export default function Projects() {
  const projectList = Array.isArray(projects) ? projects : []

  return (
    <section id="projects" className="py-5 position-relative overflow-hidden">
      <div className="glass-bg glass-projects"></div>
      <div className="container position-relative">
        <motion.div
          className="glass-card p-4 p-md-5"
          initial={false}
          animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
          transition={{ duration: 0.45 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="h2"
          >
            Projects
          </motion.h2>

          {projectList.length > 0 ? (
            <motion.div
              className="row row-cols-1 row-cols-md-3 g-3 mt-3"
              variants={staggerChildren(0.08, 0.1)}
              initial="hidden"
              animate="show"
            >
              {projectList.map((p) => (
                <motion.div key={p.slug} className="col" variants={fadeUp(0, 22)}>
                  <ProjectCard {...p} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="mt-3 text-muted">No projects available yet.</div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
