import React, { useContext } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react'

import { Container, Input } from './styles';
import { SearchInputContext } from '@/core/contexts/searchInputContext';
import { useRouter } from 'next/router';
import { MenuContext } from '@/core/contexts/menuContext';

export const SearchInput: React.FC = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchInputContext);
  const { push } = useRouter();

  const { setIsMenuOpen } = useContext(MenuContext)

  return (
    <Container>
      <Input 
        type="text" 
        name="search-post" 
        id="search-post" 
        placeholder='Search posts'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}  
      />
      <MagnifyingGlass size={24} weight="bold" onClick={() => setIsMenuOpen(false)}/>
    </Container>
  );
}
