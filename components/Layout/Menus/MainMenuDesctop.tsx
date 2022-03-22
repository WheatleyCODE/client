import { FC, useEffect, useState } from 'react';
import { useActions } from 'hooks';
import { Email, Messengers, Phone } from 'components/UI';
import { DesctopMenuList } from './DesctopMenuList';
import { Width } from 'components';
import { desctopMenuItems } from 'consts';
import { disableScroll } from 'utils';
import s from 'styles/components/Layout/Menus/MainMenuDesctop.module.scss';

export const MainMenuDesctop: FC = () => {
  const { toggleMainMenuDesctop } = useActions();
  const [className, setClassName] = useState('');

  useEffect(() => {
    const enableScroll = disableScroll({
      onWinHandler: () => {
        setClassName(s.padding);
      },
      onWinReturnHandler: () => {
        setClassName('');
      },
    });

    return enableScroll;
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
