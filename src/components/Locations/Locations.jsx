import './Locations.css'

const sedes = [
  {
    name: 'Medikal "Garzota"',
    image: '/images/Visitanos1.png',
    badge: 'Garzota',
    address: 'Dirección: Av. Guillermo Pareja Rolando Urb. principal la Garzota, C.C. Garzocentro 2000, Local 1001-A',
    hours: [
      'Lunes a viernes de 07h00 a 20h00',
      'Sábados de 07h00 a 18h00',
      'Domingos de 08h00 a 14h00'
    ],
    phones: ['04-3703170', '0958769833'],
  },
  {
    name: 'Medikal "Sur"',
    image: '/images/Visitanos2.png',
    badge: 'Sur',
    address: 'Dirección: Clle. 9 de Octubre, calle 11 entre Av. Domingo Comín y Av. 25 de Julio',
    hours: [
      'Lunes a viernes de 07h00 a 19h00',
      'Sábados de 07h00 a 18h00',
      'Domingos de 08h00 a 12h00'
    ],
    phones: ['04-3703170 Ext. 255 – 256 – 257', 'Celular: 0958737298 – 0992977362'],
  },
  {
    name: 'Medikal "Portete"',
    image: '/images/Visitanos3.png',
    badge: 'Portete',
    address: 'Dirección: Calle Nueva #3001 y Portete (Frente a Drive Imagen)',
    hours: [
      'Lunes a viernes de 07h00 a 19h00',
      'Sábados de 07h00 a 18h00',
      'Domingos de 08h00 a 12h00'
    ],
    phones: ['04-3703170 Ext. 300 y 306', 'Celular: 0992976509 – 0986741426'],
  },
]

export default function Locations({ onAgendarClick }) {
  return (
    <section className="locations" id="visitanos">
      <div className="container">
        <h2 className="section-title">Visítanos</h2>
        
        <div className="locations__grid">
          {sedes.map((sede, i) => (
            <div key={i} className="locations__card">
              <div className="locations__image-wrap">
                <img src={sede.image} alt={sede.name} className="locations__image" />
                <span className="locations__badge">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3" fill="white"/>
                  </svg>
                  {sede.badge}
                </span>
              </div>
              
              <div className="locations__info">
                <h3 className="locations__name">{sede.name}</h3>
                <p className="locations__address">{sede.address}</p>
                
                <div className="locations__hours">
                  <strong>Horarios:</strong>
                  <ul>
                    {sede.hours.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                </div>

                <div className="locations__contact">
                  <strong>Contacto:</strong>
                  {sede.phones.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>

                <button className="btn-primary locations__cta" onClick={onAgendarClick}>
                  Agendar cita
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
