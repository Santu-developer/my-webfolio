import socials from '../data/socials'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-5 bg-body-tertiary" role="contentinfo">
      <div className="container">
        <div className="row align-items-start gy-3">
          <div className="col-12 col-md-4">
            <small className="text-muted d-block">© {year} Santosh Patidar · Indore, Madhya Pradesh, India</small>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-md-center">
            <div className="d-flex flex-wrap gap-2" aria-label="Social links">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-secondary btn-sm"
                  title={s.name}
                  aria-label={s.name}
                >
                  {s.icon ? <s.icon /> : null} {s.name}
                </a>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-md-end">
            <small className="text-muted">
              Built with{' '}
              <a href="https://react.dev" target="_blank" rel="noreferrer" aria-label="React website">
                React
              </a>{' '}
              +{' '}
              <a href="https://vitejs.dev" target="_blank" rel="noreferrer" aria-label="Vite website">
                Vite
              </a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  )
}
