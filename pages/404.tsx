import { useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { pathRoutes } from 'types';
import s from 'styles/pages/404.module.scss';

const Error: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(pathRoutes.HOME);
  }, []);

  return (
    <div className={s.mainBlock}>
      <h1 className={s.title}>Error 404</h1>
      <h2>Уупс, такой страницы не существует</h2>
      <i className="fal fa-smile" />
    </div>
  );
};

export default Error;
