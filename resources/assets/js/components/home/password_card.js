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
import CopyIcon from '@material-ui/icons/FileCopy';
import ShowOnIcon from '@material-ui/icons/Visibility';
import ShowOffIcon from '@material-ui/icons/VisibilityOff';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import {CopyToClipboard} from 'react-copy-to-clipboard';

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

    copyToClipboard( text ) {
        console.log('cool') ;
        if (window.clipboardData && window.clipboardData.setData) {
            // IE specific code path to preve"nt textarea being shown while dialog is visible.
            console.log(text + 'is copied') ;
            return clipboardData.setData("Text", text);

        } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
            var textarea = document.createElement("textarea");
            textarea.textContent = text;
            textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
            document.body.appendChild(textarea);
            textarea.select();
            try {
                return document.execCommand("copy");  // Security exception may be thrown by some browsers.
            } catch (ex) {
                console.warn("Copy to clipboard failed.", ex);
                return false;
            } finally {
                document.body.removeChild(textarea);
            }
        }
    }

    copyToClipboard2 ( text ) {
        console.log('damn') ;
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

                            <input type="text" className="card-text-input" value={this.state.username} onChange={ () => { } } ></input>

                            <CopyToClipboard text={this.state.username} onCopy={ ()=>{ console.log('username is copied') } }>
                                    <IconButton aria-label="Delete" className="copy-button" >
                                        <CopyIcon />
                                    </IconButton>
                            </CopyToClipboard>

                        </div>

                        <div className="chip-div" >

                            <input type={ ( this.state.hideCred ) ? ('password') : ('text') } className="card-text-input" value={this.state.password}  onChange={ () => { this.copyToClipboard(this.state.password) } } ></input>
                            <CopyToClipboard text={this.state.password} onCopy={ ()=>{ console.log('password is copied') } }>
                                <IconButton aria-label="Delete" className="copy-button" onClick={ () => {  } } >
                                    <CopyIcon />
                                </IconButton>
                            </CopyToClipboard>

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
