import { FC } from 'react';
import Head from 'next/head';

interface HeadTagProps {
  keywords: string[];
  description: string;
  title: string;
}

export const HeadTag: FC<HeadTagProps> = ({ keywords, description, title }) => {
  return (
    <Head>
      <title>{title} | JETCOLOR</title>
      <link rel="icon" href="/telegram.svg" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(' ')} />
    </Head>
  );
};
