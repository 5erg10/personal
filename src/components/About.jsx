import { useState, useEffect, useRef } from 'react'
import { BOT_ANSWERS, HINTS } from '../data/chatbot'
import { PROJECTS } from '../data/projects'
import { useAppContext } from '../context/AppContext'

function wordMatch(text, keywords) {
  return keywords.some((kw) =>
    new RegExp(
      `(^|[^a-záéíóúüñ])${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^a-záéíóúüñ]|$)`,
      'i'
    ).test(text)
  )
}

function filterProjects({ filterTechs, filterAreas }) {
  if (!filterTechs?.length && !filterAreas?.length) return []
  return PROJECTS.filter((p) => {
    const techMatch = filterTechs?.some((t) =>
      p.techs.some((pt) => pt.tech.toLowerCase().includes(t.toLowerCase()))
    )
    const areaMatch = filterAreas?.some((a) => p.areas.includes(a))
    return techMatch || areaMatch
  })
}

function getReply(text) {
  for (const item of BOT_ANSWERS) {
    if (wordMatch(text, item.keywords)) {
      return {
        text: item.reply,
        projects: filterProjects(item),
      }
    }
  }
  return {
    text: 'Puedo contarte sobre: <b>ThreeJS</b>, <b>React</b>, <b>Angular</b>, <b>VR/AR</b>, <b>IA/NLP</b> o el <b>portfolio</b>. ¡Pregúntame lo que quieras!',
    projects: [],
  }
}

function ProjectCarousel({ projects }) {
  const { dispatch } = useAppContext()
  const scrollRef = useRef(null)

  return (
    <div className="mt-2 w-full max-w-[85vw] md:max-w-115">
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto pb-2 scroll-smooth"
        style={{ scrollbarWidth: 'thin' }}
      >
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => dispatch({ type: 'showProject', project: p })}
            className="shrink-0 w-28 flex flex-col bg-(--black) border border-white/10 hover:border-(--yellow) transition-colors text-left overflow-hidden"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-16 object-cover"
              loading="lazy"
            />
            <div className="px-1.5 py-1.5">
              <p className="font-mono text-white text-[10px] leading-tight line-clamp-2">{p.title}</p>
              <p className="font-mono text-white/40 text-[9px] mt-0.5">{p.year}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hola! Soy el bot de Sergio. Pregúntame sobre sus tecnologías y proyectos 🙂', projects: [] },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const listRef = useRef(null)

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages, typing])

  function sendMessage(text) {
    const msg = (text ?? input).trim()
    if (!msg) return
    setMessages((m) => [...m, { from: 'user', text: msg, projects: [] }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      const reply = getReply(msg)
      setMessages((m) => [...m, { from: 'bot', ...reply }])
    }, 1100)
  }

  function handleKey(e) {
    if (e.key === 'Enter') { e.preventDefault(); sendMessage() }
  }

  return (
    <section
      id="about"
      className="min-h-screen bg-(--black) bg-[url('/images/perfil.png')] bg-cover bg-right flex items-center justify-center"
    >
      <div className="w-full max-w-2xl mx-4 md:mx-auto mt-14 mb-10 flex flex-col h-[80vh] border border-white/10">

        {/* Chat header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-(--yellow)/40 shrink-0">
          <img src="images/serImg.png" alt="Sergio" className="w-10 h-10 rounded-full object-cover" />
          <div className="flex-1">
            <p className="font-mono text-white text-sm">Sergio Santamaria Fajardo</p>
            <p className="font-mono text-green-400 text-[11px]">● online</p>
          </div>
          <div className="flex gap-3 text-white/40 text-sm">
            <a href="https://linkedin.com/in/sergio-santamaria-78b844a4" target="_blank" rel="noopener noreferrer" className="hover:text-(--yellow)">
              <i className="fa fa-linkedin" />
            </a>
          </div>
        </div>

        {/* Hints */}
        <div className="flex flex-wrap gap-2 px-4 py-2 border-b border-white/5 shrink-0">
          {HINTS.map((h) => (
            <button
              key={h}
              onClick={() => sendMessage(h)}
              className="font-mono text-[11px] text-(--yellow) border border-(--yellow)/40 px-2 py-1 hover:bg-(--yellow) hover:text-(--black) transition-colors"
            >
              {h}
            </button>
          ))}
        </div>

        {/* Messages */}
        <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex items-end gap-2 ${msg.from === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {msg.from === 'bot' && (
                <img src="images/serImg.png" alt="" className="w-7 h-7 rounded-full object-cover shrink-0 self-start mt-1" />
              )}
              <div className={`flex flex-col gap-2 ${msg.from === 'user' ? 'items-end' : 'items-start'}`}>
                <p
                  className={`font-mono text-sm px-3 py-2 max-w-[75%] leading-relaxed ${
                    msg.from === 'bot'
                      ? 'bg-white text-(--black)'
                      : 'bg-(--black) text-white border border-white/20'
                  }`}
                  dangerouslySetInnerHTML={{ __html: msg.text }}
                />
                {msg.projects?.length > 0 && (
                  <ProjectCarousel projects={msg.projects} />
                )}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex items-end gap-2">
              <img src="images/serImg.png" alt="" className="w-7 h-7 rounded-full object-cover shrink-0" />
              <div className="bg-white px-4 py-3 flex gap-1 items-center">
                <span className="typing-dot" />
                <span className="typing-dot" style={{ animationDelay: '0.2s' }} />
                <span className="typing-dot" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="flex border-t border-white/10 shrink-0">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Escribe tu pregunta..."
            className="flex-1 bg-white/10 text-white font-mono text-sm px-4 py-3 outline-none placeholder-white/30"
          />
          <button
            onClick={() => sendMessage()}
            className="w-[45px] bg-[var(--yellow)] text-(--black) hover:opacity-80 transition-opacity"
          >
            <i className="fa fa-paper-plane" />
          </button>
        </div>
      </div>
    </section>
  )
}
