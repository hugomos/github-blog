/* eslint-disable @next/next/no-img-element */
import { Header } from '@/core/components/Header';
import Head from 'next/head';
import React, { useContext } from 'react';

import { Container, Content } from './styles';
import { GetStaticPaths, GetStaticProps } from 'next';

import ReactMarkdown from 'react-markdown'

import { api } from '@/core/lib/axios';
import { Spinner } from '@/core/components/Spinner';
import { MenuContext } from '@/core/contexts/menuContext';
import { Menu } from '@/core/components/Menu';
import { Footer } from '@/core/components/Footer';
import { formatDate } from '@/core/shared/utils/formatDate';
import { IResponse } from '../Home';
import Link from 'next/link';

export interface IUser {
  login: string,
  bio: string,
  avatar_url: string,
  html_url: string
}

export interface IPost {
  number: number,
  title: string,
  body: string,
  created_at: string,
  user: IUser
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const { data } = await api.get<IResponse>(`search/issues?q=%20repo:hugomos/blog-posts`);

  const paths = data.items.map(post => {
    return {
      params: {
        id: post.number.toString(),
      }
    }
  })

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await api.get<IPost>(`repos/hugomos/blog-posts/issues/${ctx.params?.id}`);
  const user = (await api.get<IUser>(`users/${data.user.login}`)).data;

  const post = {
    number: data.number,
    title: data.title,
    body: data.body,
    created_at: formatDate(data.created_at),
    user: {
      login: data.user.login,
      bio: user.bio,
      avatar_url: `https://github.com/${data.user.login}.png`,
      html_url: user.html_url
    }
  }

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
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  if(!post) {
    return (
      <Container isMenuOpen>
        <Header setIsMenuOpen={setIsMenuOpen}/>
        <Content>
          <Spinner />
        </Content>
      </Container>
    )
  }

  if(isMenuOpen){
    return (
      <Container isMenuOpen>
        <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen/>
      </Container>
    )
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Container isMenuOpen>
        <Header setIsMenuOpen={setIsMenuOpen}/>
        <Content>
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </Content>
        <Footer />
      </Container>
    </>
  );
}

export default PostDetails;