import { FC } from 'react';
import { Width } from 'components';
import { menu } from 'consts';
import { StockBlock } from './StockBlock';
import { DesctopMenuList } from './DesctopMenuList';
import s from 'styles/components/Layout/Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={s.mainBlock}>
      <StockBlock title="Акция! Купи дешевле или дророже!" />
      <Width>
        <div className={s.footer}>
          <div className={s.linksBlock}>
            {menu.map(({ title, id, items }) => (
              <DesctopMenuList items={items} color="white" title={title} key={id} />
            ))}
          </div>

          <div className={s.socialsBlock}>
            <h1>dsdsds</h1>
          </div>

          <div className={s.copyBlock}>
            <h1>dsdsds</h1>
          </div>
        </div>
      </Width>
    </footer>
  );
};
