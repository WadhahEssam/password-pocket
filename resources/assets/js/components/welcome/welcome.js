import React , { Component } from 'react' ;
import { connect } from 'react-redux' ;
import { checkAuth , hideSnackBar } from '../../actions/index';
import SignIn from './signin' ;
import SignUp from './signup' ;
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

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

                    { (this.props.page === "signin" ) ?  <SignIn  history={this.props.history}/> : ( ( this.props.page === "signup" ) ? <SignUp history={this.props.history}/> : '' ) }

                </div>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    className="snackbar"
                    variant="error"
                    open={this.props.snackBar.open}
                    autoHideDuration={this.props.snackBar.time}
                    onClose={ ( event , reason ) => { if ( reason === 'clickaway') { return } ; this.props.hideSnackBar() } }
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.props.snackBar.message}</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={ ( event , reason ) => { if ( reason === 'clickaway') { return } ; this.props.hideSnackBar() } }
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />

            </div>
        );
    }
}

function mapStateToProps ( state ) {
    return {
        page : state.page ,
        snackBar : state.snackBar
    };
}

export default connect ( mapStateToProps , { checkAuth , hideSnackBar } ) ( Login )  ;

