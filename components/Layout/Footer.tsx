import { FC } from 'react';
import Link from 'next/link';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Width, Phone, Email, Messengers } from 'components';
import { menu, copyMenu, socials } from 'consts';
import { StockBlock } from './StockBlock';
import { DesctopMenuList } from './DesctopMenuList';
import s from 'styles/components/Layout/Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={s.mainBlock}>
      <StockBlock title="Кешбек за отзыв" />
      <Width>
        <div className={s.links}>
          {menu.map(({ id, title, items }) => (
            <DesctopMenuList color="white" key={id} title={title} items={items} />
          ))}
        </div>
      </Width>
      <Width>
        <div className={s.messengers}>
          <div className={s.messengerBlock}>
            <Messengers className={s.messanger} height="50" width="50" />
            <Phone className={s.phone} />
            <Email className={s.email} />
          </div>
        </div>
      </Width>
      <Width>
        <div className={s.copy}>
          <div className={s.copyLinks}>
            {copyMenu.map(({ id, name, path }) => (
              <div key={id} className={s.link}>
                <Link href={path}>{name}</Link>
              </div>
            ))}
          </div>
          <div className={s.socials}>
            {socials.map(({ Icon, path, id }) => (
              <a className={s.socialLink} key={id} href={path}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </Width>
    </footer>
  );
};
