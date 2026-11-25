'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'

const contactEmail = 'hola@unidasfuertes.cl'

export function TestimonialForm() {
  const [mode, setMode] = useState<'written' | 'video'>('written')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const subject = `Testimonio de ${name.trim()}`
    const body = [
      `Nombre: ${name.trim()}`,
      ...(mode === 'video' ? [`Video: ${videoUrl.trim()}`] : []),
      '',
      message.trim() || (mode === 'video' ? 'Sin mensaje adicional.' : ''),
    ].join('\n')

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <div className="share-card" id="comparte">
      <span className="tape tape--top" aria-hidden="true" />
      <div className="share-head">
        <span className="share-eyebrow">Tu turno</span>
        <h3>Comparte tu experiencia</h3>
        <p>Un comentario o un video. Los revisamos y publicamos acá con tu permiso.</p>
      </div>

      <div className="share-modes" role="group" aria-label="Tipo de testimonio">
        <button
          type="button"
          className="share-mode"
          aria-pressed={mode === 'written'}
          onClick={() => {
            setMode('written')
            setSent(false)
          }}
        >
          Escrito
        </button>
        <button
          type="button"
          className="share-mode"
          aria-pressed={mode === 'video'}
          onClick={() => {
            setMode('video')
            setSent(false)
          }}
        >
          Video
        </button>
      </div>

      <form className="share-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="testimonial-name">Tu nombre</label>
          <input
            id="testimonial-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="¿Cómo te llamas?"
            value={name}
            onChange={(event) => {
              setName(event.target.value)
              setSent(false)
            }}
          />
        </div>

        {mode === 'video' && (
          <div className="field">
            <label htmlFor="testimonial-video">Link de tu video</label>
            <input
              id="testimonial-video"
              name="video"
              type="url"
              required
              placeholder="https://..."
              aria-describedby="testimonial-video-hint"
              value={videoUrl}
              onChange={(event) => {
                setVideoUrl(event.target.value)
                setSent(false)
              }}
            />
            <span className="field-hint" id="testimonial-video-hint">
              Puede ser YouTube, Drive o Instagram. Si prefieres enviar el archivo, escríbenos y te
              contamos cómo.
            </span>
          </div>
        )}

        <div className="field">
          <label htmlFor="testimonial-message">
            {mode === 'video' ? 'Cuéntanos de qué se trata (opcional)' : 'Tu comentario'}
          </label>
          <textarea
            id="testimonial-message"
            name="message"
            rows={4}
            required={mode === 'written'}
            placeholder="¿Qué te llevaste de tu último encuentro?"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value)
              setSent(false)
            }}
          />
        </div>

        <div className="share-actions">
          <button className="btn" type="submit">
            Enviar testimonio
            <ArrowRight size={15} aria-hidden="true" />
          </button>
          <span className="share-hint">
            Se abrirá tu correo para enviarlo. Si no, escríbenos a{' '}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </span>
        </div>

        <p className="share-success" role="status" aria-live="polite">
          {sent ? '¡Gracias! Tu testimonio quedó listo en tu correo. ♡' : ''}
        </p>
      </form>
    </div>
  )
}
