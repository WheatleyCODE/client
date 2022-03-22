import { FC } from 'react';
import { useRouter } from 'next/router';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { AuthForm } from 'components/Auth/AuthForm';
import { pathRoutes } from 'types';
import s from 'styles/components/Modals/LoginModal.module.scss';

export const LoginModal: FC = () => {
  const router = useRouter();
  return (
    <div className={s.mainBlock}>
      <AuthForm showTitle isLogin />
      <div onClick={() => router.push(pathRoutes.LOGIN)} className={s.link}>
        На страницу входа <LoginRoundedIcon />
      </div>
    </div>
  );
};
