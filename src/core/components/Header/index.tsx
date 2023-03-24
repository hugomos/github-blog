/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { List } from '@phosphor-icons/react';

import { SearchInput } from '../SearchInput';
import { Container, Logo } from './styles';
import { Burguer } from '../Burguer';
import Link from 'next/link';

interface Props {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<Props> = ({ setIsMenuOpen }) => {
  return (
    <Container>
      <Link href="/">
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
