import styled from '@emotion/styled'
import { theme } from '../../styles'
import { inlineFlexbox } from '../../styles/utils/flexbox'
import { textStyle } from '../../styles/utils/typography'

export const StyledButton = styled.button`
  ${inlineFlexbox()};
  ${textStyle('button')}
  width: 100%;
  height: 40px;
  padding: 0 16px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.blue};
  transition: background-color 200ms ease-in-out;
  white-space: nowrap;
  cursor: pointer;

  &:hover,
  &.active {
    font-weight: 700;
    background-color: ${theme.colors.darkBlue};
  }
`
