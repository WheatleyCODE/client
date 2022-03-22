import { FC } from 'react';
import { pathRoutes } from 'types';
import { useRouter } from 'next/router';
import s from 'styles/components/UI/LinkRC.module.scss';

export interface LinkProps {
  className?: string;
  href: pathRoutes;
}

export const LinkRC: FC<LinkProps> = ({ className, children, href }) => {
  const router = useRouter();

  const onClickHandler = (e: React.MouseEvent): void => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className={`${s.mainBlock} ${className}`}>
      <a onClick={onClickHandler} href={href}>
        {children}
      </a>
    </div>
  );
};
