import React from 'react';

import { Container, Logo } from './styles';
import { SearchInput } from '../SearchInput';

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo>GITHUB BLOG</Logo>
      <SearchInput />
    </Container>
  );
}
