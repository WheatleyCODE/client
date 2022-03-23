import { FC } from 'react';
import { SwipeableDrawer } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useActions } from 'hooks';
import s from 'styles/components/Modals/MiniCart.module.scss';

export interface MiniCartProps {
  show: boolean;
}

export const MiniCart: FC<MiniCartProps> = ({ show }) => {
  const { toggleMiniCart } = useActions();

  return (
    <SwipeableDrawer
      disableBackdropTransition
      anchor={'right'}
      open={show}
      onClose={() => toggleMiniCart()}
      onOpen={() => toggleMiniCart()}
    >
      <div onClick={() => toggleMiniCart()} className={s.mainBlock}>
        <div className={s.closeButton}>
          <div className={s.icon}>
            <CloseRoundedIcon />
          </div>
        </div>
        <div onClick={(e) => e.stopPropagation()} className={s.cart}></div>
      </div>
    </SwipeableDrawer>
  );
};
