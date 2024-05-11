import { ChangeEvent, ReactNode } from 'react'
import { StyledTextarea } from './styles'

interface InputProps {
  id?: string
  name?: string
  value: string | number
  className?: string
  placeholder?: string
  children?: ReactNode
  required?: boolean
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const Textarea: React.FC<InputProps> = ({
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
    <StyledTextarea
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
    </StyledTextarea>
  )
}
