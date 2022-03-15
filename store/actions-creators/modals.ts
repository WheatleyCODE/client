import { ModalsActionTypes, ModalsAction } from '@t';

export const toggleMiniCart = (): ModalsAction => ({
  type: ModalsActionTypes.TOGGLE_MINI_CART,
});
