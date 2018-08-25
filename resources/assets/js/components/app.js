import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' ;
import { createStore , applyMiddleware } from 'redux' ;
import reducers from '../reducers';
import { BrowserRouter , Route , Switch } from 'react-router-dom' ;
import thunk from 'redux-thunk';
import Login from './welcome/welcome'
import CssBaseline from '@material-ui/core/CssBaseline';
import Snippit from './snippit' ;

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

if (document.getElementById('root')) {
    ReactDOM.render(

        <Provider store={createStoreWithMiddleware(reducers)}>

            <React.Fragment>

                <CssBaseline />

                <BrowserRouter>

                    <div>
                        <Switch>
                            <Route path="/hello" component={Snippit} />
                            <Route path="/" component={Login} />
                        </Switch>
                    </div>
                </BrowserRouter>

            </React.Fragment>


        </Provider>


    , document.getElementById('root'));
}
