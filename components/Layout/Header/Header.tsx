import { FC } from 'react';
import { Width } from 'components';
import { Logo } from './Logo';
import s from 'styles/components/Layout/Header/Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={s.mainBlock}>
      <Width>
        <div className={s.header}>
          <div className={s.logoBlock}>
            <Logo />
          </div>
          <div className={s.socialsBlock}>2</div>
          <div className={s.buttonsBlock}>3</div>
        </div>
      </Width>
    </header>
  );
};
