/* @ds-bundle: {"format":3,"namespace":"DatacenterCapitalinasDesignSystem_239a4b","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"fe4c37dedaa8","components/core/Button.jsx":"978203a68703","components/core/Card.jsx":"9829a2570819","components/core/Input.jsx":"a78194a9ebef","components/core/Logo.jsx":"06d451acbaa3","components/core/StatBlock.jsx":"e1748a944863","ui_kits/website/Contact.jsx":"8adf31f063a8","ui_kits/website/Hero.jsx":"08601558f869","ui_kits/website/Nav.jsx":"659479ea5e67","ui_kits/website/Sections.jsx":"0ceb6f3e0e51"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DatacenterCapitalinasDesignSystem_239a4b = window.DatacenterCapitalinasDesignSystem_239a4b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Datacenter Capitalinas — Badge
 * Compact status / category marker. Mono label, wide tracking.
 */
function Badge({
  variant = 'neutral',
  // 'sky' | 'neutral' | 'outline' | 'success' | 'warning' | 'danger'
  children,
  style = {},
  ...rest
}) {
  const variants = {
    sky: {
      background: 'rgba(108,180,222,0.16)',
      color: 'var(--brand-bright)',
      border: '1px solid var(--border-brand)'
    },
    neutral: {
      background: 'rgba(255,255,255,0.07)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-subtle)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid var(--border-strong)'
    },
    success: {
      background: 'rgba(46,139,107,0.16)',
      color: '#5FC79F',
      border: '1px solid rgba(46,139,107,0.5)'
    },
    warning: {
      background: 'rgba(199,151,47,0.16)',
      color: '#E0B458',
      border: '1px solid rgba(199,151,47,0.5)'
    },
    danger: {
      background: 'rgba(194,74,72,0.16)',
      color: '#E08584',
      border: '1px solid rgba(194,74,72,0.5)'
    }
  };
  const v = variants[variant] || variants.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 400,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm)',
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Datacenter Capitalinas — Button
 * Architectural, slightly squared. Primary uses the sky-blue brand fill;
 * secondary is a sky-lit outline on the dark ground; ghost is bare.
 */
