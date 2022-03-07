import { FC, useEffect, useRef } from 'react';
import s from 'styles/components/Layout/SubHeader.module.scss';
import { Width } from 'components';

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
        <h1>SubHeader</h1>
      </Width>
    </div>
  );
};
