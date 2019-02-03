import React from 'react';
import ReactDOM from 'react-dom';
import Dragons from './Dragons';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dragons />, div);
  ReactDOM.unmountComponentAtNode(div);
});