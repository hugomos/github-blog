import React from 'react';

import { Container } from './styles';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const HPosts: React.FC<Props> = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
}
