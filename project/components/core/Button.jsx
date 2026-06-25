import React from 'react';

/**
 * Datacenter Capitalinas — Button
 * Architectural, slightly squared. Primary uses the sky-blue brand fill;
 * secondary is a sky-lit outline on the dark ground; ghost is bare.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: 13, height: 36 },
    md: { padding: '11px 22px', fontSize: 14, height: 44 },
    lg: { padding: '15px 30px', fontSize: 15, height: 54 },
  };
  const variants = {
    primary: {
      background: 'var(--brand-primary)',
      color: 'var(--on-brand)',
      border: '1px solid var(--brand-primary)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-strong)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand-bright)',
      border: '1px solid transparent',
    },
    'on-light': {
      background: 'var(--ink-900)',
      color: 'var(--white)',
      border: '1px solid var(--ink-900)',
    },
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    whiteSpace: 'nowrap',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    letterSpacing: '0.04em',
    lineHeight: 1,
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'background var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
    boxSizing: 'border-box',
    height: s.height,
    padding: s.padding,
    fontSize: s.fontSize,
    ...v,
    ...style,
  };

  const onEnter = (e) => {
    if (disabled) return;
    if (variant === 'primary') { e.currentTarget.style.background = 'var(--sky-400)'; e.currentTarget.style.boxShadow = 'var(--glow-sky-md)'; }
    else if (variant === 'secondary') { e.currentTarget.style.borderColor = 'var(--brand-bright)'; e.currentTarget.style.color = 'var(--brand-bright)'; }
    else if (variant === 'ghost') { e.currentTarget.style.background = 'rgba(108,180,222,0.12)'; }
    else { e.currentTarget.style.background = 'var(--ink-700)'; }
  };
  const onLeave = (e) => {
    Object.assign(e.currentTarget.style, { background: v.background, color: v.color, borderColor: undefined, boxShadow: 'none' });
    e.currentTarget.style.border = v.border;
  };

  return (
    <button
      type={type}
      disabled={disabled}
      style={base}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(1px)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'none'; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
