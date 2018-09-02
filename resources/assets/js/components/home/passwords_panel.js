import React , { Component } from 'react' ;
import Grid from '@material-ui/core/Grid';
import PasswordCard from './password_card';
import SearchBar from 'material-ui-search-bar'
import AddPasswordPanel from './add_password_panel';
import { connect } from 'react-redux'
import _ from 'lodash' ;
import Paper from '@material-ui/core/Paper';
import { showAddPasswordPanel , showSnackBar , hideSnackBar } from '../../actions/index'
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class PasswordsPanel extends Component {

    constructor ( props ) {
        super ( props ) ;
        this.state = {
            search : '' ,
        }
    }



    render () {

        const gridOptions = {
            className : "welcome-grid" ,
            spacing : 24 ,
            alignItems : "stretch" ,
        }


        const transitionOptions = {
            transitionName : "example" ,
            transitionAppear : true ,
            transitionAppearTimeout : 500 ,
            transitionEnter : true ,
            transitionEnterTimeout : 300 ,
            transitionLeave : true ,
            transitionLeaveTimeout : 300
        }

        // weird mapping -> to render the elements from last to first
        const passwordCards =  Object.assign([], this.props.passwords ).reverse().map( ( password , index )=>{
            if ( this.props.view === 'all' ) {
                if ( !password.is_deleted )
                return (
                        <Grid key={password.id} item className="password-card" xs={12} sm={6} md={4} lg={3} xl={2} >
                            <CSSTransitionGroup { ... transitionOptions }>
                                <PasswordCard password={password} />
                            </CSSTransitionGroup>
                        </Grid>
                );
            }
            else if ( this.props.view === 'starred' ) {
                if ( !password.is_deleted && password.is_starred )
                return (
                        <Grid key={password.id} item className="password-card" xs={12} sm={6} md={4} lg={3} xl={2} >
                            <CSSTransitionGroup { ... transitionOptions }>
                                <PasswordCard password={password} />
                            </CSSTransitionGroup>
                        </Grid>
                );
            } else if ( this.props.view === 'deleted' ) {
                if ( password.is_deleted )
                return (
                        <Grid key={password.id} item className="password-card" xs={12} sm={6} md={4} lg={3} xl={2} >
                            <CSSTransitionGroup { ... transitionOptions }>
                                <PasswordCard password={password} />
                            </CSSTransitionGroup>
                        </Grid>
                );
            }
        });


        return (
            <div>
                <main >
                    <div className={ (this.props.device === 'mobile') ? "content-mobile" : "content" } >


                        <div className="search-box-div">
                            <SearchBar
                                className="search-box"
                                value={this.state.search}
                                onChange={(newValue) => this.setState({ search: newValue })}
                                onRequestSearch={() => { } }
                            />
                        </div>


                        <Grid container { ... gridOptions } >

                            {passwordCards}

                            <Grid item className="password-card" xs={12} sm={6} md={4} lg={3} xl={2} >
                                <Paper elevation={4}  className="add-password-card" >
                                    <img className="add-password-icon" src="/img/add-icon.svg" height="80" onClick={ () => { this.props.showAddPasswordPanel()  } } />
                                </Paper>
                            </Grid>

                        </Grid>


                        {/* Add Password Panel */}

                        { (this.props.isAddPasswordPanelOpened) ? <AddPasswordPanel/> : ""}

                    </div>
                </main>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    className="snackbar"
                    variant="error"
                    open={this.props.snackBar.open}
                    autoHideDuration={this.props.snackBar.time}
                    onClose={ ( event , reason ) => { if ( reason === 'clickaway') { return } ; this.props.hideSnackBar() } }
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.props.snackBar.message}</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={ ( event , reason ) => { if ( reason === 'clickaway') { return } ; this.props.hideSnackBar() } }
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />

            </div>
        ) ;
    }
}

function mapStateToProps ( state ) {
    return {
        isAddPasswordPanelOpened : state.isAddPasswordPanelOpened ,
        passwords : state.passwords,
        snackBar : state.snackBar ,
        view : state.view
    } ;
}

export default connect ( mapStateToProps , {showAddPasswordPanel , hideSnackBar , showSnackBar} ) ( PasswordsPanel ) ;
