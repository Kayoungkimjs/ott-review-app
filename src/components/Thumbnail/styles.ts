import styled from '@emotion/styled'
import type { ThumbnailSize } from './index'
import { theme } from '@/styles'

interface StyledThumbnailProps {
  size: ThumbnailSize
}

export const StyledThumbnail = styled.div<StyledThumbnailProps>`
  display: block;
  width: ${({ size }) => (size === 'small' ? '24px' : '32px')};
  height: ${({ size }) => (size === 'small' ? '24px' : '32px')};
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  transition: border 200ms ease-in-out;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    border: 3px solid ${theme.colors.blue};
  }
`
