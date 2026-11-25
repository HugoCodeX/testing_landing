import type { ReactNode } from 'react'

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  accent?: string
  description?: string
  note?: string
  id?: string
  action?: ReactNode
  tone?: 'light' | 'dark'
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  accent,
  description,
  note,
  id,
  action,
  tone = 'light',
}: SectionHeadingProps) {
  return (
    <div className={`section-head${tone === 'dark' ? ' section-head--dark' : ''}`}>
      <div className="section-head-top">
        <span className="chapter">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <div className="section-head-main">
        <h2 id={id}>
          {title}
          {accent && (
            <>
              {' '}
              <em>{accent}</em>
            </>
          )}
        </h2>
        {note && <span className="section-note hand">{note}</span>}
      </div>
      {(description || action) && (
        <div className="section-head-bottom">
          {description && <p>{description}</p>}
          {action && <div className="section-head-action">{action}</div>}
        </div>
      )}
    </div>
  )
}
