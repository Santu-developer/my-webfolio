import { FiPrinter, FiDownload } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { headerVariant } from '../utils/motion'
import { useEffect, useMemo, useState } from 'react'

// Prefer a CV in src/assets/*.pdf (bundled, cache-friendly); fallback to public/cv.pdf if present
const assetPdfMap = import.meta.glob('../assets/*.pdf', { eager: true, import: 'default' })
const firstAssetPdfUrl = Object.values(assetPdfMap)[0]

export default function CV() {
  const preferredUrl = useMemo(() => firstAssetPdfUrl || '/cv.pdf', [])
  const [pdfUrl] = useState(preferredUrl)
  const [hasPDF, setHasPDF] = useState(Boolean(firstAssetPdfUrl))

  // If no asset PDF, check for public/cv.pdf at runtime (Netlify/GH Pages)
  useEffect(() => {
    if (firstAssetPdfUrl) return
    let cancelled = false
    fetch('/cv.pdf', { method: 'HEAD' })
      .then((res) => {
        if (!cancelled) setHasPDF(res.ok)
      })
      .catch(() => {
        if (!cancelled) setHasPDF(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  // Print only the PDF content (not the whole page)
  const handlePrint = () => {
    if (!hasPDF) return
    const frame = document.createElement('iframe')
    frame.style.position = 'fixed'
    frame.style.right = '0'
    frame.style.bottom = '0'
    frame.style.width = '0'
    frame.style.height = '0'
    frame.style.border = '0'
    frame.src = pdfUrl
    frame.onload = () => {
      try {
        frame.contentWindow?.focus()
        frame.contentWindow?.print()
      } finally {
        setTimeout(() => frame.remove(), 1200)
      }
    }
    document.body.appendChild(frame)
  }
  return (
    <main className="py-5 position-relative overflow-hidden">
      <div className="glass-bg glass-cv"></div>
      <div className="container position-relative">
        <div className="d-flex justify-content-between align-items-center mb-3 cv-toolbar">
          <motion.strong className="h5 mb-0" variants={headerVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
            Curriculum Vitae
          </motion.strong>
          <div className="d-flex gap-2">
            <motion.button
              whileHover={{ scale: hasPDF ? 1.03 : 1 }}
              whileTap={{ scale: hasPDF ? 0.97 : 1 }}
              className="btn btn-outline-secondary"
              onClick={handlePrint}
              title="Print CV"
              disabled={!hasPDF}
            >
              <FiPrinter /> Print
            </motion.button>
            <motion.a
              whileHover={{ scale: hasPDF ? 1.03 : 1 }}
              whileTap={{ scale: hasPDF ? 0.97 : 1 }}
              className="btn btn-primary"
              href={hasPDF ? pdfUrl : undefined}
              download={hasPDF ? 'Santosh_Patidar_CV.pdf' : undefined}
              aria-disabled={!hasPDF}
            >
              <FiDownload /> Download PDF
            </motion.a>
          </div>
        </div>

        <motion.div
          className="card overflow-hidden cv-card"
          initial={{ opacity: 0, y: 18, filter: 'blur(2px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          {hasPDF ? (
            <iframe
              className="cv-frame"
              src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
              title="Curriculum Vitae"
              loading="eager"
            />
          ) : (
            <div className="p-4">
              <p>
                Please add your CV as <code>src/assets/YourCV.pdf</code> or <code>public/cv.pdf</code> to view it here.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  )
}
