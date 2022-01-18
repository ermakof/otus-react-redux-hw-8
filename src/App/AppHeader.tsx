import React, { FC, memo, useContext } from 'react';
import Panel from '@src/layout/Panel';
import styled from '@emotion/styled';
import Button from '@src/components/Button';
import store from '@src/store';
import { resetApp, setLevel } from '@src/App/actions';
import Select from '@src/components/Select';

const Title = styled.p`
  margin: auto 20px;
`;

const AppHeader: FC = () => {
  const { dispatch } = useContext(store);

  const handleReset = () => {
    dispatch(resetApp());
  };

  const handleSelectLevel = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    dispatch(setLevel(value));
  };

  return (
    <Panel role="topPanel">
      <Title>Lines</Title>
      <Button onClick={handleReset} title="Reset" />
      <Select onSelect={handleSelectLevel} />
    </Panel>
  );
};

export default memo(AppHeader);
