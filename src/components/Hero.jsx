import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import profileImg from '../assets/Profile1.png'
import { staggerChildren, fadeUp } from '../utils/motion'

export default function Hero() {
  return (
    <section id="home" className="py-5 position-relative overflow-hidden">
      <div className="glass-bg glass-hero"></div>
      <div className="container position-relative">
        <motion.div
          className="glass-card p-4 p-md-5"
          initial={{ opacity: 0, y: 22, filter: 'blur(3px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <motion.div className="d-grid gap-3" variants={staggerChildren(0.06, 0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}>
              <motion.h1 variants={fadeUp(0, 20)} className="display-5 fw-bold">
                Hi, I'm <span className="text-primary">Santosh Patidar</span>
              </motion.h1>
              <motion.p variants={fadeUp(0.02, 20)} className="text-muted fs-5">
                <Typewriter
                  words={[
                    'Java Full Stack Developer',
                    'Spring Boot · React',
                    'Microservices & REST APIs',
                    'AWS · Docker · Kubernetes',
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </motion.p>
              <motion.p variants={fadeUp(0.04, 20)} className="lead">
                Results-driven Java developer building scalable web apps end-to-end with Spring
                Boot, React, and modern cloud-native tooling. I focus on clean APIs, optimized
                databases, and smooth user experiences.
              </motion.p>
              <div className="d-flex gap-2">
                <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="#projects" className="btn btn-primary">
                  View Projects
                </motion.a>
                <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="#contact" className="btn btn-outline-secondary">
                  Contact Me
                </motion.a>
                <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="/cv.pdf" className="btn btn-outline-secondary" download title="Download CV">
                  <FiDownload /> Download CV
                </motion.a>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="d-grid justify-content-center"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                className="border rounded-circle p-2"
                style={{ width: 280, height: 280 }}
              >
                <img
                  src={profileImg}
                  alt="Profile"
                  width={256}
                  height={256}
                  className="rounded-circle img-fluid object-fit-cover"
                  style={{ width: '100%', height: '100%', transform: 'rotate(-4deg)'  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  )
}


