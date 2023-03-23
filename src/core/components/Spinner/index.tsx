import React from 'react';

import { Container } from './styles';

export const Spinner: React.FC = () => {
  return (
    <Container>
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </Container>
  );
}