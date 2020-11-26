
// Reducers
import LoadingReducer from './LoadingReducer'
import TasksReducer from './TasksReducer'
import { combineReducers } from 'redux';

export default combineReducers({
    LoadingReducer: LoadingReducer,
    TasksReducer: TasksReducer,
})