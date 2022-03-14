import Head from 'next/head';
import { FC } from 'react';

interface HeadTagProps {
  keywords: string[];
  description: string;
  title: string;
}

export const HeadTag: FC<HeadTagProps> = ({ keywords, description, title }) => {
  return (
    <Head>
      <title>{title} | JETCOLOR</title>
      <link rel="icon" href="/logo.png" />
      <link rel="preload" href="myfont.woff2" as="font" type="font/woff2" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(' ')} />
    </Head>
  );
};
