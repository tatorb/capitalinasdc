import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  invalid?: boolean;
}

/**
 * Text field on the dark ground. Hairline border lights sky-blue with a
 * soft glow on focus. Optional uppercase label and hint/error line.
 */
export function Input(props: InputProps): JSX.Element;
