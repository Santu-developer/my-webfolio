import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'
import { staggerChildren, fadeUp } from '../utils/motion'

export default function Projects() {
  return (
    <section id="projects" className="py-5 position-relative overflow-hidden">
      <div className="glass-bg glass-projects"></div>
      <div className="container position-relative">
        <motion.div
          className="glass-card p-4 p-md-5"
          initial={{ opacity: 0, y: 22, filter: 'blur(3px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
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
        <motion.div
          className="row row-cols-1 row-cols-md-3 g-3 mt-3"
          variants={staggerChildren(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {projects.map((p) => (
            <motion.div key={p.slug} className="col" variants={fadeUp(0, 22)}>
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
