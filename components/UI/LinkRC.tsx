import { FC } from 'react';
import { useRouter } from 'next/router';
import { pathRoutes } from 'types';
import s from 'styles/components/UI/LinkRC.module.scss';

export interface LinkProps {
  className?: string;
  href: pathRoutes;
  onClick?: (e?: React.MouseEvent) => void;
}

export const LinkRC: FC<LinkProps> = ({ className, children, href, onClick }) => {
  const router = useRouter();

  const onClickHandler = (e: React.MouseEvent): void => {
    e.preventDefault();
    router.push(href);

    if (onClick) onClick(e);
  };

  return (
    <div className={`${s.mainBlock} ${className}`}>
      <a onClick={onClickHandler} href={href}>
        {children}
      </a>
    </div>
  );
};
