import React , { Component } from 'react' ;
import { connect } from 'react-redux' ;

class Home extends Component {

    componentDidMount () {
        console.log(this.props.userData) ;
        if ( this.props.userData.name === '' ) {
            this.props.history.push('/') ;
        }
    }

    render () {

        return (
            <div>
                test
            </div>
        );
    }
}

function mapStateToFunction ( state ) {
    return { userData : state.userData } ;
}

export default connect ( mapStateToFunction ) ( Home ) ;
