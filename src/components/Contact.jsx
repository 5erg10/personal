import { useState } from 'react'

const EMAIL_CONFIG = {
  serviceId: 'personal_email_service',
  templateId: 'template_csiuckg',
  publicKey: 'wmOWwFMP1VytTUw29',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | ok | err

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await window.emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        { from_name: form.name, to_name: 'sergio', message: form.message, reply_to: form.email },
        EMAIL_CONFIG.publicKey
      )
      if (res.status === 200) {
        setForm({ name: '', email: '', message: '' })
        setStatus('ok')
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        setStatus('err')
      }
    } catch {
      setStatus('err')
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-[var(--black)] bg-[url('/images/mail.png')] bg-cover bg-center flex items-center justify-center"
    >
      <div className="w-full max-w-xl mx-4 md:mx-auto mt-14 mb-10 px-6 py-8">
        <p className="font-mono text-[var(--yellow)] text-sm mb-8 opacity-70">Contact</p>

        <form onSubmit={handleSubmit} className="font-mono text-white text-sm leading-loose">
          <p>Hola Sergio,</p>
          <p className="flex flex-wrap items-baseline gap-2 mt-2">
            <span>Mi nombre es</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="(tu nombre aquí)"
              minLength={3}
              required
              className="bg-transparent border-b-2 border-dashed border-white/40 focus:border-white outline-none font-mono italic text-sm px-1 w-44 transition-colors"
            />
          </p>
          <p className="flex flex-wrap items-baseline gap-2 mt-2">
            <span>mi correo electrónico es</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="(tu correo aquí)"
              required
              className="bg-transparent border-b-2 border-dashed border-white/40 focus:border-white outline-none font-mono italic text-sm px-1 w-52 transition-colors"
            />
          </p>
          <p className="mt-4">Tengo un mensaje para ti,</p>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="(Tu mensaje aquí)"
            required
            rows={5}
            className="w-full mt-2 bg-transparent border-b-2 border-dashed border-white/40 focus:border-white outline-none font-mono italic text-sm px-1 resize-none transition-colors"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-6 flex items-center gap-2 text-[var(--black)] bg-[var(--yellow)] px-4 py-2 font-mono text-sm hover:opacity-80 transition-opacity disabled:opacity-50"
          >
            {status === 'sending' ? (
              <><i className="fa fa-spinner fa-spin" /> Enviando…</>
            ) : (
              <><i className="fa fa-paper-plane" /> Enviar</>
            )}
          </button>

          {status === 'ok' && (
            <p className="mt-4 font-mono text-green-400 text-xs">
              ✓ ¡Mensaje enviado! Te responderé en breve.
            </p>
          )}
          {status === 'err' && (
            <p className="mt-4 font-mono text-red-400 text-xs">
              ✗ Algo salió mal. Inténtalo de nuevo.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
