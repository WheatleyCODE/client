import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '@actions/user';
import * as modalsActionCreators from '@actions/modals';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...userActionCreators,
      ...modalsActionCreators,
    },
    dispatch
  );
};
