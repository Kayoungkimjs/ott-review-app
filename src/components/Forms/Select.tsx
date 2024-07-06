import { ChangeEvent } from 'react'
import { StyledSelect, StyledSelectGroup } from './styles'
import { CaretIcon } from '../../../public/assets/svg'

interface SelectProps<T> {
  id: string
  name?: string
  title?: string
  value: string | number
  label: string
  options: T[]
  className?: string
  selected?: string | number
  required?: boolean
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}

interface Option {
  value?: string | number
  label?: string
}

export const Select = <T extends Option>({
  id,
  name,
  title,
  value,
  options,
  className,
  required,
  disabled,
  onChange,
}: SelectProps<T>) => {
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
          {title}
        </option>
        {options &&
          options.map((option, i) => {
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
