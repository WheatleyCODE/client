import { FC } from 'react';
import s from 'styles/components/Container.module.scss';

export const Container: FC = ({ children }) => {
  return <div className={s.mainBlock}>{children}</div>;
};
