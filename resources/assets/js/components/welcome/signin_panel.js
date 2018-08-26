import React , { Component } from 'react' ;
import { changeWelcomePage } from '../../actions/index' ;
import { connect } from 'react-redux' ;
import { Field , reduxForm } from 'redux-form' ;
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button' ;
import Tooltip from '@material-ui/core/Tooltip';
import Hidden from '@material-ui/core/Hidden';
import Chip from '@material-ui/core/Chip';
import FormHelperText from '@material-ui/core/FormHelperText';
import { validateEmail }  from '../../helpers/index' ;

class LoginPanel extends Component {

    constructor ( props ) {
        super ( props ) ;

        this.state = {
            stayOnlineCheckBox: true,
        };

        this.renderPasswordField = this.renderPasswordField.bind(this) ;
    }

    render () {

        return (
            <div>

                {/* Header For Mobiles */}
                <Hidden only={['sm','lg','md','xl']}>
                    <div className="logo-div-mobile">
                        <img className="logo" height={50} src="/img/password.png" />
                    </div>

                    <div className="website-name-login-panel-mobile">
                        <h4 style={ { margin:"0px" } } >Password Pocket</h4>
                    </div>

                    <div className="website-description-login-panel-mobile" >
                        <p>The most secure password keeper</p>
                    </div>

                    <div className="documentaion-button-login-panel-div" >
                        <Chip
                            label="WHY ?"
                            onClick={ ()=>{console.log('check why')} }
                            className="documentaion-button-login-panel"
                        />
                    </div>

                </Hidden>

                {/* Header For NotMobiles */}
                <Hidden only="xs" >
                    <div className="logo-div">
                        <img className="logo" height={50} src="/img/password.png" />
                    </div>

                    <div className="website-name-login-panel">
                        <h4 style={ { margin:"0px" } } >Password Pocket</h4>
                    </div>
                </Hidden>

                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>

                    <Field
                        name="email"
                        component={this.renderEmailField}
                    />

                    <Field
                        name="password"
                        component={this.renderPasswordField}
                    />


                    <div className="login-checkbox">
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={this.state.stayOnlineCheckBox}
                                    onChange={ (e) => { this.setState( { stayOnlineCheckBox : e.target.checked } ) } }
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Stay online "
                            labelPlacement="start"
                        />
                    </div>

                    <Button type="submit" variant="contained" color="primary" className="sign-in-button" >
                        Sign in
                    </Button>


                    <Button variant="contained" color="primary" className="sign-up-button" onClick={()=>{this.props.changeWelcomePage('signup')}} >
                        Create Account
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

    onSubmit ( values ) {
        console.log('submitted');
    }

    renderEmailField ( field ) {


        return (
            <div>
                <FormControl className="login-input" { ... ( field.meta.touched && field.meta.error ) ? (  {error : true} ) : ( {} ) } aria-describedby="name-error-text">
                    <InputLabel htmlFor="name-error">Email</InputLabel>
                    <Input
                        id="email"
                        placeholder="Enter Your Email ."
                        { ... field.input }
                         />
                    <FormHelperText id="name-error-text">{ field.meta.touched ? field.meta.error  : ''}</FormHelperText>
                </FormControl>
            </div>
        );
    }

    renderPasswordField ( field ) {
        return (
            <div>
                <FormControl
                    className="login-input password-input-signin-panel"
                    { ... ( field.meta.touched && field.meta.error ) ? (  {error : true} ) : ( {} ) }
                >
                    <InputLabel htmlFor="adornment-password">Password</InputLabel>
                    <Input
                        id="adornment-password"
                        type="password"
                        { ... field.input }
                    />
                    <FormHelperText id="name-error-text">{ field.meta.touched ? field.meta.error  : ''}</FormHelperText>
                </FormControl>
            </div>
        ) ;
    }

}


function validate ( values ) {
    let errors = {} ;

    if ( !values.email ) {
        errors.email = "Email is required" ;
    } else if ( !validateEmail(values.email) ) {
            errors.email = "Email is not valid" ;
    }


    if ( !values.password ) {
        errors.password = "Password is required" ;
    } else if ( values.password.length < 6 ) {
        errors.password = "Password is too short" ;
    }

    return errors ;
}

export default reduxForm ( { validate : validate , form : 'SignInForm' } ) ( connect ( null , {changeWelcomePage} ) ( LoginPanel ) ) ;


