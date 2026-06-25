import React from 'react';

/**
 * Datacenter Capitalinas — Badge
 * Compact status / category marker. Mono label, wide tracking.
 */
export function Badge({
  variant = 'neutral', // 'sky' | 'neutral' | 'outline' | 'success' | 'warning' | 'danger'
  children,
  style = {},
  ...rest
}) {
  const variants = {
    sky:     { background: 'rgba(108,180,222,0.16)', color: 'var(--brand-bright)', border: '1px solid var(--border-brand)' },
    neutral: { background: 'rgba(255,255,255,0.07)', color: 'var(--text-body)', border: '1px solid var(--border-subtle)' },
    outline: { background: 'transparent', color: 'var(--text-muted)', border: '1px solid var(--border-strong)' },
    success: { background: 'rgba(46,139,107,0.16)', color: '#5FC79F', border: '1px solid rgba(46,139,107,0.5)' },
    warning: { background: 'rgba(199,151,47,0.16)', color: '#E0B458', border: '1px solid rgba(199,151,47,0.5)' },
    danger:  { background: 'rgba(194,74,72,0.16)', color: '#E08584', border: '1px solid rgba(194,74,72,0.5)' },
  };
  const v = variants[variant] || variants.neutral;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 400,
      letterSpacing: '0.08em', textTransform: 'uppercase',
      padding: '4px 10px', borderRadius: 'var(--radius-sm)',
      ...v, ...style,
    }} {...rest}>
      {children}
    </span>
  );
}
