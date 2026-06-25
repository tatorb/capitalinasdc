/* global React, Logo, Button */
// Datacenter Capitalinas — site navigation (sticky, frosted on scroll)
function Nav({ onNav }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.__siteScroll ? window.__siteScroll() > 24 : false);
    const el = document.getElementById('site');
    if (el) { el.addEventListener('scroll', onScroll); return () => el.removeEventListener('scroll', onScroll); }
  }, []);
  const links = [
    ['Servicios', 'servicios'],
    ['Infraestructura', 'infra'],
    ['Complejo', 'complejo'],
    ['Contacto', 'contacto'],
  ];
  const go = (id) => { setOpen(false); onNav && onNav(id); };
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(6,9,15,0.82)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(140%) blur(12px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--border-subtle)' : 'transparent'}`,
      transition: 'background var(--duration-base) var(--ease-standard), border-color var(--duration-base)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto',
        padding: '16px var(--container-pad)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ cursor: 'pointer' }} onClick={() => go('top')}>
          <Logo layout="horizontal" size={34} />
        </div>
        <nav style={{ display: 'flex', gap: 6, alignItems: 'center' }} className="site-desktop-nav">
          {links.map(([label, id]) => (
            <button key={id} onClick={() => go(id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-sans)', fontSize: 13.5, fontWeight: 400,
              letterSpacing: '0.04em', color: 'var(--text-body)',
              padding: '8px 14px', borderRadius: 'var(--radius-sm)',
            }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-strong)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-body)'}
            >{label}</button>
          ))}
          <div style={{ marginLeft: 10 }}>
            <Button variant="secondary" size="sm" onClick={() => go('contacto')}>Solicitar acceso</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
window.Nav = Nav;
