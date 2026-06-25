/* global React, Button, Input, Logo */
// Datacenter Capitalinas — contact section + footer

function Contact() {
  const [sent, setSent] = React.useState(false);
  return (
    <section id="contacto" style={{ background: 'var(--ink-900)', padding: 'var(--section-y) 0' }}>
      <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 var(--container-pad)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }} className="infra-grid">
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: 0 }}>Contacto</p>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1.12, letterSpacing: '0', color: 'var(--text-strong)', margin: '16px 0 0' }}>Solicite acceso al datacenter</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--text-body)', margin: '18px 0 0' }}>
              Cuéntenos sobre su empresa y un asesor lo contactará para coordinar una visita al complejo.
            </p>
            <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 14, fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-muted)' }}>
              <span>Complejo Capitalinas, La Cañada</span>
              <span>Córdoba, Argentina</span>
              <span style={{ color: 'var(--text-strong)' }}>+54 351 554 4150</span>
              <span>contacto@capitalinasdc.com</span>
            </div>
          </div>
          <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: 28 }}>
            {sent ? (
              <div style={{ minHeight: 300, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: 14 }}>
                <div style={{ width: 56, height: 56, borderRadius: 0, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-strong)', display: 'grid', placeItems: 'center' }}>
                  <i data-lucide="check" style={{ color: 'var(--text-strong)', width: 26, height: 26 }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, color: 'var(--text-strong)', margin: 0, letterSpacing: '0' }}>Solicitud recibida</h3>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', margin: 0 }}>Gracias. Un asesor se comunicará a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => window.lucide && window.lucide.createIcons(), 30); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <Input label="Empresa" placeholder="Razón social" required />
                <Input label="Nombre y apellido" placeholder="¿Con quién hablamos?" required />
                <Input label="Correo corporativo" type="email" placeholder="nombre@empresa.com" required />
                <Input label="Teléfono" placeholder="+54 351 …" />
                <div style={{ marginTop: 6 }}>
                  <Button variant="primary" size="lg" type="submit" fullWidth>Enviar solicitud</Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ onNav }) {
  return (
    <footer style={{ background: 'var(--ink-850)', borderTop: '1px solid var(--border-subtle)', padding: '48px 0 36px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 32, flexWrap: 'wrap' }}>
        <div>
          <Logo layout="horizontal" size={32} />
          <p style={{ fontSize: 12.5, color: 'var(--text-faint)', margin: '18px 0 0', maxWidth: 280, lineHeight: 1.6 }}>
            Desde Córdoba, Argentina — proveedor de conectividad y alojamiento empresarial.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          {['facebook', 'twitter', 'map-pin'].map((n) => (
            <a key={n} href="#" onClick={(e) => e.preventDefault()} style={{ width: 38, height: 38, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', display: 'grid', placeItems: 'center', color: 'var(--text-muted)' }}>
              <i data-lucide={n} style={{ width: 17, height: 17 }} />
            </a>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 'var(--container-max)', margin: '32px auto 0', padding: '20px var(--container-pad) 0', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)' }}>© Datacenter Capitalinas · @CapitalinasDC</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)' }}>capitalinasdc.com</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Contact, Footer });
