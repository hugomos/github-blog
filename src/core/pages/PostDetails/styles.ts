import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const Content = styled.main`
  width: 100%;
  padding: 1.6rem;

  display: flex;
  flex-direction: column;

  gap: 1.4rem;

  h2, h3, h4 {
    padding: 2rem 0 0;
  }

  p {
    line-height: 2.6rem;
  }

  ul, ol {
    padding-left: 1.6rem;
    list-style: inherit;
  }

  img {
    width: 100%;
    max-height: 30rem;

    padding: 1.6rem 0;

    border-radius: 0.8rem;

    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    padding: 3.2rem 4.2rem;
  }
`

export const Title = styled.h1`
  margin-bottom: 1.6rem;
  font-size: 2.2rem;

  @media screen and (min-width: 768px) {
    font-size: 3.2rem;
  }
`