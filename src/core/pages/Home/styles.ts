import styled from "styled-components";

export type ContainerProps = {
  isMenuOpen: boolean;
}

export type SectionProps = {
  height?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  /* overflow: ${({ isMenuOpen }) => isMenuOpen ? 'hidden' : 'auto'}; */
`

export const Content = styled.main`
  width: 100%;
  /* padding: 1.6rem; */
  padding: 2.4rem 2.6rem;

  flex: 1;

  @media screen and (min-width: 768px) {
    padding: 3.2rem 4.2rem;
  }
`

export const Section = styled.section<SectionProps>`
  width: 100%;
  ${({ height }) => height && `height: ${height};`};
`