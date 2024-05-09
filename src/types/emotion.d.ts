import '@emotion/react'

declare module '@emotion/react' {
  export type TypographyScale = 'base' | 'button' | 'title'

  export interface DefaultTheme {
    colors: {
      grey: string
      black: string
      border: string
      background: string
      white: string
      blue: string
      lightBlue: string
      yellow: string
      red: string
    }

    fontFamilies: {
      main: string
    }

    fontSizes: {
      base: string
      button: string
      title: string
    }

    lineHeights: {
      base: string
    }

    letterSpacings: {
      base: string
    }

    levels: {
      [key: string]: number
    }

    gutter: string
  }
}
