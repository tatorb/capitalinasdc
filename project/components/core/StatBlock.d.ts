import * as React from 'react';

export interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The figure, e.g. "99.98%" or "1" */
  value: React.ReactNode;
  /** Trailing unit, e.g. "Gbps" */
  unit?: string;
  /** Caps label under the figure */
  label: string;
  /** @default "left" */
  align?: 'left' | 'center';
  /** Colour the figure sky-blue. @default true */
  accent?: boolean;
}

/**
 * Large mono figure over a caps label — uptime, bandwidth, capacity.
 * The brand's signature data unit.
 */
export function StatBlock(props: StatBlockProps): JSX.Element;
