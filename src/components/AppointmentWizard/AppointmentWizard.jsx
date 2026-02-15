import { useState } from 'react'
import './AppointmentWizard.css'

const SEDES = [
  { id: 'garzota', name: 'Medikal Garzota', address: 'C.C. Garzocentro 2000' },
  { id: 'sur', name: 'Medikal Sur', address: 'Clle. 9 de Octubre y 25 de Julio' },
  { id: 'portete', name: 'Medikal Portete', address: 'Calle Nueva #3001 y Portete' },
]

const SERVICES = [
  { id: 'consulta-general', name: 'Consulta General', category: 'consulta' },
  { id: 'pediatria', name: 'Pediatría', category: 'consulta' },
  { id: 'ginecologia', name: 'Ginecología', category: 'consulta' },
  { id: 'cardiologia', name: 'Cardiología', category: 'consulta' },
  { id: 'dermatologia', name: 'Dermatología', category: 'consulta' },
  { id: 'laboratorio-general', name: 'Laboratorio General', category: 'laboratorio' },
  { id: 'chequeo-mujer', name: 'Chequeo Mujer Saludable', category: 'paquete' },
  { id: 'chequeo-preventivo', name: 'Chequeo Preventivo', category: 'paquete' },
  { id: 'teleconsulta', name: 'Teleconsulta', category: 'teleconsulta' },
]

const MOCK_SLOTS = [
  { time: '08:00', doctor: 'Dr. García', available: true },
  { time: '08:30', doctor: 'Dr. García', available: false },
  { time: '09:00', doctor: 'Dra. López', available: true },
  { time: '09:30', doctor: 'Dra. López', available: true },
  { time: '10:00', doctor: 'Dr. Martínez', available: true },
  { time: '10:30', doctor: 'Dr. Martínez', available: false },
  { time: '11:00', doctor: 'Dra. Rodríguez', available: true },
  { time: '11:30', doctor: 'Dra. Rodríguez', available: true },
  { time: '14:00', doctor: 'Dr. García', available: true },
  { time: '14:30', doctor: 'Dr. García', available: true },
  { time: '15:00', doctor: 'Dra. López', available: false },
  { time: '15:30', doctor: 'Dra. López', available: true },
  { time: '16:00', doctor: 'Dr. Martínez', available: true },
]

const STEPS = ['Sede', 'Servicio', 'Fecha y Hora', 'Datos', 'Confirmación']

