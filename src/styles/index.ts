import { DefaultTheme } from '@emotion/react'

const fontFamilies = {
  main: 'Noto Sans KR, sans-serif',
}

const fontSizes = {
  base: '14px',
  button: '15px',
  title: '18px',
}

const lineHeights = {
  base: '24px',
}

const letterSpacings = {
  base: '-0.01em',
}

const colors = {
  grey: '#b2b3b9',
  black: '#000',
  border: '#ddd',
  background: '#f5f5f5',
  white: '#fff',
  blue: '#194e84',
  lightBlue: '#1a5bb5',
  yellow: '#fcf67b',
  red: '#f86d7d',
}

const levels = {
  overlay: 100,
  confirmModal: 200,
}

export const gutter = '10px'

export const theme: DefaultTheme = {
  colors,
  fontFamilies,
  fontSizes,
  lineHeights,
  letterSpacings,
  levels,
  gutter,
}
