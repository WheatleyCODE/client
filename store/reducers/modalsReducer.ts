import { ModalsState, ModalsActionTypes, ModalsAction } from '@t';

const initialState: ModalsState = {
  showMiniCart: false,
  showMainMenuDesctop: false,
};

export const modalsReducer = (state = initialState, action: ModalsAction): ModalsState => {
  switch (action.type) {
    case ModalsActionTypes.TOGGLE_MINI_CART:
      return {
        ...state,
        showMiniCart: !state.showMiniCart,
      };

    case ModalsActionTypes.TOGGLE_MAIN_MENU_DESCTOP:
      return {
        ...state,
        showMainMenuDesctop: !state.showMainMenuDesctop,
      };

    default:
      return state;
  }
};
