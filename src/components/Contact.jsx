import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiSend, FiCheckCircle } from 'react-icons/fi'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | success

  const nextUrl = useMemo(() => {
    if (typeof window === 'undefined') return ''
    const base = `${window.location.origin}${import.meta.env.BASE_URL}`
    return `${base}?sent=1#contact`
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const sent = new URLSearchParams(window.location.search).get('sent')
    if (sent === '1') setStatus('success')
  }, [])

  const resetSuccess = () => {
    setStatus('idle')
    if (typeof window === 'undefined') return
    const url = new URL(window.location.href)
    url.searchParams.delete('sent')
    window.history.replaceState({}, '', url.toString())
  }

  return (
    <section id="contact" className="py-5 position-relative overflow-hidden">
      <div className="glass-bg glass-contact"></div>
      <div className="container position-relative">
        <motion.div
          className="glass-card p-4 p-md-5"
          initial={{ opacity: 0, y: 22, filter: 'blur(3px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="h2">Contact</h2>
          <div className="mx-auto mt-3" style={{ maxWidth: 820 }}>
            <motion.div
              className="card p-4"
              initial={{ opacity: 0, y: 18, filter: 'blur(2px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
            >
            <h3
              className="h5 d-flex align-items-center gap-2 mb-3"
            >
              <FiMail /> Send a message
            </h3>
            
            {status === 'success' ? (
              <motion.div 
                className="text-center py-5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FiCheckCircle size={64} className="text-success mb-3" />
                <h4 className="text-success mb-3">Thank You!</h4>
                <p className="mb-2">Your message has been sent successfully!</p>
                <p className="text-muted mb-4">
                  I'll get back to you as soon as possible. Check your email for a confirmation.
                </p>
                <button 
                  className="btn btn-primary"
                  onClick={resetSuccess}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                action="https://formsubmit.co/santoshpatidar.dev@gmail.com"
                method="POST"
                className="d-grid gap-3"
              >
                {/* FormSubmit options */}
                <input type="hidden" name="_subject" value="Portfolio Contact" />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thanks for reaching out! Your message has been received successfully. I’ll get back to you soon."
                />
                {nextUrl ? <input type="hidden" name="_next" value={nextUrl} /> : null}

                <input
                  name="name"
                  placeholder="Your name"
                  required
                  className="form-control"
                />
                <input
                  name="email"
                  placeholder="Your email"
                  type="email"
                  required
                  className="form-control"
                />
                <input
                  name="subject"
                  placeholder="Subject"
                  className="form-control"
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  required
                  className="form-control"
                />
                <button type="submit" className="btn btn-primary">
                  <FiSend /> Send Message
                </button>
              </form>
            )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
