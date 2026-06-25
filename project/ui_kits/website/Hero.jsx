/* global React, Button, Badge, StatBlock */
// Datacenter Capitalinas — hero with the sky-portal aperture
function Hero({ onNav }) {
  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden', background: 'var(--ink-900)' }}>
      {/* faint sky wash behind the content */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(120% 90% at 80% -10%, rgba(255,255,255,0.06), transparent 55%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto',
        padding: '120px var(--container-pad) 96px',
        display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: 56, alignItems: 'center',
        position: 'relative',
      }} className="hero-grid">
        <div>
          <Badge variant="neutral">Córdoba · Argentina</Badge>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 400,
            fontSize: 'clamp(40px, 6vw, 76px)', lineHeight: 1.04,
            letterSpacing: '0.02em', color: 'var(--text-strong)',
            margin: '22px 0 0',
          }}>
            Innovando en<br />tecnología
          </h1>
          <p style={{
            fontSize: 'clamp(16px, 1.4vw, 19px)', lineHeight: 1.6,
            color: 'var(--text-body)', maxWidth: 540, margin: '24px 0 0',
          }}>
            Servicios de conectividad en los complejos de oficinas más grandes
            del interior del país. El proveedor número uno en tecnología
            empresarial.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => onNav && onNav('servicios')}>Conocer servicios</Button>
            <Button variant="secondary" size="lg" onClick={() => onNav && onNav('contacto')}>Hablar con ventas</Button>
          </div>
          <div style={{ display: 'flex', gap: 52, marginTop: 56, flexWrap: 'wrap' }}>
            <StatBlock value="1" unit="Gbps" label="Fibra óptica" />
            <StatBlock value="99.98" unit="%" label="Uptime SLA" />
            <StatBlock value="24/7" label="Soporte" accent={false} />
          </div>
        </div>
        {/* the portal */}
        <div style={{ display: 'flex', justifyContent: 'center' }} className="hero-portal">
          <div style={{
            width: 'min(300px, 70%)', aspectRatio: '1 / 2',
            backgroundImage: "url('../../assets/portal-motif.jpg')",
            backgroundSize: 'cover', backgroundPosition: 'center',
            boxShadow: 'var(--glow-sky-lg)',
          }} />
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
