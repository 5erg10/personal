import { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'

function SkeletonImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative w-full min-h-25">
      {!loaded && (
        <div className="absolute inset-0 bg-white/10 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}

function SkeletonIframe({ src, title }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative aspect-video mb-4">
      {!loaded && (
        <div className="absolute inset-0 bg-white/10 animate-pulse flex items-center justify-center">
          <i className="fa fa-youtube-play text-white/20 text-5xl" />
        </div>
      )}
      <iframe
        src={src}
        title={title}
        className={`w-full h-full transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        allow="autoplay; encrypted-media"
        allowFullScreen
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

export default function ProjectModal() {
  const { state, dispatch } = useAppContext()
  const { open, project } = state.projectModal
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (open) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.paddingRight = `${scrollbarWidth}px`
      document.body.style.overflow = 'hidden'
      requestAnimationFrame(() => setVisible(true))
    } else {
      setVisible(false)
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [open])

  if (!open || !project) return null

  const close = () => dispatch({ type: 'hideProject' })

  return (
    <div
      className={`fixed inset-0 z-800 flex items-center justify-center p-4 md:p-8 transition-all duration-300 ${visible ? 'bg-black/80' : 'bg-black/0'}`}
      onClick={close}
    >
      <div
        className={`relative bg-(--black) border border-white/10 w-full max-w-5xl max-h-[90vh] overflow-y-auto transition-all duration-300 ease-out ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-(--black) border-b border-white/10 px-6 py-4 flex items-start justify-between gap-4 z-10">
          <div>
            <h2 className="font-mono text-white text-lg">
              {project.title}{' '}
              <span className="text-white/40 text-sm">({project.year})</span>
            </h2>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-(--yellow) text-xs hover:underline"
              >
                → Prototipo
              </a>
            )}
            <div className="flex flex-wrap gap-1 mt-2">
              {project.techs?.map((t) => (
                <span
                  key={t.tech}
                  className="font-mono text-[10px] text-(--yellow) border border-(--yellow)/40 px-1.5 py-0.5"
                >
                  {t.tech}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={close}
            className="text-white/60 font-mono text-sm hover:text-white shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Body — key={project.id} resetea el estado loaded de los skeletons al cambiar de proyecto */}
        <div key={project.id} className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 p-6">
          {/* Left: resume + videos */}
          <div>
            <div
              className="font-mono text-white/80 text-sm leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: project.resume }}
            />
            {project.media?.videos?.map((vid) => (
              <SkeletonIframe
                key={vid}
                src={`https://www.youtube-nocookie.com/embed/${vid}`}
                title={project.title}
              />
            ))}
          </div>

          {/* Right: images */}
          <div className="flex flex-col gap-3">
            {project.media?.images?.map((img) => (
              <SkeletonImage
                key={img}
                src={`images/projects/${img}`}
                alt={img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
