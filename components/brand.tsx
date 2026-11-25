import { FlowerMark, StarDoodle } from './doodles'

export function Brand({ light = false, onClick }: { light?: boolean; onClick?: () => void }) {
  return (
    <a
      className={`brand${light ? ' brand--light' : ''}`}
      href="#inicio"
      aria-label="Unidas, Fuertes y Protagonistas — Inicio"
      onClick={onClick}
    >
      <span className="brand-mark" aria-hidden="true">
        <FlowerMark />
      </span>
      <span className="brand-copy">
        <span>Unidas, fuertes y</span>
        <strong>
          Protagonistas <StarDoodle className="brand-star" />
        </strong>
      </span>
    </a>
  )
}
