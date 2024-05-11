import styled from '@emotion/styled'
import { flexbox } from '../../styles/utils/flexbox'
import { theme } from '../../styles'

export const StyledErrorInfo = styled.small`
  ${flexbox('end')}
  margin-bottom: 3px;
  color: ${theme.colors.red};
`
