import Head from 'next/head';
import React from 'react';

import { Container, Content } from './styles';
import { Header } from '@/core/components/Header';
import { SectionTitle } from '@/core/components/SectionTitle';
import { Post } from '@/core/components/Post';

export const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home | GitHub Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <Header />
        <Content>
          <section>
            <SectionTitle>Ultimas publicações</SectionTitle>
            <div>
              <Post 
                author='hugomos' 
                title='Inteligência Artificial: como a tecnologia está transformando nossas vidas'
              />
              <Post 
                author='flpfontes' 
                title='Blockchain: a tecnologia que está revolucionando a forma como fazemos negócios' 
              />
            </div>
          </section>
          
          <section>
            <SectionTitle>Mais relevantes</SectionTitle>
            <div>
              <Post 
                author='hugomos' 
                title='Por que você deve se preocupar com a segurança dos seus dados pessoais'
                content='Os avanços na tecnologia médica estão acontecendo a uma velocidade surpreendente, com novas inovações surgindo em um ritmo constante. Desde a inteligência artificial até a nanotecnologia, as últimas novidades estão transformando a forma como a medicina é praticada.'
                image='/images/placeholder-image-4.jpg'
              />
              <Post 
                author='flpfontes' 
                title='Da Inteligência Artificial à Nanotecnologia: Descubra as Últimas Novidades em Tecnologia Médica' 
                image='/images/placeholder-image-3.jpg'
              />
            </div>
          </section>
        </Content>
      </Container>
    </>
  );
}
