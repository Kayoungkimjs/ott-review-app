import styled from '@emotion/styled'
import { theme } from '../../styles'
import { textStyle } from '../../styles/utils/typography'
import { flexbox } from '../../styles/utils/flexbox'

export const StyledCard = styled.div`
  width: 100%;

  .cardGroup {
    padding: 25px 15px;
    height: 200px;
    margin-bottom: 20px;
    background-color: ${theme.colors.lightBlue};
    border: 1px solid ${theme.colors.border};
    border-radius: 10px;

    .cardHeader,
    p {
      margin-bottom: 5px;
    }

    .cardHeader {
      ${flexbox('start')}

      h3 {
        margin-left: 5px;

        .cardTitle {
          ${textStyle('title')}
        }
      }
    }

    p {
      margin-top: 12px;
      .cardComment {
        ${textStyle('base')}
      }
    }
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    .cardGroup {
      width: 45%;

      &:nth-of-type(2n-1) {
        margin-right: 5px;
      }
    }
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    justify-content: center;
  }
`
