import { FiPrinter, FiDownload } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { headerVariant } from '../utils/motion'

export default function CV() {
  const hasPDF = true // We can't detect presence at build time; show viewer and graceful fallback
  return (
    <main className="py-5 position-relative overflow-hidden">
      <div className="glass-bg glass-cv"></div>
      <div className="container position-relative">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <motion.strong className="h5 mb-0" variants={headerVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
            Curriculum Vitae
          </motion.strong>
          <div className="d-flex gap-2">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="btn btn-outline-secondary" onClick={() => window.print()} title="Print CV">
              <FiPrinter /> Print
            </motion.button>
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="btn btn-primary" href="/cv.pdf" download>
              <FiDownload /> Download PDF
            </motion.a>
          </div>
        </div>

        <motion.div
          className="card overflow-hidden"
          initial={{ opacity: 0, y: 18, filter: 'blur(2px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          {hasPDF ? (
            <object data="/cv.pdf" type="application/pdf" width="100%" height="80vh">
              <div className="p-4">
                <p className="mb-2">Unable to display PDF.</p>
                <a href="/cv.pdf" className="btn btn-primary">
                  Download CV
                </a>
              </div>
            </object>
          ) : (
            <div className="p-4">
              <p>
                Please add your CV as <code>public/cv.pdf</code> to view it here.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  )
}
