import React from 'react';
import { SearchInput } from '../SearchInput';

import { Container, Content, OptionSection, Options, Option } from './styles';
import { SectionTitle } from '../SectionTitle';
import { ChartLine, Clock } from '@phosphor-icons/react';
import Link from 'next/link';

export interface Props {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
}

export const Menu: React.FC<Props> = ({ setIsMenuOpen }) => {
  return (
    <Container isMenuOpen>
      <SearchInput />
      <Content>
        <OptionSection>
          <SectionTitle>Veja mais</SectionTitle>
          <Options>
            <Option>
              <Clock size={16} weight="bold" />
              <Link href="/#latest_publications" onClick={() => setIsMenuOpen(false)}>Ultimas publicações</Link>
            </Option>
            <Option>
              <ChartLine size={16} weight="bold" />
              <Link href="/#most_relevant" onClick={() => setIsMenuOpen(false)}>Mais relevantes</Link>
            </Option>
          </Options>
        </OptionSection>
      </Content>
      <button
        onClick={() => setIsMenuOpen(false)}
      >voltar</button>
    </Container>
  );
}
