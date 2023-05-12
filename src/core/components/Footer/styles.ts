import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  padding: 5rem 4.2rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 2rem;

  background-color: ${({ theme }) => theme.colors.gray800};

  p {
    >a {
      color: ${({ theme }) => theme.colors.purple};
      transition: color 0.2s ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.colors.pink};
      }
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`