import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { BlogGithubProvider } from './contexts/BlogGithubContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <BlogGithubProvider>
          <Router />
        </BlogGithubProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
