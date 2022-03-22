import { FC } from 'react';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import { Logo } from './Logo';
import { useRouter } from 'next/router';
import { Width } from 'components';
import { useActions, useTypedSelector } from 'hooks';
import { ButtonRC, Hamburger } from 'components/UI';
import { IconButton } from '@mui/material';
import s from 'styles/components/Layout/Header/Header.module.scss';

export const Header: FC = () => {
  const router = useRouter();
  const { toggleMainMenuMobile } = useActions();
  const { showMainMenuMobile } = useTypedSelector((state) => state.modals);

  const onClickLogin = () => {
    router.push({
      query: { login: true },
    });
  };

  const onClickSearch = () => {
    router.push({
      query: { search: true },
    });
  };

  return (
    <header className={showMainMenuMobile ? `${s.mainBlock} ${s.black}` : s.mainBlock}>
      <Width>
        <div className={s.header}>
          <div className={s.logoBlock}>
            <Logo />
          </div>
          <div className={s.logoBlockMobile}>
            <Logo mobile />
          </div>
          <div className={s.buttonsBlock}>
            <div className={s.buttonContainer}>
              <ButtonRC color="white" style="rounded" className={s.button}>
                <h4>Как узнать код краски автомобиля?</h4> <DirectionsCarOutlinedIcon />
              </ButtonRC>
            </div>
            <div className={s.buttonContainer}>
              <ButtonRC onClick={onClickSearch} color="white" style="rounded" className={s.button}>
                <h4>Найти код краски</h4> <SearchRoundedIcon />
              </ButtonRC>
              <ButtonRC onClick={onClickLogin} color="white" style="rounded" className={s.button}>
                <h4>Войти</h4> <LoginRoundedIcon />
              </ButtonRC>
            </div>
          </div>
          <div className={s.buttonContainerMobile}>
            <IconButton
              className={s.button}
              onClick={() => toggleMainMenuMobile()}
              aria-label="menu"
            >
              <Hamburger className={s.hamburger} size="large" show={showMainMenuMobile} />
            </IconButton>
          </div>
        </div>
      </Width>
    </header>
  );
};
