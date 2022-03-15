import { FC } from 'react';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import { useRouter } from 'next/router';
import { Width } from 'components';
import { Logo } from './Logo';
import { Phone, Messengers, ButtonRC } from 'components/UI';
import s from 'styles/components/Layout/Header/Header.module.scss';

export const Header: FC = () => {
  const router = useRouter();

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
              <ButtonRC color="white" style="rounded" className={s.button}>
                <h4>Как узнать код краски автомобиля?</h4> <DirectionsCarOutlinedIcon />
              </ButtonRC>
            </div>
            <div className={s.buttonContainer}>
              <ButtonRC
                onClick={() =>
                  router.push({
                    query: { search: true },
                  })
                }
                color="white"
                style="rounded"
                className={s.button}
              >
                <h4>Найти код краски</h4> <SearchRoundedIcon />
              </ButtonRC>
              <ButtonRC
                onClick={() =>
                  router.push({
                    query: { login: true },
                  })
                }
                color="white"
                style="rounded"
                className={s.button}
              >
                <h4>Войти</h4> <LoginRoundedIcon />
              </ButtonRC>
            </div>
          </div>
        </div>
      </Width>
    </header>
  );
};
