import styled from "styled-components";

export const Container = styled.button`
  width: 100%

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: none;

  svg {
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`