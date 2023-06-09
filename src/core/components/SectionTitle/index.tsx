import React from 'react';

import { Container } from './styles';

interface Props {
  barColor?: string;
  children: React.ReactNode | React.ReactNode[];
}

export const SectionTitle: React.FC<Props> = ({ children, barColor="" }) => {
  return (
    <Container barColor={barColor}>
      {children}
    </Container>
  );
}
