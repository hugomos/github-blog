import styled from "styled-components";

interface ContainerProps {
  barColor: string;
}

export const Container = styled.h3<ContainerProps>`

  display: flex;
  gap: 1rem;

  color: ${({ theme }) => theme.colors.gray100};

  &:before {
    content: "";
    display: block;
    
    border: 2px solid ${({ theme, barColor }) => barColor ? barColor : theme.colors.gray100};
  }
`