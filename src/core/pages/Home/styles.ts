import styled from "styled-components";

export type ContainerProps = {
  isMenuOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;

  overflow: ${({ isMenuOpen }) => isMenuOpen ? 'hidden' : 'auto'};
`

export const Navigation = styled.nav`
  width: 100%;
  display: none;

  list-style: none;
  border-top: 1px solid ${({ theme }) => theme.colors.gray600};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: end;

    gap: 2.4rem;

    padding: 0.8rem 4.2rem;
  }
`

export const Content = styled.main`
  width: 100%;
  padding: 1.6rem;

  @media screen and (min-width: 768px) {
    padding: 3.2rem 4.2rem;
  }
`

export const Section = styled.section`
  width: 100%;
`