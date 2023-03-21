import 'styled-components'
import { dafaultTheme } from '@/styles/theme/dafaultTheme'

type ThemeType = typeof dafaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType { }
}