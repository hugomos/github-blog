import { Header } from '@/core/components/Header';
import Head from 'next/head';
import React, { useState } from 'react';

import { Container, Content, Title } from './styles';
import { GetStaticPaths, GetStaticProps } from 'next';

import ReactMarkdown from 'react-markdown'

import { api } from '@/core/lib/axios';
import { Spinner } from '@/core/components/Spinner';

interface IPost {
  number: number,
  title: string,
  body: string,
  created_at: string,
  user: {
    login: string,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await api.get(`repos/hugomos/blog-posts/issues/${ctx.params?.id}`);

  const post = {
    id: data.id,
    title: data.title,
    body: data.body,
    created_at: data.created_at,
    user: {
      login: data.user.login,
    }
  }

  console.log(post)

  return {
    props: {
      post,
    },
  }
}

interface Props {
  post: IPost
}

const PostDetails: React.FC<Props> = ({ post }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if(!post) {
    return (
      <Container>
        <Header setIsMenuOpen={setIsMenuOpen}/>
        <Content>
          <Spinner />
        </Content>
      </Container>
    )
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Container>
        <Header setIsMenuOpen={setIsMenuOpen}/>
        <Content>
          <Title>{post.title}</Title>
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </Content>
      </Container>
    </>
  );
}

export default PostDetails;