import { ArrowRight, ArrowUpRight } from 'lucide-react'
import {
  ArrowDoodle,
  FlowerMark,
  HeartDoodle,
  StarDoodle,
} from '@/components/doodles'
import { Polaroid } from '@/components/polaroid'
import { SectionHeading } from '@/components/section-heading'
import { TestimonialForm } from '@/components/testimonial-form'

const contactEmail = 'hola@unidasfuertes.cl'

const testimonials = [
  {
    quote:
      'Llegué sin conocer a nadie y me fui con tres números nuevos y una invitación a tomar once.',
    name: 'Vero',
    context: 'primer encuentro',
    variant: 'rose',
  },
  {
    quote: 'Bailé hasta que me dolieron los pies. Hacía años que no me reía así.',
    name: 'Cami',
    context: 'fiesta de diciembre',
    variant: 'gold',
  },
  {
    quote:
      'Me gusta que acá no hay que ser perfecta. Se puede llegar con el pelo mojado y el corazón cansado.',
    name: 'Javi',
    context: 'taller de octubre',
    variant: 'cream',
  },
]

const faqs = [
  {
    question: '¿Lorem ipsum dolor sit amet?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibis ultricies vehicula non arcu.',
  },
  {
    question: '¿Consectetur adipiscing elit?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
  },
  {
    question: '¿Phasellus porta?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam id dolor id nibis ultricies vehicula non arcu.',
  },
  {
    question: '¿Cras mattis?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam id dolor id nibis ultricies vehicula non arcu.',
  },
  {
    question: '¿Dapibus ac facilisis?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
  },
  {
    question: '¿EncerrAR?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
  },
]
export function AboutSection() {
  return (
    <section className="section about-section" id="nosotras" aria-labelledby="about-title">
      <div className="wrap">
        <SectionHeading
          index="01"
          eyebrow="Nosotras"
          title="Quiénes somos"
          accent="y lo que nos mueve"
          id="about-title"
          description="Somos una comunidad de mujeres de Concepción que se encuentra para conversar, crear y celebrar la vida juntas. Acá cada una llega como es y encuentra un lugar."
        />

        <div className="about-grid">
          <article className="about-card about-card--mission">
            <span className="about-card-icon" aria-hidden="true">
              <HeartDoodle />
            </span>
            <span className="about-card-label">Nuestra misión</span>
            <h3>Encontrarnos para acompañarnos</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
              erat a ante venenatis dapibus posuere velit aliquet. Cras mattis
              consectetur purus sit amet fermentum. Donec id elit non mi porta
              gravida at eget metus. Nullam id dolor id nibis ultricies vehicula
              non arcu. Integer posuere erat a ante venenatis dapibus posuere
              velit aliquet.
            </p>
          </article>

          <article className="about-card about-card--vision">
            <span className="about-card-icon" aria-hidden="true">
              <FlowerMark />
            </span>
            <span className="about-card-label">Nuestra visión</span>
<h3>Consectetur adipiscing elit</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id
              ligula porta felis euismod semper. Donec ullamcorper nulla non metus
              auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas
              eget quam. Nullam id dolor id nibis ultricies vehicula non arcu.
            </p>
          </article>
        </div>

        <p className="about-quote hand">“Juntas somos más que la suma de cada una.”</p>
      </div>
    </section>
  )
}

export function EventGallery() {
  return (
    <section className="section gallery-section" id="galeria" aria-labelledby="gallery-title">
      <div className="wrap">
        <SectionHeading
          index="03"
          eyebrow="Galería"
          title="Momentos que"
          accent="se quedaron"
          id="gallery-title"
          description="Recuerdos de encuentros anteriores: tardes que empezaron con un “hola” y terminaron con planes para la próxima."
          action={
            <a className="link-doodle" href={`mailto:${contactEmail}?subject=Quiero%20participar`}>
              Quiero participar
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          }
        />

        <div className="album">
          <div className="album-col album-col--one">
            <Polaroid
              src="/events/taller-creativo.png"
              alt="Mujeres compartiendo y creando juntas en un taller artístico"
              caption="manos a la obra"
              detail="taller de octubre"
              className="album-photo album-photo--one"
              sizes="(max-width: 680px) 88vw, (max-width: 900px) 44vw, 32vw"
            />
          </div>
          <div className="album-col album-col--two">
            <Polaroid
              src="/events/encuentro-comunitario.png"
              alt="Participantes disfrutando de un encuentro comunitario con música y baile"
              caption="la mesa larga"
              detail="nuestro primer encuentro"
              className="album-photo album-photo--two"
              sizes="(max-width: 680px) 88vw, (max-width: 900px) 44vw, 26vw"
              tape="gold"
            />
            <a
              className="empty-polaroid"
              href={`mailto:${contactEmail}?subject=Quiero%20participar`}
            >
              <span className="empty-polaroid-heart" aria-hidden="true">
                <HeartDoodle />
              </span>
              <span className="hand">tu próxima foto acá</span>
              <span className="empty-polaroid-link">
                ven a crear el recuerdo
                <ArrowRight size={14} aria-hidden="true" />
              </span>
            </a>
          </div>
          <div className="album-col album-col--three">
            <Polaroid
              src="/events/celebracion-parque.png"
              alt="Amigas de la comunidad compartiendo una tarde al aire libre"
              caption="tarde de sol"
              detail="parque bicentenario"
              className="album-photo album-photo--three"
              sizes="(max-width: 680px) 88vw, (max-width: 900px) 44vw, 28vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section
      className="section testimonials-section"
      id="testimonios"
      aria-labelledby="testimonials-title"
    >
      <div className="wrap">
        <SectionHeading
          index="04"
          eyebrow="Testimonios"
          title="Lo que se dice"
          accent="en la mesa"
          id="testimonials-title"
          description="Palabras que nos regalaron después de un encuentro. Y un espacio para que dejes la tuya, escrita o en video."
          tone="dark"
          action={
            <a className="link-doodle" href="#comparte">
              Comparte la tuya
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          }
        />

        <div className="notes-board">
          {testimonials.map((testimonial) => (
            <figure
              className={`note note--${testimonial.variant}`}
              key={testimonial.quote}
            >
              <span className="tape tape--top" aria-hidden="true" />
              <blockquote className="hand">“{testimonial.quote}”</blockquote>
              <figcaption>
                <span className="note-name">— {testimonial.name}</span>
                <span className="note-context">{testimonial.context}</span>
              </figcaption>
              <StarDoodle className="note-doodle" />
            </figure>
          ))}
        </div>

        <TestimonialForm />

        <p className="notes-footnote hand">Gracias a las que se animaron a contarnos. ♡</p>
      </div>
    </section>
  )
}

export function FaqSection() {
  return (
    <section className="section faq-section" id="preguntas" aria-labelledby="faq-title">
      <div className="wrap faq-layout">
        <div className="faq-intro">
          <SectionHeading
            index="05"
            eyebrow="Preguntas"
            title="Antes de"
            accent="venir"
            id="faq-title"
            description="Lo que suelen preguntarnos. Si te queda algo dando vueltas, escríbenos sin vergüenza."
          />
          <div className="faq-note">
            <span className="tape tape--top" aria-hidden="true" />
            <p className="hand">
              ¿Te quedó una duda?
              <br />
              Escríbenos con confianza.
            </p>
            <a className="link-doodle" href={`mailto:${contactEmail}`}>
              {contactEmail}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <ArrowDoodle className="faq-arrow" />
          </div>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={faq.question} name="faq">
              <summary>
                <span className="faq-number">0{index + 1}</span>
                <span className="faq-question">{faq.question}</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
