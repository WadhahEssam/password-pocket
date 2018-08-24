import React , { Component } from 'react' ;
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


class LoginPanel extends Component {

    constructor ( props ) {
        super ( props ) ;

        this.state = {
            amount: '',
            password: '',
            weight: '',
            weightRange: '',
            showPassword: false,
        };
    }




    render () {

        return (
            <div>

                <div className="logo-div">
                    <img className="logo" height={50} src="/img/password.png" />
                </div>

                <h5 className="website-name-login-panel">Password Pocket</h5>




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

            </div>
        ) ;
    }
}


export default LoginPanel ;