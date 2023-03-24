import React from 'react';

import { Container } from './styles';
import Link from 'next/link';

export const Navigation: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link href="/#latest_publications">Ultimas publicações</Link>
        </li>
        <li>
          <Link href="/#most_relevant">Mais relevantes</Link>
        </li>
      </ul>
    </Container>
  );
}
