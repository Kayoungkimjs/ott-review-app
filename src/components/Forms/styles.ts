import styled from '@emotion/styled'
import { textStyle } from '../../styles/utils/typography'
import { theme } from '../../styles'
import { positionCenterY } from '../../styles/utils/position'

export const StyledInput = styled.input`
  ${textStyle('base')};
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 8px;
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.border};
  border-radius: 5px;
  transition: background-color 200ms ease-in-out, border-color 200ms ease-in-out;

  &::placeholder {
    font-size: ${theme.fontSizes.base};
    font-weight: 500;
    color: ${theme.colors.grey};
  }

  &:focus {
    border: 2px solid ${theme.colors.blue};
  }
`
export const StyledTextarea = styled.textarea`
  ${textStyle('base')};
  display: block;
  width: 100%;
  min-height: 50px;
  padding: 0 8px;
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.border};
  border-radius: 5px;
  transition: background-color 200ms ease-in-out, border-color 200ms ease-in-out;

  &::placeholder {
    font-size: ${theme.fontSizes.base};
    font-weight: 500;
    color: ${theme.colors.grey};
  }

  &:focus {
    border: 2px solid ${theme.colors.blue};
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    min-height: 70px;
  }
`

export const StyledSelectGroup = styled.div`
  position: relative;

  .icon {
    ${positionCenterY()};
    right: 2px;
    left: auto;
    width: 24px;
    pointer-events: none;
  }
`

export const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
  padding: 0 8px;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.border};
  border-radius: 5px;

  &:focus {
    border: 2px solid ${theme.colors.blue};
  }
`
