import { ChangeEvent } from 'react'
import { StyledSelect, StyledSelectGroup } from './styles'
import { CaretIcon } from '../../../public/assets/svg'

interface SelectProps {
  id: string
  name?: string
  title?: string
  value: string | number
  options: RatingSelectOption[] | CategorySelectOption[]
  className?: string
  selected?: string | number
  required?: boolean
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const Select: React.FC<SelectProps> = ({
  id,
  name,
  title,
  value,
  options,
  className,
  required,
  disabled,
  onChange,
}) => {
  return (
    <StyledSelectGroup>
      <StyledSelect
        className={className}
        id={id}
        name={name}
        value={value}
        required={required}
        disabled={disabled}
        onChange={onChange}
      >
        <option value="0" disabled hidden>
          {title} 선택
        </option>
        {options.map((option, i) => {
          const key = `${option.value}-${id}-${i}`
          return (
            <option value={option.value} key={key}>
              {option.label}
            </option>
          )
        })}
      </StyledSelect>
      <CaretIcon className="icon" />
    </StyledSelectGroup>
  )
}
