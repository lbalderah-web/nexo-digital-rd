import { bonaplusPreview } from "./bonaplus-preview";

const whatsapp =
  "https://wa.me/18295795830?text=Hola%2C%20vi%20la%20p%C3%A1gina%20de%20Nexo%20Digital%20RD%20y%20me%20gustar%C3%ADa%20recibir%20una%20propuesta.";

const whatsappFor = (plan: string) =>
  `https://wa.me/18295795830?text=${encodeURIComponent(`Hola, vi la página de Nexo Digital RD y me interesa conocer más sobre el paquete ${plan}.`)}`;

const services = [
  ["01", "Páginas que venden", "Diseñamos sitios claros, rápidos y pensados para convertir visitas en conversaciones reales."],
  ["02", "Tu negocio en orden", "Organizamos tus servicios, productos e información para que el cliente entienda todo sin preguntar de más."],
  ["03", "Contacto sin vueltas", "Conectamos tu página con WhatsApp, formularios, ubicación y redes sociales."],
];

const packages = [
  {
    name: "Esencial",
    price: "RD$25,000",
    description: "Para profesionales y negocios pequeños que necesitan una presencia seria.",
    features: ["Página de una sección", "Diseño móvil", "WhatsApp y contacto", "Una ronda de cambios"],
  },
  {
    name: "Negocio",
    price: "RD$45,000",
    description: "Nuestra opción principal para empresas que quieren crecer.",
    features: ["Hasta cinco secciones", "Catálogo de productos o servicios", "Textos básicos incluidos", "Dos rondas de cambios", "30 días de soporte"],
    featured: true,
  },
  {
    name: "A medida",
    price: "Desde RD$75,000",
    description: "Para proyectos que necesitan funciones y procesos especiales.",
    features: ["Reservas o cotizaciones", "Pagos o automatizaciones", "Diseño personalizado", "Alcance definido contigo"],
  },
];

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <div className={`wordmark ${light ? "wordmark-light" : ""}`} aria-label="Nexo Digital RD">
      <span>Nexo</span>
      <i />
      <small>Digital RD</small>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a href="#inicio" className="brand-link"><Wordmark /></a>
        <nav aria-label="Navegación principal">
          <a href="#trabajo">Trabajo</a>
          <a href="#servicios">Servicios</a>
          <a href="#precios">Precios</a>
        </nav>
        <a className="button button-small" href={whatsapp} target="_blank" rel="noreferrer">Hablemos</a>
      </header>

      <section className="hero shell" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">ESTUDIO DIGITAL · REPÚBLICA DOMINICANA</p>
          <h1>Tu negocio merece verse tan bien como trabaja.</h1>
          <p className="hero-lead">Creamos páginas web con personalidad, fáciles de usar y listas para convertir visitantes en clientes.</p>
          <div className="hero-actions">
            <a className="button" href={whatsapp} target="_blank" rel="noreferrer">Solicita una propuesta <span>↗</span></a>
            <a className="text-link" href="#trabajo">Mira nuestro trabajo ↓</a>
          </div>
        </div>
        <div className="hero-stamp" aria-hidden="true">
          <span>Hecho aquí</span>
          <strong>RD</strong>
          <em>con intención</em>
        </div>
      </section>

      <section className="statement">
        <div className="shell statement-inner">
          <p>No hacemos páginas para llenar espacio.</p>
          <h2>Construimos una presencia digital que se siente tuya.</h2>
        </div>
      </section>

      <section className="section shell" id="servicios">
        <div className="section-heading">
          <p className="eyebrow">LO QUE HACEMOS</p>
          <h2>Menos complicación.<br />Más negocio.</h2>
        </div>
        <div className="services-grid">
          {services.map(([number, title, text]) => (
            <article className="service" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section" id="trabajo">
        <div className="shell case-grid">
          <div className="case-copy">
            <p className="eyebrow coral">TRABAJO RECIENTE</p>
            <h2>BonaPlus</h2>
            <p className="case-intro">Una empresa dominicana con más de 20 años merecía una presencia digital a su altura.</p>
            <p>Organizamos su catálogo, modernizamos la experiencia y conectamos la página directamente con WhatsApp para facilitar nuevos pedidos y conversaciones con distribuidores.</p>
            <div className="case-meta">
              <span>Diseño web</span><span>Catálogo</span><span>WhatsApp</span><span>Diseño móvil</span>
            </div>
            <a className="light-link" href="https://bonaplus.com.do" target="_blank" rel="noreferrer">Visitar BonaPlus ↗</a>
          </div>
          <a className="case-art" href="https://bonaplus.com.do" target="_blank" rel="noreferrer" aria-label="Ver la página actual de BonaPlus">
            <div className="browser-bar"><i/><i/><i/></div>
            <img className="case-screenshot" src={bonaplusPreview} alt="Captura de la página principal actual de BonaPlus" />
            <span className="case-open">Abrir proyecto ↗</span>
          </a>
        </div>
      </section>

      <section className="section shell" id="precios">
        <div className="section-heading pricing-heading">
          <div>
            <p className="eyebrow">PAQUETES CLAROS</p>
            <h2>Empieza donde estás.</h2>
          </div>
          <p>Sin precios escondidos ni sorpresas. Te explicamos qué incluye cada opción antes de comenzar.</p>
        </div>
        <div className="pricing-grid">
          {packages.map((plan) => (
            <article className={`price-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
              {plan.featured && <span className="popular">MÁS ELEGIDO</span>}
              <h3>{plan.name}</h3>
              <strong>{plan.price}</strong>
              <p>{plan.description}</p>
              <ul>{plan.features.map((feature) => <li key={feature}>— {feature}</li>)}</ul>
              <a href={whatsappFor(plan.name)} target="_blank" rel="noreferrer">Preguntar por este paquete ↗</a>
            </article>
          ))}
        </div>
        <p className="pricing-note">50% para comenzar · 50% antes de publicar · Servicios externos se cotizan aparte</p>
      </section>

      <section className="process">
        <div className="shell">
          <p className="eyebrow coral">ASÍ TRABAJAMOS</p>
          <div className="process-grid">
            <h2>Simple desde el primer mensaje.</h2>
            <ol>
              <li><span>01</span><div><strong>Nos cuentas</strong><p>Conocemos tu negocio, tus clientes y lo que quieres lograr.</p></div></li>
              <li><span>02</span><div><strong>Lo construimos</strong><p>Diseñamos, escribimos y organizamos cada parte de tu página.</p></div></li>
              <li><span>03</span><div><strong>Sales al mundo</strong><p>Publicamos, verificamos y te acompañamos durante los primeros 30 días.</p></div></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="cta shell" id="contacto">
        <p className="eyebrow">¿TIENES UN NEGOCIO EN MENTE?</p>
        <h2>Vamos a darle una presencia que se note.</h2>
        <a className="button" href={whatsapp} target="_blank" rel="noreferrer">Cuéntanos tu idea <span>↗</span></a>
      </section>

      <footer>
        <div className="shell footer-inner">
          <Wordmark light />
          <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp · (829) 579-5830</a>
          <p>© 2026 Nexo Digital RD</p>
        </div>
      </footer>
    </main>
  );
}
