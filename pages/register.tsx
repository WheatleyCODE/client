import type { NextPage } from 'next';
import Image from 'next/image';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CreditScoreRoundedIcon from '@mui/icons-material/CreditScoreRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import PercentRoundedIcon from '@mui/icons-material/PercentRounded';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import { MainLayout, AuthForm, LinkRC } from 'components';
import { pathRoutes } from 'types';
import logo from 'public/logo.png';
import s from 'styles/pages/Register.module.scss';

const Register: NextPage = () => {
  return (
    <MainLayout
      showFooter={false}
      showHeader={false}
      showSubHeader={false}
      title="Регистрация"
      description="Регистрация"
      keywords={['Регистрация', 'JETCOLOR', 'jetcolor']}
    >
      <div className={s.mainBlock}>
        <div className={s.leftBlock}>
          <div className={s.container}>
            <div className={s.logo}>
              <Image width={80} height={100} src={logo} />
            </div>
            <h2>JETCOLOR</h2>
            <ul className={s.list}>
              <li>
                <CreditScoreRoundedIcon />
                <span>Статус заказа</span>
              </li>
              <li>
                <CommentRoundedIcon />
                <span>Коментарии</span>
              </li>
              <li>
                <HistoryRoundedIcon />
                <span>История</span>
              </li>
              <li>
                <PercentRoundedIcon />
                <span>Скидки</span>
              </li>
              <li>
                <WorkOutlineRoundedIcon />
                <span>Партнерство</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.rightBlock}>
          <LinkRC className={s.link} href={pathRoutes.HOME}>
            <HomeOutlinedIcon /> На главную
          </LinkRC>
          <div className={s.form}>
            <AuthForm showTitle />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
