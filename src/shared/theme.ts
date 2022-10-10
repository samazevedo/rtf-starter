import { ThemeProps } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const theme = {
    fonts: {
        basic: 'helvetica, sans-serif',
        mainFont: 'Suwannaphum, serif',
    },
    colors: {
        green: '#A9ED33',
        blue: '#60C2FB',
        orange: '#FF8E25',
        white: '#FFFFFF',
        black: '#000000',
        gray: '#696969',
        darkBlue: '#2C3E50',
        mainBg: '#8B8D8BFB',
    },
    breakpoints: {
        mobile: '576px',
        tablet: '768px',
        desktop: '1024px',
        desktopL: '1280px',
    },
    fontSizes: {
        small: '1.2rem',
        medium: '1.6rem',
        large: '2.4rem',
    },
}
export type MainThemeProps = ThemeProps<typeof theme>
export const GlobalStyle = createGlobalStyle<MainThemeProps>`
html,
body,
#root {
  padding: 0;
  margin:0;
  width:100%;
  height: 100%;
  overflow: hidden;
}
html {
  scroll-behavior: smooth;
}
*,
*::before, 
*::after {
  box-sizing:border-box;
}
a {
  text-decoration: none;
}
ul,
li {
  list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin:0;
}

// theme
font-size: ${({ theme }) => theme.fonts.basic};
background-color: ${({ theme }) => theme.colors.mainBg};

`
