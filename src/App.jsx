import { useState } from 'react'
import { SECTIONS, GUIDE, SPECIAL, MEDIA } from './menuData.js'

const Flame = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M24 6C24 6 12 20 12 30a12 12 0 0 0 24 0C36 20 24 6 24 6Z" fill="currentColor" />
    <path d="M24 42a7.5 7.5 0 0 0 7.5-7.5C31.5 29 24 21 24 21s-7.5 8-7.5 13.5A7.5 7.5 0 0 0 24 42Z" fill="#fff" opacity=".85" />
  </svg>
)

function Chip({ label }) {
  const cls =
    (label.startsWith('V') && 'v') ||
    (label.toLowerCase().startsWith('pic') && 'sp') ||
    (label.toLowerCase().includes('láct') && 'd') ||
    ''
  return <span className={`chip ${cls}`}>{label}</span>
}

function Row({ item }) {
  const prices = typeof item.price === 'object'
  return (
    <div className="row">
      <span className="name">
        {item.name}
        {item.desc && <small>{item.desc}</small>}
      </span>
      {prices ? (
        <span className="prices">
          <span className="price price-p">
            {item.price.personal} <sub>P</sub>
          </span>
          <span className="price price-m">
            {item.price.mediana} <sub>M</sub>
          </span>
          <span className="price price-g">
            {item.price.grande} <sub>G</sub>
          </span>
        </span>
      ) : (
        <span className="price price-u">
          ${item.price} <em>USD</em>
        </span>
      )}
      <span className="tags">
        {item.tags.map((t) => (
          <Chip key={t} label={t} />
        ))}
      </span>
    </div>
  )
}

function Section({ section }) {
  return (
    <section className="section" id={section.id}>
      <div className="head">
        <span className="eyebrow">{section.kicker}</span>
        <h2>{section.title}</h2>
      </div>
      <div className="card">
        {section.items.map((item) => (
          <Row key={item.name} item={item} />
        ))}
      </div>
    </section>
  )
}

function Brand() {
  return (
    <span className="brand">
      <span className="mark">
        <Flame />
      </span>
      <span className="we">
        <i>Napolis</i>
      </span>
    </span>
  )
}

function Nav({ onHome }) {
  return (
    <nav className="nav">
      <button className="logo" onClick={onHome} title="Volver a la portada">
        <Brand />
      </button>
      <div className="links">
        <a href="#antipasti">Entrantes</a>
        <a href="#rosse">Rojas</a>
        <a href="#speciali">Especiales</a>
        <a href="#bianche">Blancas</a>
        <a href="#dolci">Postres</a>
      </div>
      <a className="btn primary sm" href="#info">
        Reservar
      </a>
    </nav>
  )
}

function Masthead() {
  return (
    <header className="masthead">
      <h1>
        La <em>carta</em>
      </h1>
      <p>Masa madre de 48 horas, tomate San Marzano y el horno a 450 °C.</p>
    </header>
  )
}

function Guide() {
  return (
    <div className="sizes">
      {GUIDE.map((g) => (
        <div key={g.size}>
          <b>{g.cm}</b>
          <span className="t">{g.size}</span>
          <small>{g.pax} pax</small>
        </div>
      ))}
    </div>
  )
}

function Special() {
  return (
    <div className="special">
      <div>
        <span className="eyebrow">la specialità della sera</span>
        <h3>{SPECIAL.title}</h3>
        <p>{SPECIAL.desc}</p>
        <span className="pill">★ {SPECIAL.label}</span>
      </div>
      <div className="sprice">
        <b>${SPECIAL.price}</b>
        <small>USD · tamaño único</small>
      </div>
    </div>
  )
}

