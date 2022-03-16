import { FC } from 'react';
import s from 'styles/components/UI/Hamburger.module.scss';

export interface HamburgerProps {
  className?: string;
  show: boolean;
  size?: 'large' | 'small';
}

export const Hamburger: FC<HamburgerProps> = ({ className, show, size = 'small' }) => {
  return (
    <div className={`${s.hamburgerBlock} ${s.hamburger} ${show && s.active} ${s[size]}`}>
      <span className={`${s.bar} ${s.barOne} ${s[size]} ${className}`} />
      <span className={`${s.bar} ${s.barTwo} ${s[size]} ${className}`} />
      <span className={`${s.bar} ${s.barThree} ${s[size]} ${className}`} />
      <span className={`${s.bar} ${s.barFore} ${s[size]} ${className}`} />
    </div>
  );
};
