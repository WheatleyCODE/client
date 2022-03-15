import { FC } from 'react';
import Link from 'next/link';
import { MenuItem } from 'types';
import s from 'styles/components/Layout/Menus/DesctopMenuItem.module.scss';

export interface DesctopMenuItemProps {
  item: MenuItem;
  color: 'black' | 'white';
}

export const DesctopMenuItem: FC<DesctopMenuItemProps> = ({ item, color }) => {
  const { Icon } = item;
  return (
    <div className={`${s.mainBlock} ${s[color]}`}>
      <Link passHref href={item.path}>
        <div className={Icon ? `${s.link} ${s.icon}` : s.links}>
          {Icon && <Icon />}
          {item.name}
        </div>
      </Link>
    </div>
  );
};
