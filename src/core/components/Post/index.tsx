import React from 'react';

import { Container, Image, Content, Resume } from './styles';
import Link from 'next/link';

interface Props {
  title: string;
  author: string;
  content?: string;
  image?: string;
  createdAt?: Date;
}

export const Post: React.FC<Props> = ({ image, title, content, author, createdAt }) => {
  return (
    <Container>
      <Link href="#">
        {image && (
          <Image>
            <img src={image} alt="" />
          </Image>
        )}
        <Content>
          <h4>{title}</h4>
          {content && <Resume>{content.slice(0, 150) + '...ver mais'}</Resume>}
          <span>Por {author} há 6hrs</span>
        </Content>
      </Link>
    </Container>
  );
}
