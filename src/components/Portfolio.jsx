import PortfolioCard from './PortfolioCard'

export default function Portfolio({ projects }) {
  return (
    <section
      id="portfolio"
      className="min-h-screen bg-[var(--black)] bg-[url('/images/portfolio.png')] bg-cover bg-center"
    >
      <div className="pt-16 pb-10 px-6 md:px-12">
        <p className="font-mono text-[var(--yellow)] text-sm mb-8 opacity-70">
          Portfolio — {projects.length} proyectos
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {projects.map((p) => (
            <PortfolioCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
