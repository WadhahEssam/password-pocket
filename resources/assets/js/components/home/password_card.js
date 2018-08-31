import React, { Component } from 'react';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
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
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';


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
    deleteIcon: {
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
        color: "#d48989"
    },
    starIcon: {
        color: '#c1c16d',
    },
    chip: {
        margin: theme.spacing.unit,
    }
});


class PasswordCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            password: props.password.password,
            username: props.password.login_cred,
            hideCred: true,
            open : false ,
            message : '' ,
            time : 6000 ,
            color : props.password.color
        };

    }


    render() {

        const { classes } = this.props;

        return (

            <div>
                <Paper elevation={4} className="">

                    <Card >

                        <CardContent  style={{ backgroundColor: this.state.color }}  className="" >
                            <div className="card-header-div" >
                                <Avatar style={{ backgroundColor: "white" , color : this.state.color }} aria-label="Recipe" >
                                    {(this.props.password.name.charAt(0) + this.props.password.name.charAt(1) + "").toUpperCase()}
                                </Avatar>
                                <h2 className="card-title" style={{ color: "white"}}  >{this.props.password.name}</h2>
                            </div>
                        </CardContent>

                        <Divider />

                        <CardContent className="card-content" >

                            <div className="chip-div" >

                                <input type="text" className="card-text-input" value={this.state.username} onChange={() => { }} ></input>

                                <CopyToClipboard text={this.state.username} onCopy={() => { this.setState({open:true , message:'User copied !' , time:1500 }) }}>
                                    <IconButton aria-label="Delete" style={{ color: this.state.color }} className="copy-button" >
                                        <CopyIcon />
                                    </IconButton>
                                </CopyToClipboard>

                            </div>

                            <div className="chip-div" >

                                <input type={(this.state.hideCred) ? ('password') : ('text')} className="card-text-input" value={this.state.password} onChange={() => { }} ></input>
                                <CopyToClipboard text={this.state.password}onCopy={() => { this.setState({open:true , message:'Password copied !' , time:1500 }) }}>
                                    <IconButton aria-label="Delete" style={{ color: this.state.color }} className="copy-button" onClick={() => { }} >
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

                            <IconButton aria-label="Add to favorites" onClick={() => { this.setState({ hideCred: !this.state.hideCred }) }} >
                                {(this.state.hideCred) ? <ShowOnIcon /> : <ShowOffIcon />}
                            </IconButton>

                            <IconButton
                                onClick={() => { this.setState({ expanded: !this.state.expanded }) }}
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

                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        className="snackbar"
                        variant="error"
                        open={this.state.open}
                        autoHideDuration={this.state.time}
                        onClose={ ( event , reason ) => { if ( reason === 'clickaway') { return } ; this.setState({open:false}) } }
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">{this.state.message}</span>}
                        action={[
                            <IconButton
                                key="close"
                                aria-label="Close"
                                color="inherit"
                                onClick={ ( event , reason ) => { if ( reason === 'clickaway') { return } ; this.setState({open:false}) } }
                            >
                                <CloseIcon />
                            </IconButton>,
                        ]}
                    />

                </Paper>

            </div>
        );
    }


}



export default withStyles(styles)(PasswordCard);
