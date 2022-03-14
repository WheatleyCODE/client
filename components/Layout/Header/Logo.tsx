import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Button } from '@mui/material';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import logo from 'public/logo.png';
import { pathRoutes } from 'types';
import s from 'styles/components/Layout/Header/Logo.module.scss';

export interface LogoProps {
  className?: string;
}
export const Logo: FC<LogoProps> = () => {
  return (
    <div className={s.mainBlock}>
      <div className={s.logoBlock}>
        <Link href={pathRoutes.HOME}>
          <Image className={s.logoImg} height={40} width={40} src={logo} alt={'fdsfsd'} />
        </Link>
        <Link href={pathRoutes.HOME}>
          <h2 className={s.logoText}>JETCOLOR</h2>
        </Link>
      </div>
      <div className={s.menuBlock}>
        <Button className={s.button} size="small" variant="outlined">
          <div className={s.buttonText}>
            <h4>Меню</h4>
            <DragHandleRoundedIcon />
          </div>
        </Button>
      </div>
    </div>
  );
};
