import { motion } from 'framer-motion'

export default function SkillCard({ name, level, icon: Icon, category, showCategory = true }) {
  return (
    <motion.div
      className="card h-100"
      title={`${name}${category ? ' • ' + category : ''}`}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className="card-body d-grid gap-2">
        <div className="d-flex align-items-center gap-2">
          {Icon ? <Icon size={24} className="text-primary" /> : <div style={{ width: 24 }} />}
          <strong className="me-auto">{name}</strong>
          {showCategory && category ? (
            <span className="badge text-bg-light border">{category}</span>
          ) : null}
        </div>
        {level && (
          <div>
            <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={level}>
              <div className="progress-bar bg-primary" style={{ width: `${level}%` }} />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
