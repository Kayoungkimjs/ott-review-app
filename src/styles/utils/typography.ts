import { css, TypographyScale } from '@emotion/react'
import { theme } from '../index'

export function textStyle(size: TypographyScale) {
  return css`
    font-size: ${theme.fontSizes[size]};
    line-height: ${theme.lineHeights.base};
    letter-spacing: ${theme.letterSpacings.base};
  `
}

export function truncate() {
  return css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `
}

export function lineClamp(line: number) {
  return css`
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `
}
