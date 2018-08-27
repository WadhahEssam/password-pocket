import React , { Component } from 'react' ;
import { connect } from 'react-redux' ;
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import NavBar from './nav_bar';
import SideBar from './side_bar';

class Home extends Component {

    constructor ( props ) {
        super ( props ) ;
        this.state = { open : false }
    }

    handleDrawerOpen () {
        this.setState({ open: true });
    };

    handleDrawerClose () {
        this.setState({ open: false });
    };

    componentDidMount () {
        console.log(this.props.userData) ;
        if ( this.props.userData.name === '' ) {
            this.props.history.push('/') ;
        }
    }

    render () {

        return (
            <div>


                <NavBar />

                <SideBar />


                <main >
                    <div className="content" >
                    <div>here will be the content</div>
                    <div>here will be the content</div>
                    <div>here will be the content</div>
                    <div>here will be the content</div>
                    <div>here will be the content</div>
                    <div>here will be the content</div>
                    <div>here will be the content</div>
                    <div>here will be the content</div>
                    <div>here will be the content</div>
                    <div>here will be the content</div>
                    <div>here will be the content</div>
                    <div>here will be the content</div>
                    <div>here will be the content</div>
                    <div>here will be the content</div>
                    <div>here will be the content</div>
                    </div>
                </main>

            </div>
        );
    }
}

function mapStateToFunction ( state ) {
    return { userData : state.userData } ;
}

export default connect ( mapStateToFunction ) ( Home ) ;
