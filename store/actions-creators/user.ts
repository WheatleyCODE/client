import axios from 'axios';
import { Dispatch } from 'react';
import { UserAction, UserActionTypes } from '@t';

export const fetchUsersAC = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    console.log('work');
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/3');

      // setTimeout(() => {
      //   dispatch({
      //     type: UserActionTypes.FETCH_USERS_SUCCES,
      //     payload: response.data,
      //   });
      // }, 2000);
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCES,
        payload: response.data,
      });
    } catch (e: any) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'Произошла ошибка при загрузке пользователей',
      });
    }
  };
};
