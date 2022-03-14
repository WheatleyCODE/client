import { FC } from 'react';
import Link from 'next/link';
import { MenuItem } from 'types';
import s from 'styles/components/Layout/Menus/DesctopMenuItem.module.scss';

export interface DesctopMenuItemProps {
  item: MenuItem;
}

export const DesctopMenuItem: FC<DesctopMenuItemProps> = ({ item }) => {
  const { Icon } = item;
  return (
    <div className={s.mainBlock}>
      <Link passHref href={item.path}>
        <div className={s.link}>
          {Icon && <Icon />}
          {item.name}
        </div>
      </Link>
    </div>
  );
};
