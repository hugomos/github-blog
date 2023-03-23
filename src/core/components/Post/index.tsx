/* eslint-disable @next/next/no-img-element */

import React from 'react';

import { Container, Image, Content, Resume, Title, Footer } from './styles';
import Link from 'next/link';

interface Props {
  title: string;
  author: string;
  content?: string;
  image?: string;
  createdAt?: Date;
}

export const Post: React.FC<Props> = ({ image, title, content, author, createdAt }) => {
  const formatedResume = content?.substring(0, 150) + '... ver mais';

  return (
    <Container>
      <Link href="#">
        {image && (
          // eslint-disable-next-line jsx-a11y/alt-text
          <Image>
            <img src={image} alt='post image'/>
          </Image>
        )}
        <Content>
          <Title>{title}</Title>
          {content && <Resume>{formatedResume}</Resume>}
          <Footer>Por {author} há 6hrs</Footer>
        </Content>
      </Link>
    </Container>
  );
}
