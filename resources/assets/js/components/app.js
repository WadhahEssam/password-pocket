import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' ;
import { createStore , applyMiddleware } from 'redux' ;
import reducers from '../reducers';
import { BrowserRouter , Route , Switch , Link } from 'react-router-dom' ;
import thunk from 'redux-thunk';


export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">
                                I'm an example component!
                                {console.log(this.props.match)}
                                <Link to="/hello" >move</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

if (document.getElementById('root')) {
    ReactDOM.render(

        <Provider store={createStoreWithMiddleware(reducers)}>

            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/hello" component={App} />
                        <Route path="/" component={App} />
                    </Switch>
                </div>
            </BrowserRouter>

        </Provider>


    , document.getElementById('root'));
}
