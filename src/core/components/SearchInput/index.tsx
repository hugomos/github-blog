import React from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react'

import { Container, Input } from './styles';

export const SearchInput: React.FC = () => {
  return (
    <Container>
      <Input type="text" name="search-post" id="search-post" placeholder='Search posts'/>
      <MagnifyingGlass size={24} weight="bold"/>
    </Container>
  );
}
