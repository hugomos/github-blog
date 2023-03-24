import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/styles/Globals'
import { dafaultTheme } from '@/styles/theme/dafaultTheme'

import { MenuProvider } from '@/core/contexts/menuContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={dafaultTheme}>
        <GlobalStyles />
        <MenuProvider>
          <Component {...pageProps} />
        </MenuProvider>
      </ThemeProvider>
    </>
  )
}
