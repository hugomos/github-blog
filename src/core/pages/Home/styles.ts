import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const Content = styled.main`

  >section {
    width: 100%;
    padding: 1.6rem;
    
    >div {
      padding: 1.6rem 0;
    }

    @media screen and (min-width: 768px) {
      padding: 1.6rem 4.2rem;
    }
  }
`