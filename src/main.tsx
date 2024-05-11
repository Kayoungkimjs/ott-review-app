import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RecoilRoot } from 'recoil'
import { Global, ThemeProvider } from '@emotion/react'
import { theme } from './styles/index.ts'
import { GlobalStyles } from './globalStyle.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
)
