import './Insurance.css'

const logos = Array.from({ length: 13 }, (_, i) => {
  const nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 16]
  return {
    src: `/logos/post medikal-46 (1) ${nums[i]}.png`,
    alt: `Aseguradora ${i + 1}`
  }
})

export default function Insurance() {
  return (
    <section className="insurance" id="convenios">
      <div className="container">
        <h2 className="section-title">Convenios con aseguradoras</h2>
        
        <div className="insurance__grid">
          {logos.map((logo, i) => (
            <div key={i} className="insurance__logo-wrap">
              <img src={logo.src} alt={logo.alt} className="insurance__logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
