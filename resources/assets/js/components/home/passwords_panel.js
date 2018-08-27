import React , { Component } from 'react' ;
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PasswordCard from './password_card';

class PasswordsPanel extends Component {

    render () {

        const gridOptions = {
            className : "welcome-grid" ,
            spacing : 24 ,
            alignItems : "stretch"
        }




        return (
            <div>
                <main >
                    <div className="content" >


                        <Grid container { ... gridOptions } >

                            <Grid item className="" xs={12} sm={6} md={4} lg={4} xl={2} >

                                <PasswordCard/>

                            </Grid>

                            <Grid item className="" xs={12} sm={6} md={4} lg={4} xl={2} >

                                <PasswordCard/>

                            </Grid>

                            <Grid item className="" xs={12} sm={6} md={4} lg={4} xl={2} >

                                <PasswordCard/>

                            </Grid>


                            <Grid item className="" xs={12} sm={6} md={4} lg={4} xl={2} >

                                <PasswordCard/>

                            </Grid>

                        </Grid>



                    </div>
                </main>
            </div>
        ) ;
    }
}

export default PasswordsPanel ;
