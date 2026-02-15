import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroCarousel from './components/HeroCarousel/HeroCarousel'
import PatientType from './components/PatientType/PatientType'
import QuickAccess from './components/QuickAccess/QuickAccess'
import Locations from './components/Locations/Locations'
import Stats from './components/Stats/Stats'
import Insurance from './components/Insurance/Insurance'
import Testimonials from './components/Testimonials/Testimonials'
import JoinForm from './components/JoinForm/JoinForm'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'
import AppointmentWizard from './components/AppointmentWizard/AppointmentWizard'

function App() {
  const [showAppointment, setShowAppointment] = useState(false)

  return (
    <div className="app">
      <Navbar onAgendarClick={() => setShowAppointment(true)} />
      <main>
        <HeroCarousel onAgendarClick={() => setShowAppointment(true)} />
        <PatientType />
        <QuickAccess />
        <Locations onAgendarClick={() => setShowAppointment(true)} />
        <Stats />
        <Insurance />
        <Testimonials />
        <JoinForm />
        <Newsletter />
      </main>
      <Footer />
      {showAppointment && (
        <AppointmentWizard onClose={() => setShowAppointment(false)} />
      )}
    </div>
  )
}

export default App
