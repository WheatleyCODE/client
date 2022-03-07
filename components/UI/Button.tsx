import { FC } from 'react';
import s from 'styles/components/UI/Button.module.scss';

export interface ButtonProps {
  icon?: string | false;
}

export const Button: FC<ButtonProps> = (props) => {
  const { icon = false, children } = props;

  return (
    <button className={s.button}>
      <div>{children}</div>
      {icon && <i className={icon} />}
    </button>
  );
};
