export interface ModalsState {
  showMiniCart: boolean;
  showMainMenuDesctop: boolean;
  showMainMenuMobile: boolean;
  showLoginModal: boolean;
  showSearchModal: boolean;
}

export enum ModalsActionTypes {
  TOGGLE_MINI_CART = 'TOGGLE_MINI_CART',
  TOGGLE_MAIN_MENU_DESCTOP = 'TOGGLE_MAIN_MENU_DESCTOP',
  TOGGLE_MAIN_MENU_MOBILE = 'TOGGLE_MAIN_MENU_MOBILE',
  TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL',
  TOGGLE_SEARCH_MODAL = 'TOGGLE_SEARCH_MODAL',
}

interface ToggleLoginModalAction {
  type: ModalsActionTypes.TOGGLE_LOGIN_MODAL;
}

interface ToggleSearchModalAction {
  type: ModalsActionTypes.TOGGLE_SEARCH_MODAL;
}

interface ToggleMiniCartAction {
  type: ModalsActionTypes.TOGGLE_MINI_CART;
}

interface ToggleMainMenuDesctopAction {
  type: ModalsActionTypes.TOGGLE_MAIN_MENU_DESCTOP;
}

interface ToggleMainMenuMobileAction {
  type: ModalsActionTypes.TOGGLE_MAIN_MENU_MOBILE;
}

export type ModalsAction =
  | ToggleMiniCartAction
  | ToggleMainMenuDesctopAction
  | ToggleLoginModalAction
  | ToggleSearchModalAction
  | ToggleMainMenuMobileAction;
