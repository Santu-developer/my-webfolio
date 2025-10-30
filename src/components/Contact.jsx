import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiSend } from 'react-icons/fi'
import socials from '../data/socials'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  const ready = Boolean(serviceId && templateId && publicKey)

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!ready) return
    try {
      setStatus('sending')
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey })
      setStatus('success')
      formRef.current?.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
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
            {/* Tip removed per request */}
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="d-grid gap-3"
            >
              <input
                name="user_name"
                placeholder="Your name"
                required
                className="form-control"
              />
              <input
                name="user_email"
                placeholder="Your email"
                type="email"
                required
                className="form-control"
              />
              <textarea
                name="message"
                placeholder="Your message"
                rows={5}
                required
                className="form-control"
              />
              <button className="btn btn-primary" disabled={!ready || status === 'sending'}>
                <FiSend /> {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-success">Thanks! Your message has been sent.</p>
              )}
              {status === 'error' && (
                <p className="text-danger">
                  Oops, something went wrong. Please try again later.
                </p>
              )}
            </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const inputStyle = {}
