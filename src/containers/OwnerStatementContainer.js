import React, { Component } from 'react';
import { fetchOwners } from '../actions/fetchOwners';
import { connect } from 'react-redux';
class OwnerStatementContainer extends Component {
    componentDidMount() {
        this.props.fetchOwners()
    }
    render() {
        console.log(this.props.owners)
        return (
            <div>Owners</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        owners: state.owners
    }
}

export default connect(mapStateToProps, { fetchOwners })(OwnerStatementContainer);