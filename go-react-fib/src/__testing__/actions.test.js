import * as actions from '../actions/main';


describe('actions', () => {

  it('should have a type of GET_FIB', () => {
    const num = 13;    
    const expectedAction = {
      type: 'GET_FIB',
      num
    }
    const result = actions.getFib(num);
    expect(result).toEqual(expectedAction);
  });
  
});