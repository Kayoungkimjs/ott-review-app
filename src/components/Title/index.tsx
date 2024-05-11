import { StyledTitle } from './styles'

interface TitleProps {
  title: string
  className?: string
}

export const Title: React.FC<TitleProps> = ({ title, className }) => {
  return <StyledTitle className={className}>{title}</StyledTitle>
}
