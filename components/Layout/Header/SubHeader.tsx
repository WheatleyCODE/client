import { FC, useEffect } from 'react';
import { Width } from 'components';
import s from 'styles/components/Layout/SubHeader.module.scss';

export const SubHeader: FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.target.toggleAttribute('stuck', e.intersectionRatio < 1),
      { threshold: [1] }
    );

    const element = document.querySelector(`.${s.mainBlock}`);

    if (element !== null) {
      observer.observe(element);
    }
  }, []);

  return (
    <div className={s.mainBlock}>
      <Width>
        <div className={s.subHeader}>
          <nav className={s.menu}></nav>
          <div className={s.cart}></div>
        </div>
      </Width>
    </div>
  );
};
