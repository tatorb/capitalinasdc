import React from 'react';

/**
 * Datacenter Capitalinas — StatBlock
 * Large mono figure over a caps label — for uptime, bandwidth, capacity.
 * The brand speaks in precise numbers; this is its signature data unit.
 */
export function StatBlock({
  value,
  unit = null,
  label,
  align = 'left', // 'left' | 'center'
  accent = true,
  style = {},
  ...rest
}) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 6,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      fontFamily: 'var(--font-sans)', ...style,
    }} {...rest}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontWeight: 500,
        fontSize: 'clamp(34px, 5vw, 52px)', lineHeight: 1,
        letterSpacing: '-0.02em',
        color: accent ? 'var(--text-strong)' : 'var(--text-body)',
        display: 'flex', alignItems: 'baseline', gap: 6,
      }}>
        {value}
        {unit && <span style={{ fontSize: '0.42em', fontWeight: 500, color: 'var(--text-muted)' }}>{unit}</span>}
      </div>
      <div style={{
        fontSize: 12, fontWeight: 400, letterSpacing: '0.16em',
        textTransform: 'uppercase', color: 'var(--text-muted)',
      }}>{label}</div>
    </div>
  );
}
