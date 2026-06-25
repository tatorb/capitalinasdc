import React from 'react';

/**
 * Datacenter Capitalinas — Input
 * Dark field with a hairline border that lights sky-blue on focus.
 */
export function Input({
  label = null,
  hint = null,
  id,
  type = 'text',
  invalid = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, fontFamily: 'var(--font-sans)' }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontSize: 12, fontWeight: 400, letterSpacing: '0.06em',
          textTransform: 'uppercase', color: 'var(--text-muted)',
        }}>{label}</label>
      )}
      <input
        id={inputId}
        type={type}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%', boxSizing: 'border-box',
          background: 'var(--surface-inset)',
          color: 'var(--text-strong)',
          fontFamily: 'var(--font-sans)', fontSize: 14,
          padding: '12px 14px',
          border: `1px solid ${invalid ? 'var(--color-danger)' : focused ? 'var(--border-strong)' : 'var(--border-subtle)'}`,
          borderRadius: 'var(--radius-md)',
          outline: 'none',
          boxShadow: focused && !invalid ? 'inset 0 0 0 1px var(--border-strong)' : 'none',
          transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
          ...style,
        }}
        {...rest}
      />
      {hint && (
        <span style={{ fontSize: 12, color: invalid ? 'var(--color-danger)' : 'var(--text-faint)' }}>{hint}</span>
      )}
    </div>
  );
}
