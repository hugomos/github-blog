import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;
  
  & + div {
    margin-top: 1.4rem;
  }
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
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  padding: 0.8rem 0;
`

export const Title = styled.h4`
  margin-bottom: 0.8rem;

  color: ${({ theme }) => theme.colors.gray100};

  transition: color 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.gray300};
  }
`

export const Resume = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.gray200};
`

export const Footer = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.gray300};
`