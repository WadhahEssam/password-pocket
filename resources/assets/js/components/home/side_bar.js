import React , { Component } from 'react' ;
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import MenuIcon from '@material-ui/icons/Menu';
import AllIcon from '@material-ui/icons/Dashboard';
import DeletedIcon from '@material-ui/icons/DeleteSweep';
import AddIcon from '@material-ui/icons/AddCircle';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import {showAddPasswordPanel , signout , changeView } from '../../actions/index'
import {connect} from 'react-redux'

class SideBar extends Component {

    constructor ( props ) {
        super ( props ) ;

        this.state = {
            menu1 : true ,
            menu2 : false ,
            selectedIndex: 1,
        };
    }
    render () {

        return (
            <div>
                <Drawer
                    variant="permanent"
                    className="drawer"
                >

                    <List>
                        <ListItem className="title-sidebar-item">
                            <h2 className="sidebar-title" >Password Pocket</h2>
                        </ListItem>


                        <ListItem button  className="sidebar-first-button" onClick={ ()=>{ this.setState( { menu1 : !this.state.menu1 } ) } }>
                            <ListItemIcon>
                                <MenuIcon />
                            </ListItemIcon>
                            <ListItemText inset primary="Passwords" />
                            {this.state.menu1 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>

                        <Collapse className="collapse" in={this.state.menu1} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>

                                <ListItem className="collapse-item" button onClick={ () => { this.props.changeView('all') } } >
                                    <ListItemIcon>
                                        <AllIcon />
                                    </ListItemIcon>
                                    <ListItemText inset primary="All" />
                                </ListItem>

                                <ListItem className="collapse-item" button onClick={ () => { this.props.changeView('starred') } } >
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText inset primary="Starred" />
                                </ListItem>

                                <ListItem className="collapse-item" button onClick={ () => { this.props.changeView('deleted') } } >
                                    <ListItemIcon>
                                        <DeletedIcon />
                                    </ListItemIcon>
                                    <ListItemText inset primary="Deleted" />
                                </ListItem>

                            </List>
                        </Collapse>

                        <Divider />



                        <Divider />

                        <ListItem button onClick={ () => { this.props.showAddPasswordPanel() } } >
                            <ListItemIcon>
                                <AddIcon />
                            </ListItemIcon>
                            <ListItemText primary="Add Password" />
                        </ListItem>

                        <Divider />

                        <ListItem button className="" onClick={ () => { this.props.signout( ()=>{ this.props.history.push('/') } ) }  }  >
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>

                    </List>

                </Drawer>
            </div>
        );
    }
}

export default connect ( null , { showAddPasswordPanel , signout , changeView } ) ( SideBar ) ;
