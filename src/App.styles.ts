import styled from '@emotion/styled'
import { theme } from './styles'

export const ResponsiveGrid = styled.div`
  @media (min-width: ${theme.breakpoints.desktop}) {
    width: ${theme.breakpoints.desktop};
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 0 auto;
    height: auto;
  }
`
