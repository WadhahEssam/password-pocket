import React , { Component } from 'react' ;
import Button from '@material-ui/core/Button' ;
import SecurityIcon from '@material-ui/icons/Security';
import { Link } from 'react-router-dom' ;

class DescriptionPanel extends Component {

    render () {
        return (

            <div>

                <h1 className="website-name">Password Pocket</h1>

                <h3 className="website-description">The most secure password keeper , even our developers don't have access your information </h3>


                <Button variant="contained" color="primary" className="documentation-button" size={'large'}>
                    Check why
                    <SecurityIcon className="description-button-icon" />
                </Button>

                <Button variant="contained" color="primary" className="create-account-button" size={'large'}>
                    Create Account
                </Button>


            </div>

        ) ;
    }
}

export default DescriptionPanel ;
