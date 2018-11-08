import { GET_FIB } from "../actions/main";

const initialState = {
  fibSequence: []
}

const fib = num => {
  for(var fibArray = [0,1], i=0,j=1,k=0,x; k<num-2;i=j,j=x,k++ ){
      // if(isFinite(x)){
      //   return fibArray;
      // }
      x=i+j;
      fibArray.push(x);
      console.log(x);
      
  }
  return fibArray;
}

export default (state = initialState, action) => {

  if (action.type === GET_FIB) {
    return {
      ...state,
      fibSequence: fib(action.num)
    }
  }

  return state;
}

