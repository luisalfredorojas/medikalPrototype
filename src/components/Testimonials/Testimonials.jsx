import './Testimonials.css'

const testimonials = [
  {
    name: 'Sucoity Cruz',
    rating: 5,
    text: 'Precios razonables en toda atención médica, doctores al servicio de la comunidad y su personal siempre prestos a servir con eficiencia y calidez a cada paciente.',
  },
  {
    name: 'Fernando Mera',
    rating: 5,
    text: 'Profesionales comprometidos con el paciente, me hicieron sentir cómodo y el proceso de agendamiento fue muy rápido.',
  },
  {
    name: 'Alice Arias',
    rating: 5,
    text: 'Buen servicio, el personal muy amable, los doctores profesionales y atentos, los resultados de los exámenes son entregados ágilmente.',
  },
]

function Stars({ count }) {
  return (
    <div className="testimonials__stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill={i < count ? '#FFB800' : '#E0E0E0'} width="18" height="18">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonios">
      <div className="container">
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonials__card">
              <Stars count={t.rating} />
              <p className="testimonials__text">"{t.text}"</p>
              <div className="testimonials__author">
                <div className="testimonials__avatar">
                  {t.name.charAt(0)}
                </div>
                <span className="testimonials__name">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
