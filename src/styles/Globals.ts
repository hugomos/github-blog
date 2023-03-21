import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
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

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.gray900};
  }

  input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    font-style: normal;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`