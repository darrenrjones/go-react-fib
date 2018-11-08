import mainReducer from '../reducers/reducer';
import expect from 'expect';

import { getFib } from '../actions/main';

describe('main reducer', () => {

  it('should return the initial state', () => {
    expect(mainReducer(undefined, {})).toEqual({fibSequence: []});
  })

  // it('handle getFib', () => {
  //   const initialState = {
  //     fibSequence: []  
  //   };
  //   const action = toggleLoginForm();
  //   const result = togglesReducer(initialState, action)
  //   expect(result.loginChoice.parent).toEqual(false);
  //   expect(result.loginChoice.child).toEqual(true);
  // });




});