import type { ButtonHTMLAttributes, ReactNode } from 'react'
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode; fullWidth?: boolean }
export function Button({ children, fullWidth = false, className = '', ...props }: Props) { return <button className={`button ${fullWidth ? 'button--full' : ''} ${className}`} {...props}>{children}</button> }
