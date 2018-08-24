import React , { Component } from 'react' ;
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


class LoginPanel extends Component {

    constructor ( props ) {
        super ( props ) ;

        this.state = {
            amount: '',
            password: '',
            weight: '',
            weightRange: '',
            showPassword: false,
            checkedA: true,
            checkedB: true,
        };
    }


    render () {

        return (
            <div>

                <div className="logo-div">
                    <img className="logo" height={50} src="/img/password.png" />
                </div>

                <div className="website-name-login-panel">
                    <h4 >Password Pocket</h4>
                </div>


                <TextField
                    id="with-placeholder"
                    label="Email"
                    placeholder="Enter Your Email ."
                    className="login-input"
                    margin="normal"
                />

                <FormControl
                    className="login-input"
                >
                    <InputLabel htmlFor="adornment-password">Password</InputLabel>
                    <Input
                        id="adornment-password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.password}
                        onChange={(e)=>{ this.setState( { password:e.target.value}) } }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={(e)=>{ e.preventDefault() }}
                                    onMouseDown={ () => {this.setState( {showPassword : !this.state.showPassword } )} }
                                >
                                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>


                <div className="login-checkbox">
                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.checkedB}
                                onChange={ (e) => { this.setState( { checkedB : e.target.checked } ) } }
                                value="checkedB"
                                color="primary"
                            />
                        }
                        label="Stay online "
                        labelPlacement="start"
                    />
                </div>

                <Button variant="contained" color="primary" className="sign-in-button" >
                    Sign in
                </Button>


                <Button variant="contained" color="primary" className="sign-up-button" >
                    Create Account
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




            </div>
        ) ;
    }
}


export default LoginPanel ;