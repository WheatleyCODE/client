import { FC } from 'react';
import { SwipeableDrawer } from '@mui/material';
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
      <div className={s.mainBlock} />
    </SwipeableDrawer>
  );
};
