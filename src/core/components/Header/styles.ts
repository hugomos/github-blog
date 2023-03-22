import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  height: 100%;
  max-height: 11.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1.6rem;

  @media screen and (min-width: 768px) {
    padding: 0 4.2rem;
  }
`

export const Logo = styled.h2`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`