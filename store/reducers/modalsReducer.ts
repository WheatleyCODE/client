import { ModalsState, ModalsActionTypes, ModalsAction } from 'types';

const initialState: ModalsState = {
  showMiniCart: false,
  showMainMenuDesctop: false,
  showMainMenuMobile: false,
  showLoginModal: false,
  showSearchModal: false,
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

    case ModalsActionTypes.TOGGLE_MAIN_MENU_MOBILE:
      return {
        ...state,
        showMainMenuMobile: !state.showMainMenuMobile,
      };

    case ModalsActionTypes.TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        showLoginModal: !state.showLoginModal,
      };

    case ModalsActionTypes.TOGGLE_SEARCH_MODAL:
      return {
        ...state,
        showSearchModal: !state.showSearchModal,
      };

    default:
      return state;
  }
};
