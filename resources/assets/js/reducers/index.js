import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form' ;
import TestReducer from './test_reducer' ;
import WelcomePage from './welcome_page_reducer' ;
import { reducer as FormReducer } from 'redux-form' ;

export default combineReducers({
    test : TestReducer ,
    welcomePage : WelcomePage ,
    form : formReducer
});

