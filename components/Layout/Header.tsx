import { FC } from 'react';
import { Width } from 'components';
import s from 'styles/components/Layout/Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={s.mainBlock}>
      <Width>
        <h1>Header</h1>
      </Width>
    </header>
  );
};
