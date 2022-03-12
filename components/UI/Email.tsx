import { FC } from 'react';
import { email } from 'consts';
import s from 'styles/components/UI/Email.module.scss';

export interface EmailProps {
  className?: string;
}

export const Email: FC<EmailProps> = ({ className }) => {
  return (
    <div className={s.email}>
      <a className={className} href="/">
        {email}
      </a>
    </div>
  );
};
