import React from 'react';

/**
 * Datacenter Capitalinas — Logo / wordmark lockup
 * Reconstructed from the brand face (Cinzel, engraved caps) and a
 * sky-gradient portal so it scales and recolours crisply. For the
 * exact original artwork use the photographic logo asset instead.
 */
export function Logo({
  layout = 'stacked',   // 'stacked' | 'horizontal' | 'wordmark'
  size = 64,            // portal height in px
  tone = 'light',       // 'light' (on dark) | 'dark' (on light)
  portalSrc = null,     // optional photo for the aperture
  style = {},
  ...rest
}) {
  const ink = tone === 'dark' ? 'var(--ink-900)' : 'var(--white)';
  const portalW = Math.round(size * 0.5);
  const fontSize = Math.round(size * 0.3);

  const Portal = (
    <div style={{
      width: portalW, height: size, flex: 'none',
      background: portalSrc ? `center/cover url('${portalSrc}')` : 'var(--gradient-portal)',
    }} aria-hidden="true" />
  );

  const Word = (
    <div style={{
      fontFamily: 'var(--font-display)', fontWeight: 400,
      color: ink, lineHeight: 1.05, letterSpacing: 'var(--tracking-wordmark)',
      fontSize, whiteSpace: 'nowrap',
    }}>
      <div>DATACENTER</div>
      <div>CAPITALINAS</div>
    </div>
  );

  if (layout === 'wordmark') {
    return <div style={{ display: 'inline-block', ...style }} {...rest}>{Word}</div>;
  }

  return (
    <div style={{
      display: 'inline-flex',
      flexDirection: layout === 'stacked' ? 'column' : 'row',
      alignItems: 'center',
      gap: layout === 'stacked' ? 14 : 18,
      ...style,
    }} {...rest}>
      {Portal}
      {Word}
    </div>
  );
}
