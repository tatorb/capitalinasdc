import * as React from 'react';

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "stacked" */
  layout?: 'stacked' | 'horizontal' | 'wordmark';
  /** Portal aperture height in px. @default 64 */
  size?: number;
  /** "light" on dark grounds, "dark" on white. @default "light" */
  tone?: 'light' | 'dark';
  /** Optional photo URL for the aperture; defaults to a sky gradient. */
  portalSrc?: string;
}

/**
 * Brand lockup rebuilt from the Cinzel wordmark and a sky-gradient
 * portal. Scales and recolours cleanly. For exact original artwork,
 * use the photographic logo asset.
 */
export function Logo(props: LogoProps): JSX.Element;
