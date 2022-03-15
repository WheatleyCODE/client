import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { userReducer } from './userReducer';
import { modalsReducer } from './modalsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  modals: modalsReducer,
});

export const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };

    if (state.count) nextState.count = state.count;
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;
export type NextThunckDispatch = ThunkDispatch<RootState, void, AnyAction>;
