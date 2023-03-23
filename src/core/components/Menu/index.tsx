import React from 'react';
import { SearchInput } from '../SearchInput';

import { Container, Content, OptionSection, Options, Option, Button } from './styles';
import { SectionTitle } from '../SectionTitle';
import { ChartLine, Clock, SkipBack } from '@phosphor-icons/react';
import Link from 'next/link';
import { useTheme } from 'styled-components';

export interface Props {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
}

export const Menu: React.FC<Props> = ({ setIsMenuOpen }) => {

  const theme = useTheme();

  return (
    <Container isMenuOpen>
      <SearchInput />
      <Content>
        <OptionSection>
          <SectionTitle barColor={theme.colors.yellow}>Veja mais</SectionTitle>
          <Options>
            <Option>
              <Clock size={16} weight="bold" />
              <Link 
                href="/#latest_publications" 
                onClick={() => setIsMenuOpen(false)}>
                  Ultimas publicações
              </Link>
            </Option>
            <Option>
              <ChartLine size={16} weight="bold" />
              <Link 
                href="/#most_relevant" 
                onClick={() => setIsMenuOpen(false)}>
                  Mais relevantes
              </Link>
            </Option>
          </Options>
        </OptionSection>

        <OptionSection>
          <SectionTitle barColor={theme.colors.gray300}>Opções</SectionTitle>
          <Options>
            <Option>
                <SkipBack size={16} weight="bold" />
                <Link 
                  href="#" 
                  onClick={() => setIsMenuOpen(false)}>
                    Voltar
                </Link>
              </Option>
          </Options>
        </OptionSection>
      </Content>
    </Container>
  );
}
