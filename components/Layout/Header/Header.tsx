import { FC } from 'react';
import { Width } from 'components';
import { Logo } from './Logo';
import { Phone, Messengers } from 'components/UI';
import { Button } from '@mui/material';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import s from 'styles/components/Layout/Header/Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={s.mainBlock}>
      <Width>
        <div className={s.header}>
          <div className={s.logoBlock}>
            <Logo />
          </div>
          {/* // ! Переделать дизайн */}
          {/* <div className={s.socialsBlock}>
            <Phone className={s.phone} />
            <div className={s.messengers}>
              <Messengers className={s.messanger} height="38" width="38" />
            </div>
          </div> */}
          <div className={s.buttonsBlock}>
            <div className={s.buttonContainer}>
              <Button className={s.button} size="small" variant="outlined">
                <h4>Как узнать код краски автомобиля?</h4> <DirectionsCarOutlinedIcon />
              </Button>
            </div>
            <div className={s.buttonContainer}>
              <Button className={s.button} size="small" variant="outlined">
                <h4>Найти код краски</h4> <SearchRoundedIcon />
              </Button>
              <Button className={s.button} size="small" variant="outlined">
                <h4>Войти</h4> <LoginRoundedIcon />
              </Button>
            </div>
          </div>
        </div>
      </Width>
    </header>
  );
};
