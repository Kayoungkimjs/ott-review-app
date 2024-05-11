import styled from '@emotion/styled'
import type { ColumnProps } from './Column'
import type { RowProps } from './Row'
import { theme } from '../../styles'
import { positionCenter } from '../../styles/utils/position'
import { HEIGHT, MAX_WIDTH } from '../../constants/styles'

export const StyledContainer = styled.div`
  ${positionCenter()}
  width: 100%;
  height: ${HEIGHT};
  max-width: ${MAX_WIDTH};
  padding: 0 5px;
  margin: 0 auto;
  border: 3px solid ${theme.colors.border};
  background-color: ${theme.colors.background};

  @media (min-width: ${theme.breakpoints.tablet}) {
    max-width: ${theme.breakpoints.tablet};
    height: auto;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    max-width: ${theme.breakpoints.desktop};
  }
`

export const StyledColumn = styled.div<ColumnProps>`
  width: 100%;
  padding: 0 ${theme.gutter};

  @media (min-width: ${theme.breakpoints.tablet}) {
  }
`

export const StyledRow = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;

  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`}
`
