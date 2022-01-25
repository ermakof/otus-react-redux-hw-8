import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import store from '@src/store';
import { IUserProfile } from '@src/model';
import { loginApp, resetApp } from '@src/App/actions';

const useLogin = () => {
  const { dispatch } = useContext(store);
  let navigate = useNavigate();

  return (userProfile: IUserProfile) => {
    dispatch(loginApp(userProfile));
    dispatch(resetApp());
    navigate('/', { replace: true });
  };
};

export default useLogin;
