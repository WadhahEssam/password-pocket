import React , { Component } from 'react' ;
import { Link } from 'react-router-dom' ;
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import LoginPanel from "./login_panel";
import DescriptionPanel from "./description_panel";


class Login extends Component {

    render() {


        return (
            <div>

                <div className="centered background">

                </div>

                <div  className="centered welcome-panel" >

                    <Grid
                        className="welcome-grid"
                        container
                        spacing={24}
                        direction="row-reverse"
                    >

                        <Hidden xsDown smDown>
                            <Grid item xs={12} sm={1}>
                            </Grid>
                        </Hidden>

                        <Grid item className="login-grid" xs={12} sm={5} md={3} lg={3} xl={2} >
                            <Paper elevation={5} className="paper login-panel">
                                <LoginPanel/>

                            </Paper>
                        </Grid>

                        <Hidden xsDown>
                            <Grid item xs={12} sm={7} md={7} lg={7} xl={8}>
                                <Paper className="paper website-description-panel">
                                    <DescriptionPanel/>
                                </Paper>
                            </Grid>
                        </Hidden>

                        <Hidden xsDown smDown>
                            <Grid item xs={12} sm={1}>
                            </Grid>
                        </Hidden>

                    </Grid>

                </div>

            </div>


        );
    }
}

export default Login ;

