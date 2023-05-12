import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  height: 100%;
  max-height: 11.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 4.2rem 2.4rem;

  background-color: ${({ theme }) => theme.colors.gray800};

  >span {
    display: none;
  }

  @media screen and (min-width: 768px) {
    padding: 3.2rem 4.2rem;

    >span {
      width: 100%;

      display: flex;
      justify-content: end;
    }
  }
`

export const Logo = styled.picture`
  >img {
    height: 4.4rem;
  }
`
