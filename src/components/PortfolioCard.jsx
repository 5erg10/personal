import { useAppContext } from '../context/AppContext'

export default function PortfolioCard({ project }) {
  const { dispatch } = useAppContext()

  const overlay = (
    <div className="portfolio-card-overlay absolute inset-0 bg-black/90 border-8 border-[var(--yellow)] opacity-0 -left-full transition-all duration-200 flex flex-col justify-center p-4">
      {project.inProgress && (
        <span className="text-[var(--yellow)] font-mono text-xs mb-2">⚠ Work in progress</span>
      )}
      <h3 className="text-white font-mono text-base mb-2">{project.title}</h3>
      <p
        className="text-white/80 font-mono text-xs leading-relaxed mb-3 line-clamp-3"
        dangerouslySetInnerHTML={{ __html: project.description }}
      />
      <div className="flex flex-wrap gap-1 mb-3">
        {project.techs.map((t) => (
          <span key={t.tech} className="text-[var(--yellow)] font-mono text-[10px] border border-[var(--yellow)]/40 px-1.5 py-0.5">
            {t.tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-auto">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--yellow)] font-mono text-xs hover:underline"
          >
            · Prototipo
          </a>
        )}
        <button
          onClick={() => dispatch({ type: 'showProject', project })}
          className="text-[var(--yellow)] font-mono text-xs hover:underline cursor-pointer"
        >
          + info
        </button>
      </div>
    </div>
  )

  const inner = (
    <div className="portfolio-card-inner relative w-full h-full overflow-hidden group">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.1] group-hover:rotate-[2deg]"
      />
      {overlay}
    </div>
  )

  return (
    <div className="portfolio-card w-[350px] min-h-57.5 h-57.5 md:h-auto relative">
      {inner}
    </div>
  )
}
