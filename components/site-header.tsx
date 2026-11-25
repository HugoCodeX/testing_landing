'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Mail, Menu, Phone, X } from 'lucide-react'
import { Brand } from './brand'

const links = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'nosotras', label: 'Nosotras' },
  { id: 'eventos', label: 'Eventos' },
  { id: 'galeria', label: 'Galería' },
  { id: 'testimonios', label: 'Testimonios' },
  { id: 'preguntas', label: 'Preguntas' },
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('inicio')
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      const offset = window.scrollY + 140
      let current = 'inicio'
      for (const link of links) {
        const section = document.getElementById(link.id)
        if (section && section.offsetTop <= offset) current = link.id
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const firstLink = panelRef.current?.querySelector<HTMLElement>('a[href], button:not([disabled])')
    firstLink?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      )
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => {
    const query = window.matchMedia('(min-width: 981px)')
    const onChange = () => {
      if (query.matches) setOpen(false)
    }

    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const close = () => setOpen(false)
  const closeAndFocusToggle = () => {
    setOpen(false)
    toggleRef.current?.focus()
  }

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="wrap header-inner">
          <Brand onClick={close} />
          <nav className="nav" aria-label="Navegación principal">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={active === link.id ? 'is-active' : undefined}
                aria-current={active === link.id ? 'location' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-sm header-cta" href="#eventos">
            Inscríbete
            <ArrowRight size={15} aria-hidden="true" />
          </a>
          <button
            ref={toggleRef}
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>
        {open && (
          <div className="mobile-menu" id="mobile-menu" ref={panelRef}>
            <nav aria-label="Navegación móvil">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={active === link.id ? 'is-active' : undefined}
                  aria-current={active === link.id ? 'location' : undefined}
                  onClick={close}
                >
                  {link.label}
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              ))}
            </nav>
            <a className="btn" href="#eventos" onClick={close}>
              Inscríbete al próximo encuentro
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <div className="mobile-contact">
              <a href="mailto:hola@unidasfuertes.cl">
                <Mail size={15} aria-hidden="true" />
                hola@unidasfuertes.cl
              </a>
              <a href="tel:+56912345678">
                <Phone size={15} aria-hidden="true" />
                +56 9 1234 5678
              </a>
            </div>
            <p className="mobile-menu-note hand">Nos vemos pronto ♡</p>
          </div>
        )}
      </header>
      {open && (
        <button
          type="button"
          className="menu-scrim"
          aria-label="Cerrar menú"
          tabIndex={-1}
          onClick={closeAndFocusToggle}
        />
      )}
    </>
  )
}
