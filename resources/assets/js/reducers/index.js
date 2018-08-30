import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form' ;
import pageReducer from './page_reducer' ;
import { reducer as FormReducer } from 'redux-form' ;
import UserDataReducer from './user_data_reducer';
import IsAddPasswordPanelOpened from './is_add_password_panel_open' ;

export default combineReducers({
    page : pageReducer ,
    userData : UserDataReducer ,
    isAddPasswordPanelOpened : IsAddPasswordPanelOpened ,
    form : formReducer
});

