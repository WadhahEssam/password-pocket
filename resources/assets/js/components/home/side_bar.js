import React , { Component } from 'react' ;
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import MenuIcon from '@material-ui/icons/Menu';
import AllIcon from '@material-ui/icons/Dashboard';
import ViewIcon from '@material-ui/icons/GridOn';
import ViewInsideIcon from '@material-ui/icons/ChromeReaderMode';
import DeletedIcon from '@material-ui/icons/DeleteSweep';
import AddIcon from '@material-ui/icons/AddCircle';
import LogoutIcon from '@material-ui/icons/ExitToApp';

class SideBar extends Component {

    constructor ( props ) {
        super ( props ) ;

        this.state = {
            menu1 : true ,
            menu2 : false ,
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

                                <ListItem className="collapse-item" button >
                                    <ListItemIcon>
                                        <AllIcon />
                                    </ListItemIcon>
                                    <ListItemText inset primary="All" />
                                </ListItem>

                                <ListItem className="collapse-item" button >
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText inset primary="Starred" />
                                </ListItem>

                                <ListItem className="collapse-item" button >
                                    <ListItemIcon>
                                        <DeletedIcon />
                                    </ListItemIcon>
                                    <ListItemText inset primary="Deleted" />
                                </ListItem>

                            </List>
                        </Collapse>

                        <Divider />

                        <ListItem button onClick={ ()=>{ this.setState( { menu2 : !this.state.menu2 } ) } }>
                            <ListItemIcon>
                                <ViewIcon />
                            </ListItemIcon>
                            <ListItemText inset primary="View" />
                            {this.state.menu2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse className="collapse" in={this.state.menu2} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>

                                <ListItem className="collapse-item" button >
                                    <ListItemIcon>
                                        <ViewInsideIcon className="large-icon" />
                                    </ListItemIcon>
                                    <ListItemText inset primary="Large" />
                                </ListItem>

                                <ListItem className="collapse-item" button >
                                    <ListItemIcon>
                                        <ViewInsideIcon className="small-icon" />
                                    </ListItemIcon>
                                    <ListItemText inset primary="Small" />
                                </ListItem>

                            </List>
                        </Collapse>

                        <Divider />

                        <ListItem button >
                            <ListItemIcon>
                                <AddIcon />
                            </ListItemIcon>
                            <ListItemText primary="Add Password" />
                        </ListItem>

                        <Divider />

                        <ListItem button className="">
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

export default SideBar ;
