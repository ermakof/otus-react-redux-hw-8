import React, { FC, memo, useContext } from 'react';
import Panel from '@src/layout/Panel';
import styled from '@emotion/styled';
import store from '@src/store';

const Message = styled.p`
  margin: auto 20px;
`;

const AppBottom: FC = () => {
  const { state } = useContext(store);
  const { gameFieldPercentFilled } = state;

  return (
    <Panel role="bottomPanel">
      <Message role="messageResult">Результат:</Message>
      <Message role="messagePercentFilled">{`Процент заполнения: ${gameFieldPercentFilled}`}</Message>
    </Panel>
  );
};

export default memo(AppBottom);
