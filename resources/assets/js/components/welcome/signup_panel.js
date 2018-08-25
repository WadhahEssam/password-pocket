import React , { Component } from 'react' ;
import { connect } from 'react-redux' ;
import { Field , reduxForm } from 'redux-form' ;
import { changeWelcomePage } from '../../actions/index' ;
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button' ;
import Tooltip from '@material-ui/core/Tooltip';

class Snippit extends Component {

    constructor ( props ) {
        super ( props ) ;

        this.state = {
            password: '',
            showPassword: false,
            password2: '',
            showPassword2: false,
            checkedA: true,
            checkedB: true,
        };

        this.renderConfirmPasswordField = this.renderConfirmPasswordField.bind(this) ;
        this.renderPasswordField = this.renderPasswordField.bind(this) ;

    }

    render () {
        return (

            <div>


                <div className="logo-div">
                    <img className="logo" height={50} src="/img/password.png" />
                </div>

                <div className="website-name-login-panel">
                    <h4 style={ { margin:"0px" } } >Password Pocket</h4>
                </div>

                <form className="signup-form" onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))} >

                    <Field
                        name="usernasme"
                        component={this.renderUsernameField}
                    />

                    <Field
                        name="email"
                        component={this.renderEmailField}
                    />


                    <Field
                        name="password"
                        component={this.renderPasswordField}
                    />

                    <Field
                        name="confirm-password"
                        component={this.renderConfirmPasswordField}
                    />

                    <Button type="submit" variant="contained" color="primary" className="signup-button-signup-panel" >
                        Create Account
                    </Button>


                    <Button variant="contained" color="primary" className="signin-button-signup-panel" onClick={()=>{this.props.changeWelcomePage('signin')}} >
                        have account ?
                    </Button>

                    <div className="logos-login-panel">
                        <Tooltip title="visit github repository" placement="left" >
                            <IconButton aria-label="Delete">
                                <img height={30} src="img/github.svg" />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="contact us on facebook" placement="right" >
                            <IconButton aria-label="Delete">
                                <img height={30} src="img/facebook-logo.svg" />
                            </IconButton>
                        </Tooltip>
                    </div>

                </form>


            </div>

        ) ;
    }

    renderUsernameField ( field ) {
        return (
            <TextField
                { ...field.input }
                id="username"
                label="Username"
                placeholder="Choose a username"
                className="login-input signup-username-input"
                margin="normal"
            />
        ) ;
    }

    renderEmailField ( field ) {
        return (
            <TextField
                { ...field.input }
                id="email"
                label="Email"
                placeholder="Enter Your Email ."
                className="login-input signup-email-input"
                margin="normal"
            />
        ) ;
    }

    renderPasswordField ( field ) {
        return (
            <FormControl
                className="login-input signup-password-input"
            >
                <InputLabel htmlFor="adornment-password">Password</InputLabel>
                <Input
                    id="adornment-password"
                    type={this.state.showPassword ? 'text' : 'password'}
                    value={this.state.password}
                    onChange={(e)=>{ this.setState( { password:e.target.value}) } }
                    { ...field.input }

                />
            </FormControl>
        ) ;
    }

    renderConfirmPasswordField ( field ) {
        return (
            <FormControl
                className="login-input signup-confirm-password-input"
            >
                <InputLabel htmlFor="adornment-password">Confirm Password</InputLabel>
                <Input
                    id="adornment-confirmpassword-password"
                    type={this.state.showPassword2 ? 'text' : 'password'}
                    value={this.state.password2}
                    onChange={(e)=>{ this.setState( { password2:e.target.value}) } }
                    { ...field.input }

                />
            </FormControl>
        ) ;
    }

    onSubmit ( values ) {

    }

}

function validate ( values ) {
    let errors ={} ;
    return errors ;
}

export default reduxForm( { validate : validate , form : 'SignUpForm' }) ( connect ( null , {changeWelcomePage} ) (Snippit) ) ;
