import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: grid;
  place-items: baseline;
  gap: 2.4rem;

  padding: 1.6rem 0;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`