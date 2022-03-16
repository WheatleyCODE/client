import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { pathRoutes } from 'types';
import { useActions, useTypedSelector } from 'hooks';
import logo from 'public/logo.png';
import { MainMenuDesctop } from '../Menus';
import { ButtonRC, Hamburger } from 'components/UI';
import s from 'styles/components/Layout/Header/Logo.module.scss';

export interface LogoProps {
  className?: string;
  mobile?: boolean;
}
export const Logo: FC<LogoProps> = ({ className, mobile = false }) => {
  const { toggleMainMenuDesctop } = useActions();
  const { showMainMenuDesctop } = useTypedSelector((state) => state.modals);

  const onClickHandler = () => {
    toggleMainMenuDesctop();
  };

  return (
    <div className={s.mainBlock}>
      <div className={s.logoBlock}>
        <Link passHref href={pathRoutes.HOME}>
          <Image className={s.logoImg} height={36} width={36} src={logo} alt={'logo'} />
        </Link>
        <Link passHref href={pathRoutes.HOME}>
          <h2 className={s.logoText}>JETCOLOR</h2>
        </Link>
      </div>
      <div className={s.menuBlock}>
        {!mobile && (
          <ButtonRC onClick={onClickHandler} style="rounded" color="orange" className={s.button}>
            <div className={s.buttonText}>
              <h4>Меню</h4>
              <Hamburger className={s.white} show={showMainMenuDesctop} />
            </div>
          </ButtonRC>
        )}
      </div>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={showMainMenuDesctop}
        timeout={200}
        classNames="showModal"
      >
        <MainMenuDesctop />
      </CSSTransition>
    </div>
  );
};
