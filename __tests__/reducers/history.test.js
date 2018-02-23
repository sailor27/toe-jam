import defaultState from '../../../constants/DefaultState.js';
import history from './../../reducers/history.js';
// __tests__/reducers/history.test.js;
// src/constants/DefaultState.js;
describe('history', () => {

  test('Should return default state if no action is taken', () => {
    expect(history(defaultState, { type:null })).toEqual(defaultState);
  });



});
