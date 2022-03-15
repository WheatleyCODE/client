import { ModalsActionTypes, ModalsAction } from '@t';

export const toggleMiniCart = (): ModalsAction => ({
  type: ModalsActionTypes.TOGGLE_MINI_CART,
});

export const toggleMainMeduDesctop = (): ModalsAction => ({
  type: ModalsActionTypes.TOGGLE_MAIN_MENU_DESCTOP,
});
