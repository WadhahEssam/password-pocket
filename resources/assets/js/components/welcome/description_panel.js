import React , { Component } from 'react' ;
import Button from '@material-ui/core/Button' ;
import SecurityIcon from '@material-ui/icons/Security';

class DescriptionPanel extends Component {

    render () {
        return (

            <div>
                <h1 className="website-name">Password Pocket</h1>
                <h3 className="website-description">The most secure password keeper in the world , even owner can't access your information .</h3>
                <Button variant="contained" color="primary" className="documentation-button" size={'large'}>
                    Check why

                    <SecurityIcon className="description-button-icon" />

                </Button>
            </div>

        ) ;
    }
}

export default DescriptionPanel ;