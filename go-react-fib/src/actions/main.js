// import axios from "axios";

export const GET_FIB = 'GET_FIB';
export const getFib = (num) => ({
  type: GET_FIB,
  num
});