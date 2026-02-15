import { useState } from 'react'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section className="newsletter">
      <div className="container newsletter__container">
        <p className="newsletter__text">
          Suscríbete hoy y recibe por correo electrónico noticias, ofertas y mucho más!
        </p>
        {sent ? (
          <span className="newsletter__success">✓ ¡Suscrito!</span>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Ingresa tu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="newsletter__input"
            />
            <button type="submit" className="btn-primary newsletter__btn">
              Suscríbeme
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
