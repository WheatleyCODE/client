import { FC } from 'react';
import s from 'styles/components/Width.module.scss';

export const Width: FC = ({ children }) => {
  return <div className={s.width}>{children}</div>;
};
