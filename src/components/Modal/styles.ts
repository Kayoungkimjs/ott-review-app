import styled from '@emotion/styled'
import { positionCenter } from '../../styles/utils/position'
import { theme } from '../../styles'
import { textStyle } from '../../styles/utils/typography'

export const ModalWrapper = styled.div`
  ${positionCenter('fixed')}
  width: 250px;
  height: 150px;
  padding: 20px;
  background-color: ${theme.colors.background};
  border-radius: 8px;
  z-index: ${theme.levels.confirmModal};
`
export const ModalContent = styled.div`
  padding: 20px 0;
  text-align: center;

  p {
    ${textStyle('base')}
    margin-bottom: 20px;
  }
`
export const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.white};
  cursor: pointer;
`
export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  overflow: auto;
  background-color: ${theme.colors.grey};
  opacity: 0.7;
  z-index: ${theme.levels.overlay};
`
