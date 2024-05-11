import styled from '@emotion/styled'
import { theme } from '../../styles'
import { flexbox } from '../../styles/utils/flexbox'

export const StyledRating = styled.div`
  width: 100%;
  ${flexbox('start')}

  .star {
    width: 15px;
    height: 15px;
    color: ${theme.colors.yellow};
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    .star {
      width: 18px;
      height: 18px;
    }
  }
`
