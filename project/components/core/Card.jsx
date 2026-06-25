import React from 'react';

/**
 * Datacenter Capitalinas — Card
 * Squared, dark surface with a hairline border. `glow` lifts it with the
 * brand's sky lighting; `portal` renders the sky-aperture image as a tall
 * left rail (the signature device).
 */
export function Card({
  variant = 'default', // 'default' | 'glow' | 'light'
  portal = false,
  portalSrc = null,
  interactive = false,
  children,
  style = {},
  ...rest
}) {
  const variants = {
    default: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-body)', boxShadow: 'none' },
    glow:    { background: 'var(--surface-card)', border: '1px solid var(--border-strong)', color: 'var(--text-body)', boxShadow: 'none' },
    light:   { background: 'var(--surface-light)', border: '1px solid var(--border-on-light)', color: 'var(--text-on-light)', boxShadow: 'none' },
  };
  const v = variants[variant] || variants.default;

  const base = {
    position: 'relative',
    borderRadius: 'var(--radius-md)',
    padding: portal ? '0' : 'var(--space-6)',
    overflow: 'hidden',
    display: portal ? 'flex' : 'block',
    transition: 'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
    fontFamily: 'var(--font-sans)',
    ...v,
    ...style,
  };

  const handlers = interactive ? {
    onMouseEnter: (e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; },
    onMouseLeave: (e) => { e.currentTarget.style.borderColor = (v.border.split(' ').pop()); },
  } : {};

  return (
    <div style={base} {...handlers} {...rest}>
      {portal && (
        <div style={{
          width: 96, flex: 'none', alignSelf: 'stretch',
          background: portalSrc ? `center/cover url('${portalSrc}')` : 'var(--gradient-portal)',
        }} />
      )}
      <div style={{ padding: portal ? 'var(--space-6)' : 0, flex: 1 }}>{children}</div>
    </div>
  );
}
