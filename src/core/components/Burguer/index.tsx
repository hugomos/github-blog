import React from 'react';

import { Container } from './styles';
import { List } from '@phosphor-icons/react';

interface Props {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Burguer: React.FC<Props> = ({ setIsMenuOpen }) => {
  return (
    <Container onClick={() => setIsMenuOpen(true)}>
      <List size={32} weight="bold" />
    </Container>
  );
}
