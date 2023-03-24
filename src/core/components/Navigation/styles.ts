import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  display: none;

  list-style: none;

  border-top: 1px solid ${({ theme }) => theme.colors.gray500};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray500};

  background-color: ${({ theme }) => theme.colors.gray800};

  >ul {
    display: flex;
    align-items: center;

    gap: 2.4rem;
  }
  
  a{
    transition: color 0.2s;

    &:hover{
      color: ${({ theme }) => theme.colors.gray300};
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: end;

    padding: 0.8rem 4.2rem;
  }
`