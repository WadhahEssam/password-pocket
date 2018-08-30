import React , { Component } from 'react' ;
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import LockIcon from '@material-ui/icons/Lock';
import ShowOnIcon from '@material-ui/icons/Visibility';
import ShowOffIcon from '@material-ui/icons/VisibilityOff';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),

    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    deleteIcon:{
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
          marginRight: -8,
        } ,
        color:"#d48989"
    },
    starIcon : {
        color:'#c1c16d',
    },
    chip: {
        margin: theme.spacing.unit,
    }
  });

class PasswordCard extends Component {

    constructor ( props ) {
        super ( props ) ;
        this.state = {
            expanded : false ,
            password : props.password.password ,
            username : props.password.login_cred ,
            hideCred : true ,
        } ;
    }


    render () {

        const { classes } = this.props;


        return (

            <div>
                <Paper elevation={4} className="">

                    <Card >

                        <CardContent className="" >
                            <div className="card-header-div" >
                                <Avatar style={ { backgroundColor : '#6868ad'  } } aria-label="Recipe" >
                                    { ( this.props.password.name.charAt(0) + this.props.password.name.charAt(1) + "").toUpperCase()  }
                                </Avatar>
                                <h2 className="card-title" >{this.props.password.name}</h2>
                            </div>
                        </CardContent>

                        <Divider />

                        <CardContent className="card-content" >

                        <div className="chip-div" >
                            <Chip
                                style={ { backgroundColor : '#fbfbfb' , color:"#949494"  } }
                                avatar={
                                    <Avatar
                                        style={ { backgroundColor : '#6868ad' , color:"white"  } }
                                    >
                                        <FaceIcon />
                                    </Avatar>
                                }
                                onClick={ () => {} }
                                label={this.state.username}
                                // onClick={handleClick}
                                // onDelete={handleDelete}
                                className={classes.chip}
                            />
                        </div>

                        <div className="chip-div" >
                            <Chip
                                style={ { backgroundColor : '#fbfbfb' , color:"#949494"  } }
                                avatar={
                                <Avatar
                                    style={ { backgroundColor : '#6868ad' , color:"white"  } }
                                >
                                    <LockIcon />
                                </Avatar>
                                }
                                onClick={ () => {} }
                                label={(this.state.hideCred) ? ('Copy Password') : (this.state.password) }
                                // onClick={handleClick}
                                // onDelete={handleDelete}
                                className={classes.chip}
                            />
                        </div>

                        </CardContent>

                        <Divider />

                        <CardActions disableActionSpacing className="card-footer" >

                            <IconButton aria-label="Add to favorites" className={classes.starIcon} >
                                <StarBorder />
                            </IconButton>

                            <IconButton aria-label="Add to favorites" onClick={ ()=>{this.setState({hideCred:!this.state.hideCred})} } >
                                { (this.state.hideCred) ? <ShowOnIcon/> : <ShowOffIcon/> }
                            </IconButton>

                            <IconButton
                                onClick={ ()=>{ this.setState( { expanded:!this.state.expanded} ) } }
                                className={classnames(classes.expand, {
                                    [classes.expandOpen]: this.state.expanded,
                                })}
                                aria-expanded={this.state.expanded}
                                aria-label="Show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>


                            <IconButton aria-label="Add to favorites" className={classes.deleteIcon} >
                                <DeleteIcon />
                            </IconButton>


                        </CardActions>

                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>
                                    {this.props.password.description}
                                </Typography>
                            </CardContent>
                        </Collapse>

                    </Card>

                </Paper>

            </div>
        ) ;
    }
}



export default withStyles(styles)  (PasswordCard)  ;
