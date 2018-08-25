import React , { Component } from 'react' ;
import { connect } from 'react-redux' ;
import SignIn from './signin' ;
import SignUp from './signup' ;

class Login extends Component {

    render() {

        return (
            <div>

                {/* The background */}
                <div className="centered background"></div>

                <div  className="centered welcome-panel" >

                    { (this.props.welcomePage === "signin" ) ?  <SignIn/> : <SignUp/>  }

                </div>

            </div>
        );
    }
}

function mapStateToProps ( state ) {
    return { welcomePage : state.welcomePage  } ;
}

export default connect ( mapStateToProps ) ( Login )  ;

