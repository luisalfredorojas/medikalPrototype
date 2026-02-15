import { useState, useEffect } from 'react'
import './HeroCarousel.css'

const slides = [
  {
    tag: '$43.23',
    title: 'Chequeo Mujer Saludable',
    description: 'Un control ginecológico integral que reúne consulta especializada, ecografías y exámenes esenciales para mantener tu salud femenina al día.',
    cta: 'Agendar cita',
    bgGradient: 'linear-gradient(135deg, #F5F0FF 0%, #FFF0F5 100%)',
  },
  {
    tag: '$29.99',
    title: 'Chequeo General Preventivo',
    description: 'Incluye consulta médica, exámenes de laboratorio básicos y evaluación completa. Cuida tu salud con nuestros profesionales.',
    cta: 'Agendar cita',
    bgGradient: 'linear-gradient(135deg, #F0F9FF 0%, #FFF0F5 100%)',
  },
  {
    tag: '$55.00',
    title: 'Paquete Familiar Integral',
    description: 'Atención médica para toda la familia. Consultas pediátricas, medicina general y especialidades con precios accesibles.',
    cta: 'Agendar cita',
    bgGradient: 'linear-gradient(135deg, #F0FFF4 0%, #FFF5F0 100%)',
  },
]

export default function HeroCarousel({ onAgendarClick }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <div className="hero__bg-shape hero__bg-shape--1"></div>
        <div className="hero__bg-shape hero__bg-shape--2"></div>
      </div>

      <div className="container">
        <div className="hero__header">
          <h1 className="hero__title">¡Nos preocupamos por tu salud!</h1>
          <p className="hero__subtitle">
            Contamos con más de 30 especialidades para atención integral de niños,
            adultos, adultos mayores y mujeres embarazadas.
          </p>
        </div>

        <div className="hero__carousel">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`hero__slide ${i === current ? 'hero__slide--active' : ''}`}
              style={{ background: slide.bgGradient }}
            >
              <div className="hero__slide-content">
                <span className="hero__slide-tag">{slide.tag}</span>
                <h2 className="hero__slide-title">{slide.title}</h2>
                <p className="hero__slide-desc">{slide.description}</p>
                <button className="btn-primary" onClick={onAgendarClick}>
                  {slide.cta}
                </button>
              </div>
              <div className="hero__slide-visual">
                <div className="hero__slide-circle"></div>
              </div>
            </div>
          ))}

          <div className="hero__dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
