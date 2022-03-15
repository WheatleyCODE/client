import { FC, useEffect } from 'react';
import { Email, Messengers, Phone } from 'components/UI';
import { Width } from 'components';
import { useActions } from 'hooks';
import { menu } from 'consts';
import { DesctopMenuList } from './DesctopMenuList';
import s from 'styles/components/Layout/Menus/MainMenuDesctop.module.scss';

export const MainMenuDesctop: FC = () => {
  const { toggleMainMeduDesctop } = useActions();
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div onClick={toggleMainMeduDesctop} className={s.back}>
      <div onClick={(e) => e.stopPropagation()} className={s.mainBlock}>
        <Width>
          <div className={s.line} />
        </Width>
        <Width>
          <div className={s.links}>
            {menu.map(({ id, title, items }) => (
              <DesctopMenuList color="black" key={id} title={title} items={items} />
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
      </div>
    </div>
  );
};
