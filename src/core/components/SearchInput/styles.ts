import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-height: 3.6rem;

  padding: 1rem 1.6rem;

  display: flex;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 5px;

  >svg {
    color: ${({ theme }) => theme.colors.gray300};
  }

  @media screen and (min-width: 768px) {
    max-width: 36rem;
  }
`

export const Input = styled.input`
  width: 100%;

  border:none;
  outline: none;

  padding: 0 1.6rem 0 0; 

  color: ${({ theme }) => theme.colors.gray200};
  background-color: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
  }
`