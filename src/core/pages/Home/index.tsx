import Head from 'next/head';
import React from 'react';

import { Container } from './styles';

export const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home | GitHub Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>Ola Github Blog</h2>
      </main>
    </>
  );
}