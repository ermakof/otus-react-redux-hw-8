import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';

import { ICellInfo } from '@src/modules/Cell/models';
import Cell from '@src/modules/Cell';
import store from '@src/store';

export const FieldContainer = styled.section`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: fit-content;
  width: fit-content;
`;

const GameField: FC = () => {
  const { state } = useContext(store);
  const { gameFieldData, gameFieldSize, selectedCells = {} } = state;
  const widthMinus1 = gameFieldSize - 1;
  const heightMinus1 = Math.floor(gameFieldData.length / gameFieldSize) - 1;

  if (!gameFieldSize) {
    return <p role="dataMessage">Нет данных!</p>;
  }

  return (
    <FieldContainer role="cellsGrid">
      {gameFieldData.map((item: ICellInfo, index: number) => {
        const y = Math.floor(index / gameFieldSize);
        const x = index % gameFieldSize;
        const isRight = x === widthMinus1;
        const isBottom = y === heightMinus1;
        const isLeft = x === 0;
        return (
          <Cell
            key={`${y}-${x}`}
            num={index}
            isFilled={item}
            isSelected={selectedCells[index]}
            isLeft={isLeft}
            isRight={isRight}
            isBottom={isBottom}
          />
        );
      })}
      <div style={{ clear: 'both' }} />
    </FieldContainer>
  );
};

export default GameField;
