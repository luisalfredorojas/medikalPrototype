import { useState } from 'react'
import './JoinForm.css'

export default function JoinForm() {
  const [formData, setFormData] = useState({
    docType: 'Cédula',
    docNumber: '',
    birthDate: '',
    gender: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="join" id="nosotros">
      <div className="container">
        <div className="join__grid">
          <div className="join__image-col">
            <img src="/images/UneteMedikalImg.png" alt="Equipo Medikal" className="join__image" />
          </div>

          <div className="join__form-col">
            <h2 className="join__title">Únete a la red Medikal</h2>

            {submitted ? (
              <div className="join__success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="48" height="48">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <p>¡Registro exitoso! Te contactaremos pronto.</p>
              </div>
            ) : (
              <form className="join__form" onSubmit={handleSubmit}>
                <div className="join__row">
                  <div className="join__field">
                    <select name="docType" value={formData.docType} onChange={handleChange}>
                      <option>Cédula</option>
                      <option>Pasaporte</option>
                      <option>RUC</option>
                    </select>
                    <label>Tipo de documento *</label>
                  </div>
                  <div className="join__field">
                    <input type="text" name="docNumber" placeholder=" " value={formData.docNumber} onChange={handleChange} required />
                    <label>No. de documento *</label>
                  </div>
                </div>

                <div className="join__row">
                  <div className="join__field">
                    <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
                    <label>Fecha de nacimiento *</label>
                  </div>
                  <div className="join__field">
                    <select name="gender" value={formData.gender} onChange={handleChange} required>
                      <option value="">Seleccionar</option>
                      <option value="M">Masculino</option>
                      <option value="F">Femenino</option>
                      <option value="O">Otro</option>
                    </select>
                    <label>Género *</label>
                  </div>
                </div>

                <div className="join__field">
                  <input type="text" name="firstName" placeholder=" " value={formData.firstName} onChange={handleChange} required />
                  <label>Primer nombre *</label>
                </div>

                <div className="join__field">
                  <input type="text" name="lastName" placeholder=" " value={formData.lastName} onChange={handleChange} required />
                  <label>Primer apellido *</label>
                </div>

                <div className="join__row">
                  <div className="join__field">
                    <input type="email" name="email" placeholder=" " value={formData.email} onChange={handleChange} required />
                    <label>E-mail *</label>
                  </div>
                  <div className="join__field">
                    <input type="tel" name="phone" placeholder=" " value={formData.phone} onChange={handleChange} required />
                    <label>Teléfono *</label>
                  </div>
                </div>

                <div className="join__field">
                  <input type="text" name="address" placeholder=" " value={formData.address} onChange={handleChange} />
                  <label>Dirección *</label>
                </div>

                <button type="submit" className="btn-primary join__submit">
                  Agendar cita
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
