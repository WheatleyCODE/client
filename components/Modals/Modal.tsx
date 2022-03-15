import { FC } from 'react';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { BackDrop } from './BackDrop';
import s from 'styles/components/Modals/Modal.module.scss';

export interface ModalProps {
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ onClose, children }) => {
  return (
    <BackDrop onClose={onClose}>
      <div onClick={(e) => e.stopPropagation()} className={s.mainBlock}>
        <div onClick={() => onClose()} className={s.closeButton}>
          <ClearRoundedIcon />
        </div>
        {children}
      </div>
    </BackDrop>
  );
};