export default function AppointmentWizard({ onClose }) {
  const [step, setStep] = useState(0)
  const [data, setData] = useState({
    sede: null,
    service: null,
    date: '',
    slot: null,
    patient: { cedula: '', firstName: '', lastName: '', email: '', phone: '' },
  })

  const canNext = () => {
    switch (step) {
      case 0: return !!data.sede
      case 1: return !!data.service
      case 2: return !!data.date && !!data.slot
      case 3: return data.patient.cedula && data.patient.firstName && data.patient.lastName && data.patient.email && data.patient.phone
      default: return true
    }
  }

  const getMinDate = () => {
    const d = new Date()
    d.setDate(d.getDate() + 1)
    return d.toISOString().split('T')[0]
  }

  const getMaxDate = () => {
    const d = new Date()
    d.setDate(d.getDate() + 60)
    return d.toISOString().split('T')[0]
  }

  return (
    <div className="wizard-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="wizard">
        <div className="wizard__header">
          <h2 className="wizard__title">Agendar Cita</h2>
          <button className="wizard__close" onClick={onClose} aria-label="Cerrar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        <div className="wizard__progress">
          {STEPS.map((s, i) => (
            <div key={i} className={`wizard__step-indicator ${i <= step ? 'wizard__step-indicator--active' : ''} ${i < step ? 'wizard__step-indicator--done' : ''}`}>
              <span className="wizard__step-number">{i < step ? '✓' : i + 1}</span>
              <span className="wizard__step-label">{s}</span>
            </div>
          ))}
        </div>

        <div className="wizard__body">
          {/* Step 0: Select Sede */}
          {step === 0 && (
            <div className="wizard__section animate-in">
              <h3>Selecciona una sede</h3>
              <div className="wizard__options">
                {SEDES.map(sede => (
                  <button
                    key={sede.id}
                    className={`wizard__option ${data.sede?.id === sede.id ? 'wizard__option--selected' : ''}`}
                    onClick={() => setData(prev => ({ ...prev, sede }))}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span className="wizard__option-name">{sede.name}</span>
                    <span className="wizard__option-detail">{sede.address}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Select Service */}
          {step === 1 && (
            <div className="wizard__section animate-in">
              <h3>Selecciona un servicio</h3>
              <div className="wizard__options wizard__options--grid">
                {SERVICES.map(s => (
                  <button
                    key={s.id}
                    className={`wizard__option wizard__option--compact ${data.service?.id === s.id ? 'wizard__option--selected' : ''}`}
                    onClick={() => setData(prev => ({ ...prev, service: s }))}
                  >
                    <span className="wizard__option-name">{s.name}</span>
                    <span className="wizard__option-badge">{s.category}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Date & Time */}
          {step === 2 && (
            <div className="wizard__section animate-in">
              <h3>Selecciona fecha y hora</h3>
              <div className="wizard__date-picker">
                <label>Fecha de la cita</label>
                <input
                  type="date"
                  value={data.date}
                  min={getMinDate()}
                  max={getMaxDate()}
                  onChange={(e) => setData(prev => ({ ...prev, date: e.target.value, slot: null }))}
                />
              </div>
              {data.date && (
                <div className="wizard__slots">
                  <label>Horarios disponibles</label>
                  <div className="wizard__slots-grid">
                    {MOCK_SLOTS.map((slot, i) => (
                      <button
                        key={i}
                        className={`wizard__slot ${!slot.available ? 'wizard__slot--disabled' : ''} ${data.slot?.time === slot.time ? 'wizard__slot--selected' : ''}`}
                        disabled={!slot.available}
                        onClick={() => setData(prev => ({ ...prev, slot }))}
                      >
                        <span className="wizard__slot-time">{slot.time}</span>
                        <span className="wizard__slot-doctor">{slot.doctor}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Patient Data */}
          {step === 3 && (
            <div className="wizard__section animate-in">
              <h3>Datos del paciente</h3>
              <div className="wizard__form">
                <div className="wizard__field">
                  <input
                    type="text"
                    placeholder="Número de cédula"
                    value={data.patient.cedula}
                    onChange={(e) => setData(prev => ({ ...prev, patient: { ...prev.patient, cedula: e.target.value } }))}
                    maxLength={10}
                    required
                  />
                </div>
                <div className="wizard__field-row">
                  <div className="wizard__field">
                    <input
                      type="text"
                      placeholder="Nombre"
                      value={data.patient.firstName}
                      onChange={(e) => setData(prev => ({ ...prev, patient: { ...prev.patient, firstName: e.target.value } }))}
                      required
                    />
                  </div>
                  <div className="wizard__field">
                    <input
                      type="text"
                      placeholder="Apellido"
                      value={data.patient.lastName}
                      onChange={(e) => setData(prev => ({ ...prev, patient: { ...prev.patient, lastName: e.target.value } }))}
                      required
                    />
                  </div>
                </div>
                <div className="wizard__field">
                  <input
                    type="email"
                    placeholder="Email"
                    value={data.patient.email}
                    onChange={(e) => setData(prev => ({ ...prev, patient: { ...prev.patient, email: e.target.value } }))}
                    required
                  />
                </div>
                <div className="wizard__field">
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    value={data.patient.phone}
                    onChange={(e) => setData(prev => ({ ...prev, patient: { ...prev.patient, phone: e.target.value } }))}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="wizard__section wizard__confirmation animate-in">
              <div className="wizard__confirm-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" width="64" height="64">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>¡Cita Agendada!</h3>
              <p className="wizard__confirm-code">Código: <strong>MK-{Math.random().toString(36).substr(2, 6).toUpperCase()}</strong></p>
              <div className="wizard__confirm-details">
                <div className="wizard__confirm-row">
                  <span>Sede:</span>
                  <strong>{data.sede?.name}</strong>
                </div>
                <div className="wizard__confirm-row">
                  <span>Servicio:</span>
                  <strong>{data.service?.name}</strong>
                </div>
                <div className="wizard__confirm-row">
                  <span>Fecha:</span>
                  <strong>{data.date}</strong>
                </div>
                <div className="wizard__confirm-row">
                  <span>Hora:</span>
                  <strong>{data.slot?.time}</strong>
                </div>
                <div className="wizard__confirm-row">
                  <span>Doctor:</span>
                  <strong>{data.slot?.doctor}</strong>
                </div>
                <div className="wizard__confirm-row">
                  <span>Paciente:</span>
                  <strong>{data.patient.firstName} {data.patient.lastName}</strong>
                </div>
              </div>
              <button className="btn-primary wizard__done-btn" onClick={onClose}>
                Cerrar
              </button>
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        {step < 4 && (
          <div className="wizard__footer">
            <button
              className="btn-outline"
              onClick={() => step > 0 ? setStep(step - 1) : onClose()}
            >
              {step === 0 ? 'Cancelar' : 'Anterior'}
            </button>
            <button
              className="btn-primary"
              disabled={!canNext()}
              onClick={() => setStep(step + 1)}
            >
              {step === 3 ? 'Confirmar Cita' : 'Siguiente'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
