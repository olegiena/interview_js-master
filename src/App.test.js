
import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

it('it shallow renders <BrowserRouter />', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.type()).toBe(BrowserRouter);
});
