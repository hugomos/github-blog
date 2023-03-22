import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.6rem 0;

  overflow: hidden;
`

export const Image = styled.div`
  img {
    width: 100%;
    max-height: 20rem;

    border-radius: 8px;

    object-fit: cover;
  }
`

export const Content = styled.div`
  h4 {
    transition: color 0.2s;

    margin-bottom: 0.8rem;

    &:hover {
      color: ${({ theme }) => theme.colors.gray300};
    }
  }

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray300};
  }
`

export const Resume = styled.p``