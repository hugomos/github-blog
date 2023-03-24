import React from 'react';

import { Container } from './styles';

export const Footer: React.FC = () => {
  return (
    <Container>
      <p>
        &copy; 2023 <a href="https://github.com/hugomos" target='_blank'>hugomos</a> all rights reserved.
      </p>
      <p>
        Powered by <a href="https://github.com/hugomos" target='_blank'>hugomos</a>
      </p>
    </Container>
  );
}
