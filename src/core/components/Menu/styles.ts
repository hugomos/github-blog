import styled from "styled-components";

interface Props {
  isMenuOpen: boolean;
}

export const Container = styled.nav<Props>`
  width: 100%;
  height: 100%;

  padding: 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 100;

  position: absolute;

  background-color: ${({ theme }) => theme.colors.gray900};

  translate: ${({ isMenuOpen }) => isMenuOpen ? 'translateX(0)' : 'translateX(-100%)'};
`

export const Content = styled.div`
  width: 100%;

  padding: 4.2rem 0;

  display: flex;
  flex-direction: column;
`

export const OptionSection = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.6rem;
`

export const Options = styled.ul`
  padding: 0 0.8rem 0.8rem 0;
`

export const Option = styled.li`
  display: flex;
  align-items: center;

  gap: 0.8rem;

  margin-bottom: 1.6rem;
  padding: 0.8rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray500};

  >svg{
    color: ${({ theme }) => theme.colors.gray300};
  }

  transition: background-color 0.1s;

  &:hover{
    background-color: ${({ theme }) => theme.colors.gray600};
  }
`

export const Button = styled.span`
  width: 100%;
  
  color: ${({ theme }) => theme.colors.gray900};
  background-color: ${({ theme }) => theme.colors.gray500};
`