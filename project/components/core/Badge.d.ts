import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "neutral" */
  variant?: 'sky' | 'neutral' | 'outline' | 'success' | 'warning' | 'danger';
  children?: React.ReactNode;
}

/**
 * Compact mono-label marker for status, category or spec tags.
 * Uppercase IBM Plex Mono with wide tracking.
 */
export function Badge(props: BadgeProps): JSX.Element;
