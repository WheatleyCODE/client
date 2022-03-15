import { useActions } from 'hooks';
import { SwipeableDrawer } from '@mui/material';
import { FC } from 'react';
import s from 'styles/components/Layout/MiniCart.module.scss';

export interface MiniCartProps {
  show: boolean;
}

export const MiniCart: FC<MiniCartProps> = ({ show }) => {
  const { toggleMiniCart } = useActions();

  return (
    <SwipeableDrawer
      anchor={'right'}
      open={show}
      onClose={() => toggleMiniCart()}
      onOpen={() => toggleMiniCart()}
    >
      <div className={s.mainBlock} />
    </SwipeableDrawer>
  );
};
