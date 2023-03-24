import styled from "styled-components";

interface Props {
  isMenuOpen: boolean;
}

export const Container = styled.div<Props>`
  width: 100%;
  height: 100vh;
`

export const Content = styled.main`
  width: 100%;
  padding: 2.4rem 2.6rem;

  display: flex;
  flex-direction: column;

  gap: 1.4rem;

  h1 {
    margin-bottom: 1.6rem;
    font-size: 2.2rem;

    @media screen and (min-width: 769px) {
      font-size: 2.6rem;
    }

    @media screen and (min-width: 900px) {
      font-size: 3rem;
    }
  }

  h2, h3, h4 {
    padding: 2rem 0 0;
  }

  p {
    line-height: 2.6rem;
  }

  ul, ol {
    padding-left: 1.6rem;
    list-style: inherit;

    li + li {
      margin-top: 0.8rem;
    }
  }

  img {
    width: 100%;
    max-height: 30rem;

    padding: 1.6rem 0;

    border-radius: 0.8rem;

    object-fit: cover;
  }

  @media screen and (min-width: 650px) {
    padding: 3.2rem 6.2rem;
  }

  @media screen and (min-width: 780px) {
    padding: 3.2rem 10.2rem;
  }

  @media screen and (min-width: 995px) {
    padding: 3.2rem 16.2rem;
  }
`