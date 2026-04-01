import { useAppContext } from '../context/AppContext'

export default function VideoModal() {
  const { state, dispatch } = useAppContext()
  const { open, url } = state.videoModal

  if (!open) return null

  const isYoutube = url && (url.includes('youtube.com') || url.includes('youtu.be'))

  return (
    <div
      className="fixed inset-0 z-[900] bg-black/85 flex items-center justify-center"
      onClick={() => dispatch({ type: 'hideVideo' })}
    >
      <div
        className="relative w-[90vw] max-w-3xl aspect-video bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -top-8 right-0 text-[var(--yellow)] font-mono text-lg hover:opacity-70"
          onClick={() => dispatch({ type: 'hideVideo' })}
        >
          ✕ cerrar
        </button>
        {isYoutube ? (
          <iframe
            className="w-full h-full"
            title="project-video"
            src={url}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <video className="w-full h-full" src={url} controls autoPlay />
        )}
      </div>
    </div>
  )
}
