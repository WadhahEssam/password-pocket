import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form' ;
import TestReducer from './test_reducer' ;

export default combineReducers({
    test : TestReducer
});