function Button({
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
    sm: {
      padding: '8px 16px',
      fontSize: 13,
      height: 36
    },
    md: {
      padding: '11px 22px',
      fontSize: 14,
      height: 44
    },
    lg: {
      padding: '15px 30px',
      fontSize: 15,
      height: 54
    }
  };
  const variants = {
    primary: {
      background: 'var(--brand-primary)',
      color: 'var(--on-brand)',
      border: '1px solid var(--brand-primary)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand-bright)',
      border: '1px solid transparent'
    },
    'on-light': {
      background: 'var(--ink-900)',
      color: 'var(--white)',
      border: '1px solid var(--ink-900)'
    }
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
    ...style
  };
  const onEnter = e => {
    if (disabled) return;
    if (variant === 'primary') {
      e.currentTarget.style.background = 'var(--sky-400)';
      e.currentTarget.style.boxShadow = 'var(--glow-sky-md)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.borderColor = 'var(--brand-bright)';
      e.currentTarget.style.color = 'var(--brand-bright)';
    } else if (variant === 'ghost') {
      e.currentTarget.style.background = 'rgba(108,180,222,0.12)';
    } else {
      e.currentTarget.style.background = 'var(--ink-700)';
    }
  };
  const onLeave = e => {
    Object.assign(e.currentTarget.style, {
      background: v.background,
      color: v.color,
      borderColor: undefined,
      boxShadow: 'none'
    });
    e.currentTarget.style.border = v.border;
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Datacenter Capitalinas — Card
 * Squared, dark surface with a hairline border. `glow` lifts it with the
 * brand's sky lighting; `portal` renders the sky-aperture image as a tall
 * left rail (the signature device).
 */
function Card({
  variant = 'default',
  // 'default' | 'glow' | 'light'
  portal = false,
  portalSrc = null,
  interactive = false,
  children,
  style = {},
  ...rest
}) {
  const variants = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-body)',
      boxShadow: 'none'
    },
    glow: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-strong)',
      color: 'var(--text-body)',
      boxShadow: 'none'
    },
    light: {
      background: 'var(--surface-light)',
      border: '1px solid var(--border-on-light)',
      color: 'var(--text-on-light)',
      boxShadow: 'none'
    }
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
    ...style
  };
  const handlers = interactive ? {
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'var(--border-strong)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = v.border.split(' ').pop();
    }
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base
  }, handlers, rest), portal && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      flex: 'none',
      alignSelf: 'stretch',
      background: portalSrc ? `center/cover url('${portalSrc}')` : 'var(--gradient-portal)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: portal ? 'var(--space-6)' : 0,
      flex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Datacenter Capitalinas — Input
 * Dark field with a hairline border that lights sky-blue on focus.
 */
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      background: 'var(--surface-inset)',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      padding: '12px 14px',
      border: `1px solid ${invalid ? 'var(--color-danger)' : focused ? 'var(--border-strong)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focused && !invalid ? 'inset 0 0 0 1px var(--border-strong)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: invalid ? 'var(--color-danger)' : 'var(--text-faint)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Datacenter Capitalinas — Logo / wordmark lockup
 * Reconstructed from the brand face (Cinzel, engraved caps) and a
 * sky-gradient portal so it scales and recolours crisply. For the
 * exact original artwork use the photographic logo asset instead.
 */
function Logo({
  layout = 'stacked',
  // 'stacked' | 'horizontal' | 'wordmark'
  size = 64,
  // portal height in px
  tone = 'light',
  // 'light' (on dark) | 'dark' (on light)
  portalSrc = null,
  // optional photo for the aperture
  style = {},
  ...rest
}) {
  const ink = tone === 'dark' ? 'var(--ink-900)' : 'var(--white)';
  const portalW = Math.round(size * 0.5);
  const fontSize = Math.round(size * 0.3);
  const Portal = /*#__PURE__*/React.createElement("div", {
    style: {
      width: portalW,
      height: size,
      flex: 'none',
      background: portalSrc ? `center/cover url('${portalSrc}')` : 'var(--gradient-portal)'
    },
    "aria-hidden": "true"
  });
  const Word = /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      color: ink,
      lineHeight: 1.05,
      letterSpacing: 'var(--tracking-wordmark)',
      fontSize,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, "DATACENTER"), /*#__PURE__*/React.createElement("div", null, "CAPITALINAS"));
  if (layout === 'wordmark') {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'inline-block',
        ...style
      }
    }, rest), Word);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: layout === 'stacked' ? 'column' : 'row',
      alignItems: 'center',
      gap: layout === 'stacked' ? 14 : 18,
      ...style
    }
  }, rest), Portal, Word);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Datacenter Capitalinas — StatBlock
 * Large mono figure over a caps label — for uptime, bandwidth, capacity.
 * The brand speaks in precise numbers; this is its signature data unit.
 */
function StatBlock({
  value,
  unit = null,
  label,
  align = 'left',
  // 'left' | 'center'
  accent = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 'clamp(34px, 5vw, 52px)',
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: accent ? 'var(--text-strong)' : 'var(--text-body)',
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.42em',
      fontWeight: 500,
      color: 'var(--text-muted)'
    }
  }, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
/* global React, Button, Input, Logo */
// Datacenter Capitalinas — contact section + footer

function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contacto",
    style: {
      background: 'var(--ink-900)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 920,
      margin: '0 auto',
      padding: '0 var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56
    },
    className: "infra-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Contacto"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      fontSize: 'clamp(28px, 3.4vw, 44px)',
      lineHeight: 1.12,
      letterSpacing: '0',
      color: 'var(--text-strong)',
      margin: '16px 0 0'
    }
  }, "Solicite acceso al datacenter"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: '18px 0 0'
    }
  }, "Cu\xE9ntenos sobre su empresa y un asesor lo contactar\xE1 para coordinar una visita al complejo."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Complejo Capitalinas, La Ca\xF1ada"), /*#__PURE__*/React.createElement("span", null, "C\xF3rdoba, Argentina"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-strong)'
    }
  }, "+54 351 554 4150"), /*#__PURE__*/React.createElement("span", null, "contacto@capitalinasdc.com"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 28
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 300,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 0,
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid var(--border-strong)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      color: 'var(--text-strong)',
      width: 26,
      height: 26
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      color: 'var(--text-strong)',
      margin: 0,
      letterSpacing: '0'
    }
  }, "Solicitud recibida"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Gracias. Un asesor se comunicar\xE1 a la brevedad.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
      setTimeout(() => window.lucide && window.lucide.createIcons(), 30);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Empresa",
    placeholder: "Raz\xF3n social",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Nombre y apellido",
    placeholder: "\xBFCon qui\xE9n hablamos?",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Correo corporativo",
    type: "email",
    placeholder: "nombre@empresa.com",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tel\xE9fono",
    placeholder: "+54 351 \u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    fullWidth: true
  }, "Enviar solicitud")))))));
}
function Footer({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-850)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '48px 0 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    layout: "horizontal",
    size: 32
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-faint)',
      margin: '18px 0 0',
      maxWidth: 280,
      lineHeight: 1.6
    }
  }, "Desde C\xF3rdoba, Argentina \u2014 proveedor de conectividad y alojamiento empresarial.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, ['facebook', 'twitter', 'map-pin'].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": n,
    style: {
      width: 17,
      height: 17
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '32px auto 0',
      padding: '20px var(--container-pad) 0',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-faint)'
    }
  }, "\xA9 Datacenter Capitalinas \xB7 @CapitalinasDC"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-faint)'
    }
  }, "capitalinasdc.com")));
}
Object.assign(window, {
  Contact,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* global React, Button, Badge, StatBlock */
// Datacenter Capitalinas — hero with the sky-portal aperture
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 90% at 80% -10%, rgba(255,255,255,0.06), transparent 55%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '120px var(--container-pad) 96px',
      display: 'grid',
      gridTemplateColumns: '1.25fr 0.75fr',
      gap: 56,
      alignItems: 'center',
      position: 'relative'
    },
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral"
  }, "C\xF3rdoba \xB7 Argentina"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(40px, 6vw, 76px)',
      lineHeight: 1.04,
      letterSpacing: '0.02em',
      color: 'var(--text-strong)',
      margin: '22px 0 0'
    }
  }, "Innovando en", /*#__PURE__*/React.createElement("br", null), "tecnolog\xEDa"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(16px, 1.4vw, 19px)',
      lineHeight: 1.6,
      color: 'var(--text-body)',
      maxWidth: 540,
      margin: '24px 0 0'
    }
  }, "Servicios de conectividad en los complejos de oficinas m\xE1s grandes del interior del pa\xEDs. El proveedor n\xFAmero uno en tecnolog\xEDa empresarial."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 36,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav && onNav('servicios')
  }, "Conocer servicios"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav && onNav('contacto')
  }, "Hablar con ventas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 52,
      marginTop: 56,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "1",
    unit: "Gbps",
    label: "Fibra \xF3ptica"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "99.98",
    unit: "%",
    label: "Uptime SLA"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "24/7",
    label: "Soporte",
    accent: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    },
    className: "hero-portal"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(300px, 70%)',
      aspectRatio: '1 / 2',
      backgroundImage: "url('../../assets/portal-motif.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxShadow: 'var(--glow-sky-lg)'
    }
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* global React, Logo, Button */
// Datacenter Capitalinas — site navigation (sticky, frosted on scroll)
function Nav({
  onNav
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.__siteScroll ? window.__siteScroll() > 24 : false);
    const el = document.getElementById('site');
    if (el) {
      el.addEventListener('scroll', onScroll);
      return () => el.removeEventListener('scroll', onScroll);
    }
  }, []);
  const links = [['Servicios', 'servicios'], ['Infraestructura', 'infra'], ['Complejo', 'complejo'], ['Contacto', 'contacto']];
  const go = id => {
    setOpen(false);
    onNav && onNav(id);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(6,9,15,0.82)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(140%) blur(12px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--border-subtle)' : 'transparent'}`,
      transition: 'background var(--duration-base) var(--ease-standard), border-color var(--duration-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '16px var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      cursor: 'pointer'
    },
    onClick: () => go('top')
  }, /*#__PURE__*/React.createElement(Logo, {
    layout: "horizontal",
    size: 34
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    },
    className: "site-desktop-nav"
  }, links.map(([label, id]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => go(id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      fontWeight: 400,
      letterSpacing: '0.04em',
      color: 'var(--text-body)',
      padding: '8px 14px',
      borderRadius: 'var(--radius-sm)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--text-strong)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-body)'
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => go('contacto')
  }, "Solicitar acceso")))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
