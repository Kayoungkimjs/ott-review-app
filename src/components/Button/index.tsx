import { ReactNode } from 'react'
import { StyledButton } from './styles'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
  children?: ReactNode
  onClick?: () => void
}

export const Button = ({
  type,
  children,
  className,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}
