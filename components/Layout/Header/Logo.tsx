import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { Button } from '@mui/material';
import logo from 'public/logo.png';
import { pathRoutes } from 'types';
import s from 'styles/components/Layout/Header/Logo.module.scss';

export interface LogoProps {
  className?: string;
}
export const Logo: FC<LogoProps> = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={s.mainBlock}>
      <div className={s.logoBlock}>
        <Link href={pathRoutes.HOME}>
          <Image className={s.logoImg} height={36} width={36} src={logo} alt={'logo'} />
        </Link>
        <Link href={pathRoutes.HOME}>
          <h2 className={s.logoText}>JETCOLOR</h2>
        </Link>
      </div>
      <div className={s.menuBlock}>
        <Button
          onClick={() => {
            setShow((p) => !p);
          }}
          className={s.button}
          size="small"
          variant="outlined"
        >
          <div className={s.buttonText}>
            <h4>Меню</h4>
            <div className={`${s.hamburgerBlock} ${s.hamburger} ${show && s.active}`}>
              <span className={`${s.bar} ${s.barOne}`} />
              <span className={`${s.bar} ${s.barTwo}`} />
              <span className={`${s.bar} ${s.barThree}`} />
              <span className={`${s.bar} ${s.barFore}`} />
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};