/* global React, Card, Badge, StatBlock */
// Datacenter Capitalinas — Services, Infrastructure, Complejo

function useLucide(dep) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}
function Icon({
  name,
  size = 24,
  color = 'var(--text-body)'
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      color
    }
  });
}
const SERVICES = [['server', 'Alojamiento de servidores', 'Housing y hosting de servidores y equipos en racks AAA, con energía protegida por UPS y refrigeración continua.'], ['cable', 'Conectividad de fibra óptica', 'Vínculos de fibra a 1 Gbps dentro del complejo, con direccionamiento IP propio y enlaces redundantes.'], ['shield-check', 'Entorno controlado y seguro', 'Acceso restringido, monitoreo permanente y un ambiente físico controlado para su infraestructura crítica.'], ['activity', 'Alta disponibilidad', 'Operación 24/7/365 con redundancia eléctrica y de red para sostener la continuidad de su negocio.']];
function Services() {
  useLucide();
  return /*#__PURE__*/React.createElement("section", {
    id: "servicios",
    style: {
      background: 'var(--ink-900)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: eyebrow
  }, "Servicios"), /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "Su infraestructura, en un entorno de calidad superior"), /*#__PURE__*/React.createElement("p", {
    style: lead
  }, "Reduzca los costos de infraestructura, gesti\xF3n y mantenimiento de TI, concentr\xE1ndose en las actividades focalizadas de su negocio medular."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    },
    className: "feature-grid"
  }, SERVICES.map(([icon, title, body], i) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      padding: '36px 32px 40px',
      borderLeft: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    },
    className: "feature-cell"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 26,
    color: "var(--text-strong)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-strong)',
      margin: '38px 0 14px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, body))))));
}
const SPECS = [['Enlace', '1 Gbps fibra óptica'], ['Energía', 'UPS + grupo electrógeno'], ['Racks', 'Gabinetes AAA · 42U'], ['Direccionamiento', 'IP propia / BGP'], ['Refrigeración', 'Clima de precisión 24/7'], ['Acceso', 'Controlado y monitoreado']];
function Infrastructure() {
  useLucide();
  return /*#__PURE__*/React.createElement("section", {
    id: "infra",
    style: {
      background: 'var(--ink-900)',
      padding: 'var(--section-y) 0',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(90% 70% at 15% 110%, rgba(255,255,255,0.04), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)',
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 64,
      alignItems: 'center'
    },
    className: "infra-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: eyebrow
  }, "Infraestructura"), /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "Pensada para la continuidad"), /*#__PURE__*/React.createElement("p", {
    style: lead
  }, "Al estar ubicado dentro del Complejo Capitalinas, su empresa se conecta mediante v\xEDnculos de fibra \xF3ptica de alt\xEDsima capacidad, en un ambiente de alta disponibilidad."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "42",
    unit: "U",
    label: "Por rack"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "N+1",
    label: "Redundancia",
    accent: false
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "100",
    unit: "%",
    label: "Monitoreo"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, SPECS.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '18px 22px',
      borderBottom: i < SPECS.length - 1 ? '1px solid var(--border-subtle)' : 'none',
      background: i % 2 ? 'rgba(255,255,255,0.015)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, v))))));
}
function Complejo() {
  return /*#__PURE__*/React.createElement("section", {
    id: "complejo",
    style: {
      background: 'var(--ink-850)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    },
    className: "infra-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      aspectRatio: '1 / 2',
      backgroundImage: "url('../../assets/portal-motif.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--glow-sky-md)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      aspectRatio: '1 / 2',
      marginTop: 40,
      backgroundImage: "url('../../assets/portal-motif.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 'var(--radius-sm)',
      filter: 'saturate(0.8) brightness(0.85)'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: eyebrow
  }, "El complejo"), /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "Dentro de Capitalinas, La Ca\xF1ada"), /*#__PURE__*/React.createElement("p", {
    style: lead
  }, "Operamos desde uno de los complejos de oficinas m\xE1s grandes del interior de Argentina, junto a las empresas que definen la actividad tecnol\xF3gica de C\xF3rdoba."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 32,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, ['INTEL', 'NOKIA', 'TELECOM'].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 18,
      letterSpacing: '0.12em',
      color: 'var(--text-faint)'
    }
  }, n))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-faint)',
      marginTop: 14
    }
  }, "Empresas con presencia en el complejo")))));
}

// shared text styles
const eyebrow = {
  fontFamily: 'var(--font-sans)',
  fontSize: 12,
  fontWeight: 400,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  margin: 0
};
const h2 = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 400,
  fontSize: 'clamp(28px, 3.4vw, 44px)',
  lineHeight: 1.12,
  letterSpacing: '0',
  color: 'var(--text-strong)',
  margin: '16px 0 0'
};
const lead = {
  fontSize: 16.5,
  lineHeight: 1.6,
  color: 'var(--text-body)',
  maxWidth: 560,
  margin: '18px 0 0'
};
const cardTitle = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 500,
  fontSize: 19,
  letterSpacing: '0',
  color: 'var(--text-strong)',
  margin: '0 0 8px'
};
const cardBody = {
  fontSize: 13.5,
  lineHeight: 1.6,
  color: 'var(--text-muted)',
  margin: 0
};
Object.assign(window, {
  Services,
  Infrastructure,
  Complejo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.StatBlock = __ds_scope.StatBlock;

})();
