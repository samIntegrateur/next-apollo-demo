import { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import 'normalize.css/normalize.css';
import '../public/style/global.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' key='charset' />
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
          key='viewport'
        />
        <title key='title'>Next Apollo Demo</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
