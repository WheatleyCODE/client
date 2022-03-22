import type { NextPage } from 'next';
import { MainLayout, AuthForm } from 'components';
import s from 'styles/pages/Login.module.scss';

const Login: NextPage = () => {
  return (
    <MainLayout
      title="Вход на сайт"
      description="Статьи"
      keywords={['Вход', 'Вход на сайт', 'JETCOLOR', 'jetcolor']}
    >
      <div className={s.mainBlock}>
        <AuthForm showTitle isLogin />
      </div>
    </MainLayout>
  );
};

export default Login;
