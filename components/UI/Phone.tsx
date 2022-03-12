import { FC } from 'react';
import { phone } from 'consts';
import { transormPhone } from 'utils';
import s from 'styles/components/UI/Phone.module.scss';

export interface PhoneProps {
  className?: string;
}

export const Phone: FC<PhoneProps> = ({ className }) => {
  return (
    <div className={s.phone}>
      <a className={className} href="/">
        {transormPhone(phone)}
      </a>
    </div>
  );
};
