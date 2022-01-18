import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import GameField from '@src/modules/GameField';
import { ComponentStory } from '@storybook/react';
import Store from '@src/store';

export default {
  component: GameField,
  decorators: [withKnobs],
  title: 'Modules/GameField',
};

const state = {
  gameLevel: '3',
  gameFieldSize: 5,
  gameFieldPercentFilled: 30,
  gameFieldData: [0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  selectedCells: {
    2: true,
    16: true,
  },
};

const dispatch = () => null;

const Template: ComponentStory<typeof GameField> = (args) => (
  <Store.Provider value={{ dispatch, state }}>
    <GameField {...args} />
  </Store.Provider>
);

export const Static = Template.bind({});

Static.args = {};
