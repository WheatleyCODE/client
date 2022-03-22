import { FC } from 'react';
import s from 'styles/components/Modals/BackDrop.module.scss';

interface BackDropProps {
  onClose: () => void;
}

export const BackDrop: FC<BackDropProps> = ({ onClose, children }) => (
  <div aria-hidden onClick={onClose} className={s.mainBlock}>
    {children}
  </div>
);
