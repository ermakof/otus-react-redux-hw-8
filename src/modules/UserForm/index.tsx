import React, { FC, memo, useContext } from 'react';
import Panel from '@src/layout/Panel';
import Button from '@src/components/Button';
import store from '@src/store';
import { clearGameField, logout, resetApp, setLevel } from '@src/App/actions';
import Select from '@src/components/Select';

const UserForm: FC = () => {
  const { dispatch } = useContext(store);

  const handleReset = () => {
    dispatch(resetApp());
  };

  const handleSelectLevel = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    dispatch(setLevel(value));
  };

  const handleLogout = () => {
    localStorage.removeItem('lines:auth-data');
    dispatch(logout());
    dispatch(clearGameField());
  };

  return (
    <Panel role="userForm">
      <Button onClick={handleReset} title="Reset" />
      <Select onSelect={handleSelectLevel} />
      <Button role="buttonLogout" onClick={handleLogout} title="Выйти" />
    </Panel>
  );
};

export default memo(UserForm);
