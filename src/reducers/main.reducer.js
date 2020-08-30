import {combineReducers} from 'redux';
import listCardReducer from './list-card.reducer';

let mainReducer = combineReducers({
    listCard: listCardReducer
});

export default mainReducer;