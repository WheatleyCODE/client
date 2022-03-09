import { FC } from 'react';
import Link from 'next/link';
import { MenuItem } from 'types';
import s from 'styles/components/Layout/DesctopMenuItem.module.scss';

export interface DesctopMenuItemProps {
  item: MenuItem;
}

export const DesctopMenuItem: FC<DesctopMenuItemProps> = ({ item }) => {
  return (
    <div className={s.mainBlock}>
      <Link href={item.path}>
        <div>
          {item.icon && <i className={`${item.icon} ${s.icon}`} />}
          {item.name}
        </div>
      </Link>
    </div>
  );
};
