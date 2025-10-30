import { motion } from 'framer-motion'
import SkillCard from './SkillCard'
import skills from '../data/skills'
import { headerVariant, staggerChildren, fadeUp } from '../utils/motion'

export default function Skills() {
  return (
    <section id="skills" className="py-5 position-relative overflow-hidden">
      <div className="glass-bg glass-skills"></div>
      <div className="container position-relative">
        <motion.div
          className="glass-card p-4 p-md-5"
          initial={{ opacity: 0, y: 22, filter: 'blur(3px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
        <motion.h2
          variants={headerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="h2"
        >
          Skills
        </motion.h2>

        <motion.div
          className="row row-cols-1 row-cols-md-3 g-3 mt-3"
          variants={staggerChildren(0.06, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {skills.map((s) => (
            <motion.div key={s.name} className="col" variants={fadeUp(0, 20)}>
              <SkillCard {...s} showCategory={false} />
            </motion.div>
          ))}
        </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
