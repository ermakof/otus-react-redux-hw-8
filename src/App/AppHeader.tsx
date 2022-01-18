import React, { FC, memo, useContext } from 'react';
import Panel from '@src/layout/Panel';
import styled from '@emotion/styled';
import UserForm from '@src/modules/UserForm';
import store from '@src/store';
import AuthForm, { IAuthData } from '@src/modules/AuthForm';
import { login, resetApp } from '@src/App/actions';

const Title = styled.p`
  font-size: 32px;
  margin: auto 20px auto 0;
`;

const AppHeader: FC = () => {
  const {
    dispatch,
    state: { userProfile },
  } = useContext(store);

  const handleSubmit = (authData: IAuthData) => {
    localStorage.setItem('lines:auth-data', JSON.stringify(authData));
    dispatch(login(authData));
    dispatch(resetApp());
  };

  return (
    <Panel role="topPanel">
      <Title>{`Lines ${userProfile?.login || ''}`}</Title>
      {userProfile ? <UserForm /> : <AuthForm onSubmit={handleSubmit} />}
    </Panel>
  );
};

export default memo(AppHeader);
