export interface ModalsState {
  showMiniCart: boolean;
  showMainMenuDesctop: boolean;
}

export enum ModalsActionTypes {
  TOGGLE_MINI_CART = 'TOGGLE_MINI_CART',
  TOGGLE_MAIN_MENU_DESCTOP = 'TOGGLE_MAIN_MENU_DESCTOP',
}

interface ToggleMiniCartAction {
  type: ModalsActionTypes.TOGGLE_MINI_CART;
}

interface ToggleMainMenuDesctopAction {
  type: ModalsActionTypes.TOGGLE_MAIN_MENU_DESCTOP;
}

export type ModalsAction = ToggleMiniCartAction | ToggleMainMenuDesctopAction;
