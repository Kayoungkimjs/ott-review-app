import { ReactNode } from 'react'
import { StyledColumn } from './styles'

export interface ColumnProps {
  sm: number
  children?: ReactNode
}

export const Column: React.FC<ColumnProps> = ({ sm, children }) => {
  return <StyledColumn sm={sm}>{children}</StyledColumn>
}