function Story() {
  return (
    <section className="section" id="historia">
      <div className="head">
        <span className="eyebrow">nuestra historia</span>
        <h2>
          Un horno, una <em>ciudad</em>
        </h2>
      </div>
      <div className="story">
        <div className="photos">
          <div className="tall">
            <img src={MEDIA.storyTop} alt="La masa de Napolis reposando" loading="lazy" />
          </div>
          <img src={MEDIA.dishOne} alt="Detalle de pizza al horno" loading="lazy" />
          <img src={MEDIA.dishTwo} alt="Pizza artesanal recién salida" loading="lazy" />
        </div>
        <div className="text">
          <h3 className="s-head">De la mano de la tradición napolitana</h3>
          <p>
            En Napolis no seguimos recetas de manual: seguimos el toque del pizzero y la
            señal de la brasa. El fermento es <b>48 horas</b>, el borde queda aireado, y la
            cocción, en dominio absoluto del fuego.
          </p>
          <div className="facts">
            <div>
              <b>48 h</b>
              <small>fermentación</small>
            </div>
            <div>
              <b>90″</b>
              <small>en el horno</small>
            </div>
            <div>
              <b>450 °</b>
              <small>leña viva</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Info() {
  return (
    <section className="section" id="info">
      <div className="head">
        <span className="eyebrow">dónde estamos</span>
        <h2>Visítanos</h2>
      </div>
      <div className="info">
        <div className="card">
          <h4>Dirección &amp; Contacto</h4>
          <p>
            Av. San Martín 420, Centro
            <br />
            Tel +54 9 381 456-7890
            <br />
            Delivery gratis zona céntrica · $2.50 fuera de zona
          </p>
          <span className="pill accent">Reservá tu mesa</span>
        </div>
        <div className="card">
          <h4>Orari</h4>
          <ul>
            <li>
              <span>Lun – Vie</span> <b>12:00 – 22:00</b>
            </li>
            <li>
              <span>Sábado</span> <b>12:00 – 23:00</b>
            </li>
            <li>
              <span>Domingo</span> <b>12:00 – 21:00</b>
            </li>
          </ul>
          <span className="note">Cocina abierta hasta 30 min antes del cierre · take-away todo el día</span>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <Brand />
      <p>Pizzeria artesanal · masa madre 48 h · tomate San Marzano · mozzarella</p>
      <div className="foot-cols">
        <div>
          <span className="fc-label">Dónde</span>
          <span>Av. San Martín 420 · Centro</span>
        </div>
        <div>
          <span className="fc-label">Horarios</span>
          <span>Lun–Dom · 12:00 – 23:00</span>
        </div>
        <div>
          <span className="fc-label">Contacto</span>
          <span>+54 9 381 456-7890 · @napolis.pizza</span>
        </div>
      </div>
      <div className="foot-line">
        <span>horno de leña 450 °C</span>
        <span>·</span>
        <span>precios en USD</span>
        <span>·</span>
        <span>desde 2009</span>
      </div>
    </footer>
  )
}

function Welcome({ onOpen }) {
  return (
    <div className="welcome">
      <nav className="wland">
        <Brand />
        <span className="wmeta">Est. 2009 · Centro</span>
      </nav>
      <div className="split">
        <div className="copy">
          <span className="eyebrow">pizzeria napolitana · horno de leña</span>
          <h1>
            Pizza a la <em>brasa,</em> como en Nápoles.
          </h1>
          <p className="lede">
            Masa madre de <b>48 horas</b>, tomate San Marzano y mozzarella fresca:
            en nuestro horno a <b>450 °C</b>, cada pizza se cuece en <b>90 segundos</b>.
          </p>
          <button className="btn primary big" onClick={onOpen}>
            Ver la carta <span aria-hidden>↘</span>
          </button>
          <div className="hints">
            <span>Entrantes</span>
            <span className="dot" aria-hidden />
            <span>Pizzas Rojas</span>
            <span className="dot" aria-hidden />
            <span>Especiales</span>
            <span className="dot" aria-hidden />
            <span>Blancas</span>
            <span className="dot" aria-hidden />
            <span>Postres</span>
          </div>
        </div>
        <div className="photo">
          <img src={MEDIA.heroMain} alt="Pizza napolitana recién salida del horno de Napolis" />
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [open, setOpen] = useState(() => new URLSearchParams(window.location.search).get('menu') === '1')
  const byId = (id) => SECTIONS.find((s) => s.id === id)

  const openMenu = () => {
    setOpen(true)
    requestAnimationFrame(() => window.scrollTo({ top: 0 }))
  }
  const closeMenu = () => {
    setOpen(false)
    window.scrollTo({ top: 0 })
  }

  if (!open) return <Welcome onOpen={openMenu} />

  return (
    <div className="site">
      <Nav onHome={closeMenu} />
      <Masthead />
      <Guide />
      <Special />

      <Section section={byId('antipasti')} />
      <Section section={byId('rosse')} />
      <Section section={byId('speciali')} />
      <Section section={byId('bianche')} />

      <div className="cols">
        <Section section={byId('combos')} />
        <Section section={byId('bevande')} />
      </div>

      <Section section={byId('dolci')} />
      <Story />
      <Info />
      <Footer />

      <button className="back-btn" onClick={closeMenu} title="Volver a la portada">
        ← Portada
      </button>
    </div>
  )
}