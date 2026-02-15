import './QuickAccess.css'

const services = [
  {
    id: 'agendamiento',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: 'Agendamiento de cita',
    desc: 'Agenda tus citas de manera inmediata. Este hacer fila y tener prioridad en tu salud y tu tiempo.',
  },
  {
    id: 'laboratorio',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 3h6v6l4 8H5l4-8V3z"/>
        <line x1="9" y1="3" x2="15" y2="3"/>
      </svg>
    ),
    title: 'Laboratorio',
    desc: 'En el Laboratorio Clínico Medikal contamos con más de 300 estudios de laboratorio, los cuales ponemos a tu disposición.',
  },
  {
    id: 'paquetes',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
      </svg>
    ),
    title: 'Paquetes / Servicios',
    desc: 'Contamos con un equipo de profesionales especializados en diferentes áreas de la medicina.',
  },
  {
    id: 'teleconsulta',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Teleconsulta',
    desc: 'Consulta en línea con profesionales de la salud, recibe diagnóstico, tratamiento y recetas de tus exámenes médicos sin salir de donde estés.',
  },
  {
    id: 'especialidades',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Especialidades',
    desc: 'Contamos con más de 30 especialidades para atención integral de niños, adultos, adultos mayores y mujeres embarazadas.',
  },
  {
    id: 'sedes',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Sede/ Nosotros/ Contacto',
    desc: 'Sabemos lo importante que es contar con atención médica de calidad cuando más lo necesitas. En Medikal te encontramos.',
  },
]

export default function QuickAccess() {
  return (
    <section className="quick-access" id="servicios">
      <div className="container">
        <div className="quick-access__grid">
          {services.map(service => (
            <div key={service.id} className="quick-access__card">
              <div className="quick-access__icon">{service.icon}</div>
              <h3 className="quick-access__title">{service.title}</h3>
              <p className="quick-access__desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
