import {
  ArrowRight,
  ArrowUp,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { Brand } from '@/components/brand'
import {
  ArrowDoodle,
  FlowerMark,
  FlowerStem,
  HeartDoodle,
  Squiggle,
  StarDoodle,
} from '@/components/doodles'
import { Polaroid } from '@/components/polaroid'
import { SectionHeading } from '@/components/section-heading'
import { SiteHeader } from '@/components/site-header'
import { AboutSection, EventGallery, FaqSection, Testimonials } from './landing-sections'

const events = [
  {
    iso: '2026-12-05',
    day: '05',
    month: 'Dic',
    monthLong: 'diciembre',
    weekday: 'Sáb',
    weekdayLong: 'Sábado',
    title: 'Fiesta Unidas, Fuertes y Protagonistas',
    note: 'Música, baile y una once para compartir.',
    time: '18:00 hrs',
    place: 'Centro de Eventos La Estrella',
    address: 'Av. Principal #123',
  },
  {
    iso: '2027-01-16',
    day: '16',
    month: 'Ene',
    monthLong: 'enero',
    weekday: 'Sáb',
    weekdayLong: 'Sábado',
    title: 'Encuentro de Mujeres',
    note: 'Conversaciones, talleres y nuevas amistades.',
    time: '17:00 hrs',
    place: 'Salón Municipal de Concepción',
    address: '',
  },
  {
    iso: '2027-02-20',
    day: '20',
    month: 'Feb',
    monthLong: 'febrero',
    weekday: 'Sáb',
    weekdayLong: 'Sábado',
    title: 'Juntas Somos Más',
    note: 'Una tarde al aire libre para celebrar juntas.',
    time: '19:00 hrs',
    place: 'Parque Bicentenario',
    address: '',
  },
]


const footerLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotras', label: 'Nosotras' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#galeria', label: 'Galería' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#preguntas', label: 'Preguntas' },
]

const contactEmail = 'hola@unidasfuertes.cl'

