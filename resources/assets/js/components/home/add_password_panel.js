import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button' ;
import { Field , reduxForm } from 'redux-form' ;
import {connect} from 'react-redux' ;




class AddPasswordPanel extends Component {
    render() {
        return (
            <div>
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
                                        component={this.renderNameField}
                                    />
                                    <input placeholder="Login Data ( Username Or Email )" className="add-password-modal-form-input" type="text" />
                                    <input placeholder="Password" className="add-password-modal-form-input" type="password"/>
                                    <textarea placeholder="Description ( optional ) " className="add-password-modal-form-textarea"  />

                                    <div className="add-password-modal-form-color-picker" >
                                        <input type="radio" name="color" id="red" value="red" />
                                        <label htmlFor="red"><span className="red"></span></label>

                                        <input type="radio" name="color" id="green" />
                                        <label htmlFor="green"><span className="green"></span></label>

                                        <input type="radio" name="color" id="yellow" />
                                        <label htmlFor="yellow"><span className="yellow"></span></label>

                                        <input type="radio" name="color" id="olive" />
                                        <label htmlFor="olive"><span className="olive"></span></label>

                                        <input type="radio" name="color" id="orange" />
                                        <label htmlFor="orange"><span className="orange"></span></label>

                                        <input type="radio" name="color" id="teal" />
                                        <label htmlFor="teal"><span className="teal"></span></label>

                                        <input type="radio" name="color" id="blue" />
                                        <label htmlFor="blue"><span className="blue"></span></label>

                                        <input type="radio" name="color" id="violet" />
                                        <label htmlFor="violet"><span className="violet"></span></label>
                                    </div>


                                    <Button type="submit" variant="contained" color="primary" className="add-password-modal-form-add-button" >
                                        Add
                                    </Button>

                                    <Button variant="contained" color="primary" className="add-password-modal-form-close-button" onClick={()=>{}} >
                                        Close
                                    </Button>
                                </form>



                            </div>




                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onSubmit ( values ) {
        console.log(values) ;
    }

    renderNameField ( field )  {
        return (
            <div>
                <input
                    placeholder="Name ( Name of the site or app )"
                    className="add-password-modal-form-input"
                    type="text"
                    {...field.input}
                />
            </div>
        ) ;
    }

}

function validate ( values ) {

    let errors = {} ;
    console.log(values) ;
    return errors ;

}

function mapStateToProps ( state ) {
    return { state : state } ;
}

export default  reduxForm ( { validate : validate , form : 'AddNewPasswordForm' } )  ( AddPasswordPanel)  ;

