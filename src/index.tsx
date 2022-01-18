import React, { StrictMode, useReducer } from 'react';
import ReactDOM from 'react-dom';

import App from '@src/App/index';
import Store from '@src/store';
import reducer from '@src/reducer';
import initialState from '@src/initialState';

const Root = () => {
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StrictMode>
      <Store.Provider value={{ dispatch, state }}>
        <App />
      </Store.Provider>
    </StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
