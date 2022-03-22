import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { BackDrop } from './BackDrop';
import { pathRoutes } from 'types';
import { disableScroll } from 'utils';
import s from 'styles/components/Modals/Modal.module.scss';

export interface ModalProps {
  onClose: () => void;
  scrollDisable?: boolean;
  bottomLink: {
    title: string;
    path: pathRoutes;
  };
}

export const Modal: FC<ModalProps> = ({ onClose, children, scrollDisable = false, bottomLink }) => {
  const router = useRouter();

  const onClickHandler = () => {
    onClose();
    router.push(bottomLink.path);
  };

  useEffect(() => {
    if (!scrollDisable) return;

    const enableScroll = disableScroll();

    return enableScroll;
  }, []);

  return (
    <BackDrop onClose={onClose}>
      <div onClick={(e) => e.stopPropagation()} className={s.mainBlock}>
        <div onClick={() => onClose()} className={s.closeButton}>
          <ClearRoundedIcon />
        </div>
        {children}
        <div onClick={onClickHandler} className={s.link}>
          {bottomLink.title} <LoginRoundedIcon />
        </div>
      </div>
    </BackDrop>
  );
};
