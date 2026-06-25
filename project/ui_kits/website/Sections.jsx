/* global React, Card, Badge, StatBlock */
// Datacenter Capitalinas — Services, Infrastructure, Complejo

function useLucide(dep) {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
}

function Icon({ name, size = 24, color = 'var(--text-body)' }) {
  return <i data-lucide={name} style={{ width: size, height: size, color }} />;
}

const SERVICES = [
  ['server', 'Alojamiento de servidores', 'Housing y hosting de servidores y equipos en racks AAA, con energía protegida por UPS y refrigeración continua.'],
  ['cable', 'Conectividad de fibra óptica', 'Vínculos de fibra a 1 Gbps dentro del complejo, con direccionamiento IP propio y enlaces redundantes.'],
  ['shield-check', 'Entorno controlado y seguro', 'Acceso restringido, monitoreo permanente y un ambiente físico controlado para su infraestructura crítica.'],
  ['activity', 'Alta disponibilidad', 'Operación 24/7/365 con redundancia eléctrica y de red para sostener la continuidad de su negocio.'],
];

function Services() {
  useLucide();
  return (
    <section id="servicios" style={{ background: 'var(--ink-900)', padding: 'var(--section-y) 0' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)' }}>
        <p style={eyebrow}>Servicios</p>
        <h2 style={h2}>Su infraestructura, en un entorno de calidad superior</h2>
        <p style={lead}>
          Reduzca los costos de infraestructura, gestión y mantenimiento de TI, concentrándose
          en las actividades focalizadas de su negocio medular.
        </p>
        <div style={{
          marginTop: 48,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
        }} className="feature-grid">
          {SERVICES.map(([icon, title, body], i) => (
            <div key={title} style={{
              padding: '36px 32px 40px',
              borderLeft: i === 0 ? 'none' : '1px solid var(--border-subtle)',
            }} className="feature-cell">
              <Icon name={icon} size={26} color="var(--text-strong)" />
              <h3 style={{
                fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 500,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--text-strong)', margin: '38px 0 14px',
              }}>{title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--text-muted)', margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SPECS = [
  ['Enlace', '1 Gbps fibra óptica'],
  ['Energía', 'UPS + grupo electrógeno'],
  ['Racks', 'Gabinetes AAA · 42U'],
  ['Direccionamiento', 'IP propia / BGP'],
  ['Refrigeración', 'Clima de precisión 24/7'],
  ['Acceso', 'Controlado y monitoreado'],
];

function Infrastructure() {
  useLucide();
  return (
    <section id="infra" style={{ background: 'var(--ink-900)', padding: 'var(--section-y) 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 70% at 15% 110%, rgba(255,255,255,0.04), transparent 60%)' }} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)', position: 'relative', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 64, alignItems: 'center' }} className="infra-grid">
        <div>
          <p style={eyebrow}>Infraestructura</p>
          <h2 style={h2}>Pensada para la continuidad</h2>
          <p style={lead}>
            Al estar ubicado dentro del Complejo Capitalinas, su empresa se conecta mediante
            vínculos de fibra óptica de altísima capacidad, en un ambiente de alta disponibilidad.
          </p>
          <div style={{ display: 'flex', gap: 48, marginTop: 40 }}>
            <StatBlock value="42" unit="U" label="Por rack" />
            <StatBlock value="N+1" label="Redundancia" accent={false} />
            <StatBlock value="100" unit="%" label="Monitoreo" />
          </div>
        </div>
        <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          {SPECS.map(([k, v], i) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 22px', borderBottom: i < SPECS.length - 1 ? '1px solid var(--border-subtle)' : 'none', background: i % 2 ? 'rgba(255,255,255,0.015)' : 'transparent' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{k}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--text-strong)' }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Complejo() {
  return (
    <section id="complejo" style={{ background: 'var(--ink-850)', padding: 'var(--section-y) 0' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }} className="infra-grid">
          <div style={{ display: 'flex', gap: 14 }}>
            <div style={{ flex: 1, aspectRatio: '1 / 2', backgroundImage: "url('../../assets/portal-motif.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--glow-sky-md)' }} />
            <div style={{ flex: 1, aspectRatio: '1 / 2', marginTop: 40, backgroundImage: "url('../../assets/portal-motif.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 'var(--radius-sm)', filter: 'saturate(0.8) brightness(0.85)' }} />
          </div>
          <div>
            <p style={eyebrow}>El complejo</p>
            <h2 style={h2}>Dentro de Capitalinas, La Cañada</h2>
            <p style={lead}>
              Operamos desde uno de los complejos de oficinas más grandes del interior de
              Argentina, junto a las empresas que definen la actividad tecnológica de Córdoba.
            </p>
            <div style={{ display: 'flex', gap: 28, marginTop: 32, flexWrap: 'wrap', alignItems: 'center' }}>
              {['INTEL', 'NOKIA', 'TELECOM'].map((n) => (
                <span key={n} style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 18, letterSpacing: '0.12em', color: 'var(--text-faint)' }}>{n}</span>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)', marginTop: 14 }}>Empresas con presencia en el complejo</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// shared text styles
const eyebrow = { fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: 0 };
const h2 = { fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1.12, letterSpacing: '0', color: 'var(--text-strong)', margin: '16px 0 0' };
const lead = { fontSize: 16.5, lineHeight: 1.6, color: 'var(--text-body)', maxWidth: 560, margin: '18px 0 0' };
const cardTitle = { fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 19, letterSpacing: '0', color: 'var(--text-strong)', margin: '0 0 8px' };
const cardBody = { fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 };

Object.assign(window, { Services, Infrastructure, Complejo });
