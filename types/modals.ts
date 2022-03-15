export interface ModalsState {
  showMiniCart: boolean;
}

export enum ModalsActionTypes {
  TOGGLE_MINI_CART = 'TOGGLE_MINI_CART',
}

interface ToggleMiniCartAction {
  type: ModalsActionTypes.TOGGLE_MINI_CART;
}

export type ModalsAction = ToggleMiniCartAction;
