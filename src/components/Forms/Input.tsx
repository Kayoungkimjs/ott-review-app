import { ChangeEvent, ReactNode } from 'react'
import { StyledInput } from './styles'

interface InputProps {
  type?: string
  id?: string
  name?: string
  value: string | number
  className?: string
  placeholder?: string
  children?: ReactNode
  required?: boolean
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  id,
  name,
  value,
  className,
  placeholder,
  children,
  required,
  disabled,
  onChange,
}) => {
  return (
    <StyledInput
      type={type}
      id={id}
      name={name}
      value={value}
      className={className}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      onChange={onChange}
    >
      {children}
    </StyledInput>
  )
}
