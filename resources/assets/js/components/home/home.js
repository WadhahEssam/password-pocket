import React , { Component } from 'react' ;
import { connect } from 'react-redux' ;
import NavBar from './nav_bar';
import SideBar from './side_bar';
import PasswordsPanel from './passwords_panel' ;

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

                <PasswordsPanel />

            </div>
        );
    }
}

function mapStateToFunction ( state ) {
    return { userData : state.userData } ;
}

export default connect ( mapStateToFunction ) ( Home ) ;
