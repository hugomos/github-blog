import styled from "styled-components";

export const Container = styled.h3`

  display: flex;
  gap: 1rem;

  color: ${({ theme }) => theme.colors.gray100};

  &:before {
    content: "";
    display: block;
    
    border: 2px solid ${({ theme }) => theme.colors.gray100};
  }
`