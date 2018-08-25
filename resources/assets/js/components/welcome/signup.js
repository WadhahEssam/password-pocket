import React , { Component } from 'react' ;
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import LoginPanel from "./login_panel";
import DescriptionPanel from "./description_panel";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class SignUp extends Component {


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
            <Grid container { ... gridOptions } >

                <PaddingGrid/>



                <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
                    <Paper className="paper website-description-panel">
                        <CSSTransitionGroup { ... transitionOptions }>
                            <DescriptionPanel/>
                        </CSSTransitionGroup>
                    </Paper>
                </Grid>


            <PaddingGrid/>

        </Grid>
        );
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

export default SignUp ;
