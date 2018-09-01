import React , { Component } from 'react' ;
import { connect } from 'react-redux' ;
import NavBar from './nav_bar';
import SideBar from './side_bar';
import PasswordsPanel from './passwords_panel' ;
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AllIcon from '@material-ui/icons/GridOn';
import StarBorder from '@material-ui/icons/StarBorder';
import DeletedIcon from '@material-ui/icons/DeleteSweep';
import { showAddPasswordPanel , getPasswords } from '../../actions/index'

class Home extends Component {

    constructor ( props ) {
        super ( props ) ;
        this.state = { open : false , value : 0 }
    }

    handleDrawerOpen () {
        this.setState({ open: true });
    };

    handleDrawerClose () {
        this.setState({ open: false });
    };


    componentWillMount () {
        // checking if user is logged in or not
        if ( this.props.userData.name === '' ) {
            this.props.history.push('/') ;
        } else {
            this.props.getPasswords() ;
        }
    }

    render () {
        const { value } = this.state;

        return (
            <div>

                {/* Nav Bar */}
                <Hidden xsDown>
                    <NavBar view="normal" history={this.props.history} />
                </Hidden>

                <Hidden only={['sm','lg','md','xl']}>
                    <NavBar view="mobile"  history={this.props.history}  />
                </Hidden>

                {/* Navigation Buttons for mobile */}
                <Hidden only={['lg','md','xl']}>
                    <BottomNavigation
                            value={value}
                            onChange={ ( event , value )=>{ this.setState({ value }); } }
                            showLabels
                            style={ {paddingTop:"3px"} }
                        >
                        <BottomNavigationAction label="All" icon={<AllIcon />} />
                        <BottomNavigationAction label="Starred" icon={<StarBorder />} />
                        <BottomNavigationAction label="Deleted" icon={<DeletedIcon />} />
                    </BottomNavigation>
                </Hidden>


                {/* Side Bar */}
                <Hidden xsDown smDown>
                    <SideBar  history={this.props.history} />
                </Hidden>

                {/* Passwords Panel */}
                <Hidden xsDown smDown>
                    <PasswordsPanel view="normal" />
                </Hidden>

                <Hidden only={['lg','md','xl']}>
                    <PasswordsPanel view="mobile" />
                </Hidden>

                {/* Add Password Button */}
                <Button variant="fab" color="primary" aria-label="Add" className="fixed-add-button" onClick={ () => { this.props.showAddPasswordPanel() } } >
                    <AddIcon />
                </Button>


            </div>
        );
    }
}

function mapStateToFunction ( state ) {
    return { userData : state.userData } ;
}

export default connect ( mapStateToFunction , { showAddPasswordPanel , getPasswords } ) ( Home ) ;
