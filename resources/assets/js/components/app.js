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


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
    palette: {
      primary: { main: '#558175' },
      secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    },
  });


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

if (document.getElementById('root')) {
    ReactDOM.render(

        <Provider store={createStoreWithMiddleware(reducers)}>

            <React.Fragment>

                <CssBaseline />

                <MuiThemeProvider theme={theme}>

                    <BrowserRouter>
                        <div>
                            <Switch>
                                <Route path="/hello" component={Snippit} />
                                <Route path="/" component={Login} />
                            </Switch>
                        </div>
                    </BrowserRouter>

                </MuiThemeProvider>

            </React.Fragment>


        </Provider>


    , document.getElementById('root'));
}
