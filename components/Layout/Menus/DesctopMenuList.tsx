import { FC } from 'react';
import { DesctopMenuItem } from './DesctopMenuItem';
import { MenuItem } from 'types';
import s from 'styles/components/Layout/Menus/DesctopMenuList.module.scss';

export interface DesctopMenuListProps {
  title: string;
  color: 'black' | 'white';
  items: MenuItem[];
}

export const DesctopMenuList: FC<DesctopMenuListProps> = ({ title, color, items }) => {
  return (
    <div className={`${s.mainBlock} ${s[color]}`}>
      <h3 className={s.title}>{title}</h3>
      <div>
        {items.map((item) => (
          <DesctopMenuItem color={color} key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
