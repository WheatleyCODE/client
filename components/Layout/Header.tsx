import { FC } from 'react';
import { Width } from 'components';
import s from 'styles/components/Layout/Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={s.mainBlock}>
      <Width>
        <div className={s.header}>
          <div className={s.logoBlock}></div>
          <div className={s.socialsBlock}></div>
          <div className={s.buttonsBlock}></div>
        </div>
      </Width>
    </header>
  );
};
