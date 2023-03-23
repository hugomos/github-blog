import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root, html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;

    color: ${({ theme }) => theme.colors.gray100};
    background-color: ${({ theme }) => theme.colors.gray900};
  }

  input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

`