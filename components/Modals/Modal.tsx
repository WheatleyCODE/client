import { FC, useEffect } from 'react';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { BackDrop } from './BackDrop';
import s from 'styles/components/Modals/Modal.module.scss';

export interface ModalProps {
  onClose: () => void;
  scrollDiseble?: boolean;
}

export const Modal: FC<ModalProps> = ({ onClose, children, scrollDiseble = false }) => {
  useEffect(() => {
    if (!scrollDiseble) return;

    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';

    const { platform } = window.navigator;

    if (platform === 'Win32') {
      document.body.style.paddingRight = '17px';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '0px';
    };
  }, []);

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
