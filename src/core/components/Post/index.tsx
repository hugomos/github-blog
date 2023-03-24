/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from 'react';

import { Container, Image, Content, Resume, Title, Footer } from './styles';
import Link from 'next/link';
import { formatDate } from '@/core/shared/utils/formatDate';
import { IPost } from '@/core/pages/PostDetails';


interface Props {
  post: IPost;
  bodyIsVisible?: boolean;
  imageIsVisible?: boolean;
}

export const Post: React.FC<Props> = ({ post, bodyIsVisible=true, imageIsVisible=true }) => {

  const regex = /\!\[header_image\]\(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/gm

  // const date = formatDate(post.created_at);
  const image = post.body?.match(regex)?.[0].split('](')?.[1].replace(')', '');
  const resume = post.body.replace(regex, '').replace(`# ${post.title}`, '').substring(0, 150) + '... ver mais';
  
  return (
    <Container>
      <Link href={`/${post.number}`}>
          {imageIsVisible && (
            <Image> 
              <img src={image} alt="imagem de cabecalho da publicacao"/>
            </Image>
          )}
        <Content>
          <Title>{post.title}</Title>
          {bodyIsVisible && <Resume>{resume}</Resume>}
          <Footer>Por {post.user.login} {post.created_at}</Footer>
        </Content>
      </Link>
    </Container>
  );
}
