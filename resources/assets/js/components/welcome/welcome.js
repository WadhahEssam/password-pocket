import React , { Component } from 'react' ;
import { connect } from 'react-redux' ;
import { checkAuth } from '../../actions/index';
import SignIn from './signin' ;
import SignUp from './signup' ;


class Login extends Component {

    constructor ( props ) {
        super ( props ) ;
    }

    componentDidMount () {
        this.props.checkAuth( ()=>{ this.props.history.push('/home') } ) ;
    }

    render() {


        return (
            <div>

                {/* The background */}
                <div className="centered background"></div>

                <div  className="centered welcome-panel" >

                    { (this.props.page === "signin" ) ?  <SignIn  history={this.props.history}/> : <SignUp history={this.props.history}/>  }

                </div>

            </div>
        );
    }
}

function mapStateToProps ( state ) {
    return { page : state.page  } ;
}

export default connect ( mapStateToProps , {checkAuth} ) ( Login )  ;

