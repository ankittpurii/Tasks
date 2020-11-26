import {
    LOADING_STATUS,
  } from '../actions/types';
  
  const INITIAL_STATE = {
    loadingStatus: false
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LOADING_STATUS:
        return { ...state, loadingStatus: action.payload };
      default:
        return state;
    }
  };
  
  
  