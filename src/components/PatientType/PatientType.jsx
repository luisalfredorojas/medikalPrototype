import './PatientType.css'

export default function PatientType() {
  return (
    <section className="patient-type" id="paciente">
      <div className="container">
        <h2 className="section-title">¿Paciente nuevo o recurrente?</h2>
        
        <div className="patient-type__grid">
          <div className="patient-type__card">
            <div className="patient-type__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <h3>¿Ya eres paciente Medikal?</h3>
            <p>Ingresa tus datos y agenda una cita.</p>
            <button className="btn-primary patient-type__btn">
              Inicia sesión y agenda una cita.
            </button>
          </div>

          <div className="patient-type__divider">
            <span>o</span>
          </div>

          <div className="patient-type__card">
            <div className="patient-type__icon patient-type__icon--accent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
                <line x1="20" y1="8" x2="20" y2="14"/>
                <line x1="23" y1="11" x2="17" y2="11"/>
              </svg>
            </div>
            <h3>¿Paciente nuevo?</h3>
            <p>Registra tu información y nosotros y Agenda una cita.</p>
            <button className="btn-outline patient-type__btn">
              Ingresa tu información
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
