import React , { Component } from 'react' ;
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class NavBar extends Component {


    render () {
        return (
            <div>
                <AppBar position="sticky" className="app-bar" >
                    <Toolbar >
                        <img src="/img/password-navbar.png" height={ ( this.props.view === 'mobile' ) ? 40 : 50 } />

                        <h2 className={ ( this.props.view === 'mobile' ) ? "navbar-title-mobile" : "navbar-title" } >Password Pocket</h2>

                        <Button variant="contained" color="secondary" className="logout-button" >
                            <img src="/img/logout.svg" height={20} />
                        </Button>

                    </Toolbar>

                </AppBar>
            </div>
        );
    }
}

export default NavBar ;
