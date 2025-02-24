import {

} from '../actions/types';
import { SET_TASKS } from '../actions/types';


const INITIAL_STATE = {
    tasks: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_TASKS:
            return { ...state, tasks: action.payload }
        default:
            return state;
    }
};