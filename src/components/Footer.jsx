export default function Footer() {
  return (
    <footer className="bg-[var(--black)] border-t border-white/10 py-6 px-6">
      <p className="font-mono text-white/30 text-xs text-center">
        © {new Date().getFullYear()} Sergio Santamaria Fajardo — Built with React + Vite
      </p>
    </footer>
  )
}
