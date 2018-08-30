import React , { Component } from 'react' ;
import Grid from '@material-ui/core/Grid';
import PasswordCard from './password_card';
import SearchBar from 'material-ui-search-bar'
import AddPasswordPanel from './add_password_panel';
import { connect } from 'react-redux'

class PasswordsPanel extends Component {

    constructor ( props ) {
        super ( props ) ;
        this.state = {
            value : ''
        }
    }
    render () {

        const gridOptions = {
            className : "welcome-grid" ,
            spacing : 24 ,
            alignItems : "stretch" ,
        }

        console.log(this.props) ;
        return (
            <div>
                <main >
                    <div className={ (this.props.view === 'mobile') ? "content-mobile" : "content" } >
                        {/* <div className="search-box-div">
                            <input className="search-box" placeholder="Search"/>
                        </div> */}

                        <div className="search-box-div">
                            <SearchBar
                                className="search-box"
                                value={this.state.value}
                                onChange={(newValue) => this.setState({ value: newValue })}
                                onRequestSearch={() => doSomethingWith(this.state.value)}
                            />
                        </div>



                        <Grid container { ... gridOptions } >

                            <Grid item className="password-card" xs={12} sm={6} md={4} lg={4} xl={2} >

                                <PasswordCard/>

                            </Grid>

                            <Grid item className="password-card" xs={12} sm={6} md={4} lg={4} xl={2} >

                            <PasswordCard/>

                            </Grid>

                            <Grid item className="password-card" xs={12} sm={6} md={4} lg={4} xl={2} >

                            <PasswordCard/>

                            </Grid>

                            <Grid item className="password-card" xs={12} sm={6} md={4} lg={4} xl={2} >

                                <PasswordCard/>

                            </Grid>

                            <Grid item className="password-card" xs={12} sm={6} md={4} lg={4} xl={2} >

                                <PasswordCard/>

                            </Grid>


                            <Grid item className="password-card" xs={12} sm={6} md={4} lg={4} xl={2} >

                                <PasswordCard/>

                            </Grid>

                        </Grid>


                        {/* Add Password Panel */}

                        { (this.props.isAddPasswordPanelOpened) ? <AddPasswordPanel/> : ""}

                    </div>
                </main>
            </div>
        ) ;
    }
}

function mapStateToProps ( state ) {
    return { isAddPasswordPanelOpened : state.isAddPasswordPanelOpened } ;
}

export default connect ( mapStateToProps ) ( PasswordsPanel ) ;
