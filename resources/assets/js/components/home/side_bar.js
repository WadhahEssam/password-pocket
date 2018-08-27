import React , { Component } from 'react' ;
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';

class SideBar extends Component {
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
                        <ListItem button className="sidebar-first-button">
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItem>
                        <ListItem button className="">
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItem>
                        <ListItem button className="">
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button className="">
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default SideBar ;
