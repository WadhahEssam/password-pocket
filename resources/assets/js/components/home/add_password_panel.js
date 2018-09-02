import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button' ;
import { Field , reduxForm } from 'redux-form' ;
import {connect} from 'react-redux' ;
import {showAddPasswordPanel , hideAddPasswordPanel , addPassword , showSnackBar , changeView } from '../../actions/index'
import IconButton from '@material-ui/core/IconButton';
import ShowPasswordIcon from '@material-ui/icons/Visibility';
import HidePasswordIcon from '@material-ui/icons/VisibilityOff';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


class AddPasswordPanel extends Component {

    constructor ( props ) {
        super ( props ) ;
        this.state = {
            color : '#8a8a8a' ,
            showPassword : false ,
            open : false ,
            message : '' ,
            time : 6000 ,
        }

    }



    render() {

        const transitionOptions = {
            transitionName : "example" ,
            transitionAppear : true ,
            transitionAppearTimeout : 500 ,
            transitionEnter : true ,
            transitionEnterTimeout : 300 ,
            transitionLeave : true ,
            transitionLeaveTimeout : 300
        }

        return (
            <div>
                <CSSTransitionGroup { ... transitionOptions }>

                    <div className="overlay">
                        <div className="add-password-modal-div" >
                            <div className="add-password-modal">


                                <div className="add-password-modal-title">
                                    <h1>Add New Password</h1>
                                </div>

                                <Divider/>

                                <div className="add-password-modal-form-div">

                                    <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}  >

                                        <Field
                                            name="name"
                                            component={this.renderInputField}
                                            placeholder="Name ( Name of the site or app )"
                                            type="text"
                                        />

                                        <Field
                                            name="login_cred"
                                            component={this.renderInputField}
                                            placeholder="Login Data ( Username Or Email )"
                                            type="text"
                                        />

                                        <Field
                                            name="password"
                                            component={this.renderInputField}
                                            placeholder="Password"
                                            type={ (this.state.showPassword ) ? ('text') : ('password') }
                                        />

                                        <IconButton aria-label="Delete" className="add-password-modal-form-show-password-button" onClick={ () => { this.setState( { showPassword:!this.state.showPassword } ) } } >
                                            { (this.state.showPassword) ? <HidePasswordIcon /> : <ShowPasswordIcon/> }
                                        </IconButton>

                                        <Field
                                            name="description"
                                            component={this.renderTextareaField}
                                        />

                                        <div className="add-password-modal-form-color-picker" >

                                            <input type="radio" name="color" id="olive" value="#8a8a8a" defaultChecked onChange={ (e)=>{ this.setState( {color: e.target.value} ) } } />
                                            <label className="radio-label" htmlFor="olive"><span className="olive"></span></label>

                                            <input type="radio" name="color" id="red" value="#c56e6e" onChange={ (e)=>{ this.setState( {color: e.target.value} ) } } />
                                            <label className="radio-label" htmlFor="red"><span className="red"></span></label>

                                            <input type="radio" name="color" id="green" value="#83b383" onChange={ (e)=>{ this.setState( {color: e.target.value} ) } } />
                                            <label className="radio-label" htmlFor="green"><span className="green"></span></label>

                                            <input type="radio" name="color" id="yellow" value="#d4d43a" onChange={ (e)=>{ this.setState( {color: e.target.value} ) } } />
                                            <label className="radio-label" htmlFor="yellow"><span className="yellow"></span></label>

                                            <input type="radio" name="color" id="orange" value="#e2b053" onChange={ (e)=>{ this.setState( {color: e.target.value} ) } } />
                                            <label className="radio-label" htmlFor="orange"><span className="orange"></span></label>

                                            <input type="radio" name="color" id="teal" value="#3f8686" onChange={ (e)=>{ this.setState( {color: e.target.value} ) } } />
                                            <label className="radio-label" htmlFor="teal"><span className="teal"></span></label>

                                            <input type="radio" name="color" id="blue" value="#7272b5" onChange={ (e)=>{ this.setState( {color: e.target.value} ) } } />
                                            <label className="radio-label" htmlFor="blue"><span className="blue"></span></label>

                                            <input type="radio" name="color" id="violet" value="#bd8abd" onChange={ (e)=>{ this.setState( {color: e.target.value} ) } } />
                                            <label className="radio-label" htmlFor="violet"><span className="violet"></span></label>

                                        </div>


                                        <Button type="submit" variant="contained" color="primary" className="add-password-modal-form-add-button" >
                                            Add
                                        </Button>

                                        <Button variant="contained" color="primary" className="add-password-modal-form-close-button" onClick={ ()=>{ this.props.hideAddPasswordPanel() }} >
                                            Close
                                        </Button>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>
                </CSSTransitionGroup>
            </div>
        );
    }

    onSubmit ( values ) {
        values.color = this.state.color ;
        this.props.addPassword( values , () => { this.props.hideAddPasswordPanel() ; this.props.showSnackBar('Successfully Added' , 1500) ; this.props.changeView('all') }  ) ;
    }

    renderInputField ( field )  {
        return (
            <div>
                <input
                    placeholder={field.placeholder}
                    className={  field.meta.touched && field.meta.error ?  "add-password-modal-form-input error-input"  :  "add-password-modal-form-input" }
                    type={field.type}
                    {...field.input}
                />
            </div>
        ) ;
    }

    renderTextareaField ( field ) {
        return (
            <div>
                <textarea
                    placeholder="Description ( optional )"
                    className="add-password-modal-form-textarea"
                    { ...field.input }
                />
            </div>
        );
    }

}

function validate ( values ) {

    let errors = {} ;

    if ( !values.name ) {
        errors.name = "name is required" ;
    } else if ( values.name.length > 30 ) {
        errors.name = "can't be more than 30 chars" ;
    }

    if ( !values.login_cred ) {
        errors.login_cred = "this field is required" ;
    } else if ( values.login_cred.length > 80 ) {
        errors.login_cred = "can't be more than 80 chars" ;
    }

    if ( !values.password ) {
        errors.password = "password is required" ;
    } else if ( values.password.length > 180 ) {
        errors.password = "password can't be more than 180 chars" ;
    }

    return errors ;

}


export default  reduxForm ( { validate : validate , form : 'AddNewPasswordForm' } ) ( connect ( null , {  showAddPasswordPanel , hideAddPasswordPanel , addPassword , showSnackBar , changeView } )  ( AddPasswordPanel) ) ;

