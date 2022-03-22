import { FC, useState } from 'react';
import { ButtonRC } from 'components/UI';
import { Checkbox, TextField } from '@mui/material';
import { LinkRC } from 'components/UI';
import { pathRoutes } from 'types';
import s from 'styles/components/Auth/AuthForm.module.scss';

interface AuthFormProps {
  isLogin?: boolean;
  showTitle?: boolean;
}

export const AuthForm: FC<AuthFormProps> = ({ isLogin = false, showTitle = false }) => {
  const [isRememberMe, setIsRememberMe] = useState(true);

  return (
    <form className={s.mainBlock}>
      {showTitle && <h2 className={s.title}>{isLogin ? ' Войти на сайт' : 'Регистрация'}</h2>}
      <TextField className={s.input} label="Почта" variant="outlined" />
      <TextField className={s.input} label="Пароль" variant="outlined" />

      {!isLogin && <TextField className={s.input} label="Повторите пароль" variant="outlined" />}

      <div className={s.forgot}>
        <label>
          <Checkbox
            onChange={() => setIsRememberMe((p) => !p)}
            value={isRememberMe}
            className={s.checkbox}
          />
          Запомнить меня
        </label>
        <div className={s.link}>
          <LinkRC href={pathRoutes.LOGIN}>Забыли пароль?</LinkRC>
        </div>
      </div>

      <ButtonRC className={s.button} style="default" color="primary">
        {isLogin ? 'Войти' : 'Регистрация'}
      </ButtonRC>
      <div className={s.hr} />
      <div className={s.text}>
        {isLogin ? (
          <div className={s.question}>Нет аккаунта?</div>
        ) : (
          <div className={s.question}>Есть аккаунт?</div>
        )}
        <div className={s.link}>
          {isLogin ? (
            <LinkRC href={pathRoutes.REGISTER}>Зарегистрироваться</LinkRC>
          ) : (
            <LinkRC href={pathRoutes.LOGIN}>Войти</LinkRC>
          )}
        </div>
      </div>
    </form>
  );
};
