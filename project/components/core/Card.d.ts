import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "default" */
  variant?: 'default' | 'glow' | 'light';
  /** Render the sky-portal as a tall left rail. @default false */
  portal?: boolean;
  /** Optional photo URL for the portal rail; defaults to a sky gradient. */
  portalSrc?: string;
  /** Lift with sky glow on hover. @default false */
  interactive?: boolean;
  children?: React.ReactNode;
}

/**
 * Squared content surface on the dark ground with a hairline border.
 * `glow` swaps the border for the brand sky glow; `portal` adds the
 * signature sky-aperture rail; `light` is the white-surface variant.
 */
export function Card(props: CardProps): JSX.Element;
