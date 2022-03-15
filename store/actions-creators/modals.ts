import { ModalsActionTypes, ModalsAction } from '@t';

export const toggleMiniCart = (): ModalsAction => ({
  type: ModalsActionTypes.TOGGLE_MINI_CART,
});

export const toggleMainMenuDesctop = (): ModalsAction => ({
  type: ModalsActionTypes.TOGGLE_MAIN_MENU_DESCTOP,
});

export const toggleLoginModalDesctop = (): ModalsAction => ({
  type: ModalsActionTypes.TOGGLE_LOGIN_MODAL,
});

export const toggleSearchModalDesctop = (): ModalsAction => ({
  type: ModalsActionTypes.TOGGLE_SEARCH_MODAL,
});
