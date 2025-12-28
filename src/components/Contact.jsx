import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiSend, FiCheckCircle } from 'react-icons/fi'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const submittedRef = useRef(false)
  const formRef = useRef(null)

  const resetSuccess = () => setStatus('idle')

  const onSubmit = (e) => {
    // Let the form submit normally, but into a hidden iframe (no navigation).
    submittedRef.current = true
    setStatus('sending')
  }

  const onIframeLoad = () => {
    // Ignore the initial about:blank load.
    if (!submittedRef.current) return
    submittedRef.current = false

    setStatus('success')
    formRef.current?.reset()
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
                  I'll get back to you as soon as possible.
                </p>
                <button 
                  className="btn btn-primary"
                  onClick={resetSuccess}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <>
                {/* Hidden iframe target prevents page reload/scroll-to-top */}
                <iframe
                  title="contact-submit"
                  name="contact-submit"
                  style={{ display: 'none' }}
                  onLoad={onIframeLoad}
                />

                <form
                  ref={formRef}
                  action="https://formsubmit.co/santoshpatidar.dev@gmail.com"
                  method="POST"
                  target="contact-submit"
                  onSubmit={onSubmit}
                  className="d-grid gap-3"
                >
                {/* FormSubmit options */}
                <input type="hidden" name="_subject" value="Portfolio Contact" />
                {/* Keep captcha enabled; FormSubmit autoresponse doesn't work when captcha is disabled */}
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thanks for reaching out! Your message has been received successfully. I’ll get back to you soon."
                />
                <input type="hidden" name="_template" value="table" />

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
                <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                  <FiSend /> {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
                {status === 'error' ? (
                  <p className="text-danger mb-0">
                    Oops, something went wrong. Please try again.
                  </p>
                ) : null}
                </form>
              </>
            )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
