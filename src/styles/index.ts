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
  title: '#3F4150',
  border: '#E0E2E7',
  background: '#f7f8fa',
  white: '#fff',
  blue: '#3DA5F5',
  lightBlue: '#ECF6FE',
  darkBlue: '#3186C4',
  yellow: '#fff58c',
  red: '#f86d7d',
}

const levels = {
  overlay: 100,
  confirmModal: 200,
}

export const gutter = '10px'

const breakpoints = {
  tablet: '768px',
  desktop: '1200px',
}

export const theme: DefaultTheme = {
  colors,
  fontFamilies,
  fontSizes,
  lineHeights,
  letterSpacings,
  levels,
  gutter,
  breakpoints,
}
