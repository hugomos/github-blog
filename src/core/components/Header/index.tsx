/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import { List } from '@phosphor-icons/react';

import { SearchInput } from '../SearchInput';
import { Container, Logo } from './styles';
import { Burguer } from '../Burguer';
import Link from 'next/link';
import { SearchInputContext } from '@/core/contexts/searchInputContext';

interface Props {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<Props> = ({ setIsMenuOpen }) => {
  const { setSearchTerm } = useContext(SearchInputContext);
  return (
    <Container>
      <Link href="/" onClick={() => setSearchTerm('')}>
        <Logo>
          <source srcSet='/logo-p.svg' media='(max-width: 768px)'/>
          <img src="/logo-g.svg" alt="application logo" />
        </Logo>
      </Link>
      <span>
        <SearchInput />
      </span>
      <Burguer setIsMenuOpen={setIsMenuOpen} />
    </Container>
  );
}
