import React , { Component } from 'react' ;
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import LoginPanel from "./login_panel";
import DescriptionPanel from "./description_panel";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class SignIn extends Component {

    render () {

        const transitionOptions = {
            transitionName : "example" ,
            transitionAppear : true ,
            transitionAppearTimeout : 500 ,
            transitionEnter : true ,
            transitionEnterTimeout : 300 ,
            transitionLeave : true ,
            transitionLeaveTimeout : 300
        }

        const gridOptions = {
            className : "welcome-grid" ,
            spacing : 24 ,
            direction : "row-reverse"
        }

        return (

            <div>

                <Grid container { ... gridOptions } >

                    <PaddingGrid/>

                    <Grid item className="login-grid" xs={12} sm={5} md={3} lg={3} xl={2} >
                        <Paper elevation={5} className="paper login-panel">

                            <CSSTransitionGroup { ... transitionOptions }>
                                <LoginPanel/>
                            </CSSTransitionGroup>

                        </Paper>
                    </Grid>

                    <Hidden xsDown>
                        <Grid item xs={12} sm={7} md={7} lg={7} xl={8}>
                            <Paper className="paper website-description-panel">
                                <CSSTransitionGroup { ... transitionOptions }>
                                    <DescriptionPanel/>
                                </CSSTransitionGroup>
                            </Paper>
                        </Grid>
                    </Hidden>

                    <PaddingGrid/>

                </Grid>

            </div>

        ) ;
    }
}

const PaddingGrid = function () {
    return (
        <Hidden xsDown smDown>
            <Grid item xs={12} sm={1}>
            </Grid>
        </Hidden>
    ) ;
} ;

export default SignIn ;
