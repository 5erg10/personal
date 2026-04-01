import { useState } from 'react'

const LINKS = ['home', 'portfolio', 'about', 'contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop nav */}
      <nav className="fixed top-0 right-0 z-50 hidden md:flex items-center h-[50px] px-6 bg-[var(--black)]">
        {LINKS.map((l, i) => (
          <a
            key={l}
            href={`#${l}`}
            className="ml-6 text-[var(--yellow)] font-mono no-underline hover:opacity-70 transition-opacity"
            style={{ fontSize: `${0.8 + i * 0.13}rem` }}
          >
            <span className="opacity-50">{i + 1}.</span>
            {l.charAt(0).toUpperCase() + l.slice(1)}
          </a>
        ))}
      </nav>

      {/* Mobile toggle */}
      <button
        className="fixed top-3 right-4 z-50 flex md:hidden flex-col gap-[5px] p-2"
        onClick={() => setOpen(!open)}
        aria-label="menu"
      >
        <span className={`block w-6 h-[2px] bg-[var(--yellow)] transition-all ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`block w-6 h-[2px] bg-[var(--yellow)] transition-all ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-[2px] bg-[var(--yellow)] transition-all ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-[var(--black)] flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {LINKS.map((l) => (
          <a
            key={l}
            href={`#${l}`}
            onClick={() => setOpen(false)}
            className="text-[var(--yellow)] font-mono text-2xl no-underline"
          >
            {l.charAt(0).toUpperCase() + l.slice(1)}
          </a>
        ))}
      </div>
    </>
  )
}
