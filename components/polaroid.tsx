import Image from 'next/image'

type PolaroidProps = {
  src: string
  alt: string
  caption: string
  detail?: string
  className?: string
  sizes?: string
  priority?: boolean
  tape?: 'rose' | 'gold'
  imageClassName?: string
}

export function Polaroid({
  src,
  alt,
  caption,
  detail,
  className,
  sizes = '(max-width: 680px) 88vw, 32vw',
  priority = false,
  tape = 'rose',
  imageClassName,
}: PolaroidProps) {
  return (
    <figure className={`polaroid${className ? ` ${className}` : ''}`}>
      <span className={`tape tape--top${tape === 'gold' ? ' tape--gold' : ''}`} aria-hidden="true" />
      <div className="polaroid-photo">
        <Image
          className={imageClassName}
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
        />
      </div>
      <figcaption className="hand">
        {caption}
        {detail && <span>{detail}</span>}
      </figcaption>
    </figure>
  )
}