function inscriptionLink(title: string) {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(`Inscripción: ${title}`)}`
}



export default function Page() {
  const year = new Date().getFullYear()

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <SiteHeader />

      <main id="contenido" tabIndex={-1}>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="stamp-label">Comunidad de mujeres · Concepción</span>
              <h1 id="hero-title">
                Unidas, fuertes{' '}
                <span className="hero-title-accent">
                  y protagonistas
                  <FlowerMark className="hero-title-flower" />
                  <Squiggle className="hero-title-squiggle" />
                </span>
              </h1>
              <p className="hero-lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <div className="hero-actions">
                <a className="btn" href="#eventos">
                  Inscríbete
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a className="link-doodle" href="#nosotras">
                  Conoce nuestra historia
                  <ArrowDoodle />
                </a>
              </div>
              <div className="hero-note">
                <span className="tape tape--top" aria-hidden="true" />
                <p className="hand">
                  No necesitas experiencia, ni acompañante, ni saber bailar. Solo ganas de estar.
                </p>
                <HeartDoodle className="hero-note-heart" />
              </div>
              <div className="hero-list">
                <span className="hero-list-label">En nuestros encuentros hay</span>
                <p>
                  música en vivo <StarDoodle /> baile <StarDoodle /> talleres <StarDoodle />{' '}
                  sorpresas <StarDoodle /> y más amigas
                </p>
              </div>
            </div>

            <div className="hero-collage">
              <div className="hero-wash" aria-hidden="true" />
              <FlowerStem className="hero-flower hero-flower--left" />
              <FlowerStem className="hero-flower hero-flower--right" />

              <Polaroid
                src="/hero-woman.png"
                alt="Ilustración de una mujer con corona, cabello morado y detalles dorados"
                caption=""
                className="polaroid--hero"
                sizes="(max-width: 860px) 90vw, 480px"
                priority
                imageClassName="polaroid-image--hero"
              />
            </div>
          </div>
        </section>

        <AboutSection />

        <section className="section events-section" id="eventos" aria-labelledby="events-title">
          <div className="wrap">
            <SectionHeading
              index="02"
              eyebrow="Próximos eventos"
              title="Nos vemos"
              accent="pronto"
              description="Tres fechas para juntarnos. Elige la tuya y escríbenos; te guardamos un lugar."
            />
            <ol className="events-list">
              {events.map((event, index) => (
                <li key={event.title}>
                  <article className="event-row">
                    <time className="event-row-date" dateTime={event.iso}>
                      <span>{event.weekday}</span>
                      <strong>{event.day}</strong>
                      <span>{event.month}</span>
                    </time>
                    <div className="event-row-body">
                      {index === 0 && <span className="event-row-tag">Próximo</span>}
                      <h3>{event.title}</h3>
                      <p className="event-row-note">{event.note}</p>
                      <p className="event-row-meta">
                        <span>
                          <Clock3 size={14} aria-hidden="true" />
                          {event.time}
                        </span>
                        <span>
                          <MapPin size={14} aria-hidden="true" />
                          <span>
                            {event.place}
                            {event.address && <small>{event.address}</small>}
                          </span>
                        </span>
                      </p>
                    </div>
                    <a
                      className="event-cta event-row-link"
                      href={inscriptionLink(event.title)}
                      aria-label={`Inscribirme en ${event.title}`}
                    >
                      Inscribirme
                      <ArrowRight size={14} aria-hidden="true" />
                    </a>
                  </article>
                </li>
              ))}
            </ol>
            
          </div>
        </section>

        <EventGallery />
        <Testimonials />
        <FaqSection />

        
      </main>

      <footer className="footer" id="contacto">
        <div className="wrap">
          <div className="footer-signoff">
            <div className="footer-signoff-copy">
              <FlowerMark className="footer-flower" />
              <p className="hand">
                Gracias por estar acá.
                <br />
                Nos vemos en la próxima mesa.
              </p>
            </div>
            <a className="btn footer-cta-btn" href="#eventos">
              Inscríbete al próximo encuentro
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="footer-top">
            <div className="footer-brand">
              <Brand light />
              <p className="footer-mantra">
                Un espacio hecho para todas
                <HeartDoodle />
              </p>
              <p className="footer-bio">
                Comunidad de mujeres en Concepción reunidas para compartir la once,
                conversar, bailar y celebrar juntas.
              </p>
              <div className="footer-social-links">
                <a
                  href={`mailto:${contactEmail}`}
                  className="footer-pill-link"
                  aria-label="Escríbenos por correo"
                >
                  <Mail size={14} aria-hidden="true" />
                  <span>{contactEmail}</span>
                </a>
              </div>
            </div>

            <nav className="footer-nav" aria-label="Enlaces del pie de página">
              <strong>Explora</strong>
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  <ArrowRight size={12} className="footer-link-arrow" aria-hidden="true" />
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="footer-contact">
              <strong>Contacto</strong>
              <a href={`mailto:${contactEmail}`}>
                <span className="footer-icon-badge">
                  <Mail size={15} aria-hidden="true" />
                </span>
                <span>
                  <small>Escríbenos</small>
                  {contactEmail}
                </span>
              </a>
              <a href="tel:+56912345678">
                <span className="footer-icon-badge">
                  <Phone size={15} aria-hidden="true" />
                </span>
                <span>
                  <small>Llámanos o WhatsApp</small>
                  +56 9 1234 5678
                </span>
              </a>
              <div className="footer-location-item">
                <span className="footer-icon-badge">
                  <MapPin size={15} aria-hidden="true" />
                </span>
                <span>
                  <small>Encuentros en</small>
                  Concepción, Chile
                </span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {year} Unidas, Fuertes y Protagonistas.</span>
            <span className="footer-bottom-hand">
              Hecho a mano, con cariño <HeartDoodle className="footer-heart-inline" />
            </span>
            <a href="#inicio" className="footer-back-to-top" aria-label="Volver al inicio">
              <span>Volver arriba</span>
              <ArrowUp size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
