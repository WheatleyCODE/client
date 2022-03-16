import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { pathRoutes } from 'types';
import { useActions, useTypedSelector } from 'hooks';
import logo from 'public/logo.jpeg';
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
          <div>
            <div className={s.logoDesctop}>
              <Image className={s.logoImg} height={100} width={80} src={logo} alt={'logo'} />
            </div>
            <div className={s.logoMobile}>
              <Image className={s.logoImg} height={40} width={35} src={logo} alt={'logo'} />
            </div>
          </div>
        </Link>
        <div className={s.container}>
          <Link passHref href={pathRoutes.HOME}>
            <h2 className={s.logoText}>JETCOLOR</h2>
          </Link>
          <div className={s.menuBlock}>
            {!mobile && (
              <ButtonRC
                onClick={onClickHandler}
                style="rounded"
                color="orange"
                className={s.button}
              >
                <div className={s.buttonText}>
                  <h4>Меню</h4>
                  <Hamburger className={s.white} show={showMainMenuDesctop} />
                </div>
              </ButtonRC>
            )}
          </div>
        </div>
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
