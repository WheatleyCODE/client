import { FC } from 'react';
import s from 'styles/components/Layout/Footer.module.scss';
import { Width } from 'components';

export const Footer: FC = () => {
  return (
    <footer className={s.mainBlock}>
      <Width>
        <h1 className={s.color}>Footer</h1>
      </Width>
    </footer>
  );
};
