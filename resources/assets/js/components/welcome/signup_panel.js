import React , { Component } from 'react' ;
import { connect } from 'react-redux' ;
import { Field , reduxForm } from 'redux-form' ;
import { changePage , signup  } from '../../actions/index' ;
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
import FormHelperText from '@material-ui/core/FormHelperText';
import { validateEmail }  from '../../helpers/index' ;

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
            password: props.password
        };

        this.renderConfirmPasswordField = this.renderConfirmPasswordField.bind(this) ;
        this.renderPasswordField = this.renderPasswordField.bind(this) ;
        this.onSubmit = this.onSubmit.bind(this) ;

    }

    render () {

        return (

            <div>


                <div className="logo-div">
                    <img className="logo" height={50} src="/img/password.png" />
                </div>

                <div className="website-name-signup-panel">
                    <h4 style={ { margin:"0px" } } >Password Pocket</h4>
                </div>

                <form className="signup-form" onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))} >

                    <Field
                        name="name"
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
                        name="confirmPassword"
                        component={this.renderConfirmPasswordField}
                    />

                    <Button type="submit" variant="contained" color="primary" className="signup-button-signup-panel" >
                        Create Account
                    </Button>


                    <Button variant="contained" color="primary" className="signin-button-signup-panel" onClick={()=>{this.props.changePage('signin')}} >
                        have account ?
                    </Button>

                </form>

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


            </div>

        ) ;
    }

    renderUsernameField ( field ) {
        return (
            <div>
                <FormControl className="login-input signup-username-input" { ... ( field.meta.touched && field.meta.error ) ? (  {error : true} ) : ( {} ) } aria-describedby="name-error-text">
                    <InputLabel htmlFor="name-error">Username</InputLabel>
                    <Input
                        id="username"
                        placeholder="Choose a username"
                        { ... field.input }
                    />
                    <FormHelperText id="name-error-text">{ field.meta.touched ? field.meta.error  : ''}</FormHelperText>
                </FormControl>
            </div>
        ) ;
    }

    renderEmailField ( field ) {
        return (
            <div>
                <FormControl className="login-input signup-email-input" { ... ( field.meta.touched && field.meta.error ) ? (  {error : true} ) : ( {} ) } aria-describedby="name-error-text">
                    <InputLabel htmlFor="name-error">Email</InputLabel>
                    <Input
                        id="email"
                        placeholder="Enter your email"
                        { ... field.input }
                    />
                    <FormHelperText id="name-error-text"> { field.meta.touched ? field.meta.error  : ''}</FormHelperText>
                </FormControl>
            </div>
        ) ;
    }

    renderPasswordField ( field ) {
        return (
            <FormControl
                className="login-input signup-password-input"
                { ... ( field.meta.touched && field.meta.error ) ? (  {error : true} ) : ( {} ) }
            >
                <InputLabel htmlFor="adornment-password">Password</InputLabel>
                <Input
                    type={this.state.showPassword ? 'text' : 'password'}
                    value={this.state.password}
                    onChange={(e)=>{ this.setState( { password:e.target.value}) } }
                    { ...field.input }
                />
                <FormHelperText id="name-error-text"> { field.meta.touched ? field.meta.error  : ''}</FormHelperText>
            </FormControl>
        ) ;
    }

    renderConfirmPasswordField ( field ) {
        return (
            <FormControl
                className="login-input signup-confirm-password-input"
                { ... ( field.meta.touched && field.meta.error ) ? (  {error : true} ) : ( {} ) }
            >
                <InputLabel htmlFor="adornment-password">Confirm Password</InputLabel>
                <Input
                    id="adornment-confirmpassword-password"
                    type={this.state.showPassword2 ? 'text' : 'password'}
                    value={this.state.password2}
                    onChange={(e)=>{ this.setState( { password2:e.target.value}) } }
                    { ...field.input }
            />
                <FormHelperText id="name-error-text"> { field.meta.touched ? field.meta.error  : ''}</FormHelperText>
            </FormControl>
        ) ;
    }

    onSubmit ( values ) {
        this.props.signup ( values , () => { this.props.history.push('/home') } ) ;
    }

}

function validate ( values ) {
    let errors = {} ;

    if ( !values.email ) {
        errors.email = "Email is required" ;
    } else if ( !validateEmail(values.email) ) {
        errors.email = "Email is not valid" ;
    }

    if ( !values.name ) {
        errors.name = "Username is required" ;
    } else if ( values.name.length < 3 ) {
        errors.name = "Username should be atleast 3 characters" ;
    }

    if ( !values.password ) {
        errors.password = "Password is required" ;
    } else if ( values.password.length < 6 ) {
        errors.password = "Password is too short" ;
    }

    if ( !values.confirmPassword ) {
        errors.confirmPassword = "Password confirmation is required" ;
    } else if ( values.password !== values.confirmPassword ) {
        errors.confirmPassword = "Passwords don't match" ;
    }

    return errors ;
}


function mapStateToProps ( state ) {
    return { state : state } ;
}


export default reduxForm( { validate : validate , form : 'SignUpForm' }) ( connect ( mapStateToProps , { changePage , signup } ) (Snippit) ) ;
