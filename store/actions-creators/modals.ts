import { ModalsActionTypes, ModalsAction } from 'types';

export const toggleMiniCart = (): ModalsAction => ({
  type: ModalsActionTypes.TOGGLE_MINI_CART,
});

export const toggleMainMenuDesctop = (): ModalsAction => ({
  type: ModalsActionTypes.TOGGLE_MAIN_MENU_DESCTOP,
});

export const toggleMainMenuMobile = (): ModalsAction => ({
  type: ModalsActionTypes.TOGGLE_MAIN_MENU_MOBILE,
});

export const toggleLoginModalDesctop = (): ModalsAction => ({
  type: ModalsActionTypes.TOGGLE_LOGIN_MODAL,
});

export const toggleSearchModalDesctop = (): ModalsAction => ({
  type: ModalsActionTypes.TOGGLE_SEARCH_MODAL,
});
