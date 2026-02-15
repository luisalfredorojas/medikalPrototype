import { useState, useEffect, useRef } from 'react'
import './Stats.css'

const stats = [
  { icon: '🏥', value: 15, label: 'Años de experiencia', suffix: '' },
  { icon: '👨‍⚕️', value: 31, label: 'Especialidades', suffix: '' },
  { icon: '🏢', value: 3, label: 'Centros Médicos', suffix: '' },
  { icon: '❤️', value: 368260, label: 'Pacientes atendidos', suffix: '' },
]

function AnimatedNumber({ target, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const stepTime = 16
    const steps = duration / stepTime
    const increment = target / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [inView, target])

  return <span>{count.toLocaleString()}</span>
}

export default function Stats() {
  const [inView, setInView] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats" ref={ref}>
      <div className="stats__overlay"></div>
      <div className="container stats__container">
        {stats.map((stat, i) => (
          <div key={i} className="stats__item">
            <span className="stats__icon">{stat.icon}</span>
            <span className="stats__value">
              <AnimatedNumber target={stat.value} inView={inView} />
              {stat.suffix}
            </span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
