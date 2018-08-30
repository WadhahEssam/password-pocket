import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form' ;
import pageReducer from './page_reducer' ;
import { reducer as FormReducer } from 'redux-form' ;
import UserDataReducer from './user_data_reducer';
import IsAddPasswordPanelOpened from './is_add_password_panel_open' ;
import PasswordsReducer from './passwords_reducer' ;
import SnackBarReducer from './snackbar_reducer'

export default combineReducers({
    page : pageReducer ,
    userData : UserDataReducer ,
    isAddPasswordPanelOpened : IsAddPasswordPanelOpened ,
    passwords : PasswordsReducer ,
    snackBar : SnackBarReducer ,
    form : formReducer
});

