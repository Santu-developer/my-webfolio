import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiSend, FiCheckCircle } from 'react-icons/fi'
import socials from '../data/socials'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const onSubmit = async (e) => {
    e.preventDefault()
    
    try {
      setStatus('sending')
      const formData = new FormData(e.target)
      
      // Submit to Netlify
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
      
      if (response.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
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
            
            {status === 'success' ? (
              <motion.div 
                className="text-center py-5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FiCheckCircle size={64} className="text-success mb-3" />
                <h4 className="text-success mb-3">Thank You! 🎉</h4>
                <p className="mb-2">Your message has been sent successfully!</p>
                <p className="text-muted mb-4">
                  I'll get back to you as soon as possible. Check your email for a confirmation.
                </p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setStatus('idle')}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={onSubmit}
                className="d-grid gap-3"
              >
                {/* Hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="d-none">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

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
                <button className="btn btn-primary" disabled={status === 'sending'}>
                  <FiSend /> {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
                {status === 'error' && (
                  <p className="text-danger">
                    Oops, something went wrong. Please try again later.
                  </p>
                )}
              </form>
            )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const inputStyle = {}
