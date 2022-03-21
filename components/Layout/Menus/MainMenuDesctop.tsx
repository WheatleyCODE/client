import { FC, useEffect, useState } from 'react';
import { Email, Messengers, Phone } from 'components/UI';
import { Width } from 'components';
import { useActions } from 'hooks';
import { desctopMenuItems } from 'consts';
import { DesctopMenuList } from './DesctopMenuList';
import s from 'styles/components/Layout/Menus/MainMenuDesctop.module.scss';

export const MainMenuDesctop: FC = () => {
  const { toggleMainMenuDesctop } = useActions();
  const [className, setClassName] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';

    const { platform } = window.navigator;

    if (platform === 'Win32') {
      document.body.style.paddingRight = '17px';
      setClassName(s.padding);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '0px';
      setClassName('');
    };
  }, []);

  return (
    <div onClick={toggleMainMenuDesctop} className={s.back}>
      <div onClick={(e) => e.stopPropagation()} className={`${s.mainBlock} ${className}`}>
        <Width>
          <div className={s.line} />
        </Width>
        <Width>
          <div className={s.links}>
            {desctopMenuItems.map(({ id, title, items }) => (
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
