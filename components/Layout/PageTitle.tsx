import { FC } from 'react';
import { Width } from 'components';
import s from 'styles/components/Layout/PageTitle.module.scss';

interface PageTitleProps {
  title: string;
}

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <div className={s.mainBlock}>
      <Width>
        <h1 className={s.pageTitle}>{title}</h1>
      </Width>
    </div>
  );
};
