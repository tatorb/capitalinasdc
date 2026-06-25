import * as React from 'react';

/**
 * Props for the brand button.
 * @startingPoint section="Core" subtitle="Brand buttons — primary, secondary, ghost" viewport="700x180"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'on-light';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Primary action control. Sky-blue fill for primary actions; sky-lit
 * outline (secondary) and bare ghost for lower emphasis. Sits on the
 * dark brand ground; use variant="on-light" on white surfaces.
 */
export function Button(props: ButtonProps): JSX.Element;
