type DoodleProps = {
  className?: string
}

export function FlowerMark({ className }: DoodleProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g transform="translate(20 20)">
          <ellipse cx="0" cy="-10" rx="4.6" ry="8.2" />
          <ellipse cx="0" cy="-10" rx="4.6" ry="8.2" transform="rotate(60)" />
          <ellipse cx="0" cy="-10" rx="4.6" ry="8.2" transform="rotate(120)" />
          <ellipse cx="0" cy="-10" rx="4.6" ry="8.2" transform="rotate(180)" />
          <ellipse cx="0" cy="-10" rx="4.6" ry="8.2" transform="rotate(240)" />
          <ellipse cx="0" cy="-10" rx="4.6" ry="8.2" transform="rotate(300)" />
          <circle cx="0" cy="0" r="3" />
        </g>
      </g>
    </svg>
  )
}

export function FlowerStem({ className }: DoodleProps) {
  return (
    <svg className={className} viewBox="0 0 80 120" aria-hidden="true" focusable="false">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M40 50v62" />
        <path d="M40 88c-14-2-22-10-24-24 12 1 21 8 24 24Z" />
        <path d="M40 99c12-2 19-9 21-21-11 1-18 8-21 21Z" />
        <g transform="translate(40 34)">
          <ellipse cx="0" cy="-11" rx="5" ry="9" />
          <ellipse cx="0" cy="-11" rx="5" ry="9" transform="rotate(60)" />
          <ellipse cx="0" cy="-11" rx="5" ry="9" transform="rotate(120)" />
          <ellipse cx="0" cy="-11" rx="5" ry="9" transform="rotate(180)" />
          <ellipse cx="0" cy="-11" rx="5" ry="9" transform="rotate(240)" />
          <ellipse cx="0" cy="-11" rx="5" ry="9" transform="rotate(300)" />
          <circle cx="0" cy="0" r="3.4" />
        </g>
      </g>
    </svg>
  )
}

export function StarDoodle({ className }: DoodleProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 1.8c.7 6.3 3.1 8.7 9.4 9.4-6.3.7-8.7 3.1-9.4 9.4-.7-6.3-3.1-8.7-9.4-9.4C8.9 10.5 11.3 8.1 12 1.8Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function HeartDoodle({ className }: DoodleProps) {
  return (
    <svg className={className} viewBox="0 0 32 30" aria-hidden="true" focusable="false">
      <path
        d="M16 26.5C9.5 21.5 3.2 16.1 3.2 10.4c0-4 3-6.8 6.6-6.8 2.6 0 4.8 1.4 6.2 3.7 1.4-2.3 3.6-3.7 6.2-3.7 3.6 0 6.6 2.8 6.6 6.8 0 5.7-6.3 11.1-12.8 16.1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArrowDoodle({ className }: DoodleProps) {
  return (
    <svg className={className} viewBox="0 0 44 24" aria-hidden="true" focusable="false">
      <path
        d="M2 16c8-8 18-9 30-3M26 6l8 7-10 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Squiggle({ className }: DoodleProps) {
  return (
    <svg className={className} viewBox="0 0 80 12" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path
        d="M1 8c8-6 14 4 22-1s14 4 22-1 14 4 22-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}
