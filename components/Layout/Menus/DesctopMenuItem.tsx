import { FC } from 'react';
import { useRouter } from 'next/router';
import { useTypedSelector, useActions } from 'hooks';
import { MenuItem } from 'types';
import s from 'styles/components/Layout/Menus/DesctopMenuItem.module.scss';

export interface DesctopMenuItemProps {
  item: MenuItem;
  color: 'black' | 'white';
}

export const DesctopMenuItem: FC<DesctopMenuItemProps> = ({ item, color }) => {
  const { showMainMenuDesctop } = useTypedSelector((state) => state.modals);
  const { toggleMainMenuDesctop } = useActions();
  const { push } = useRouter();

  const { Icon } = item;

  const onClickhandler = () => {
    if (showMainMenuDesctop) toggleMainMenuDesctop();

    push(item.path);
  };

  return (
    <div onClick={onClickhandler} className={`${s.mainBlock} ${s[color]}`}>
      <a>
        <div className={Icon ? `${s.link} ${s.icon}` : s.links}>
          {Icon && <Icon />}
          {item.name}
        </div>
      </a>
    </div>
  );
};
