import { ModalsState, ModalsActionTypes, ModalsAction } from '@t';

const initialState: ModalsState = {
  showMiniCart: false,
};

export const modalsReducer = (state = initialState, action: ModalsAction): ModalsState => {
  switch (action.type) {
    case ModalsActionTypes.TOGGLE_MINI_CART:
      return {
        ...state,
        showMiniCart: !state.showMiniCart,
      };

    default:
      return state;
  }
};
