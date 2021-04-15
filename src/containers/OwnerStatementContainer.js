import React, { Component } from 'react';
import { fetchOwners } from '../actions/fetchOwners';
import { connect } from 'react-redux';
import OwnerSelect from '../components/OwnerSelect';
class OwnerStatementContainer extends Component {
    componentDidMount() {
        this.props.fetchOwners()
    }
    render() {
        return (
            <div>
            <OwnerSelect owners={this.props.owners}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        owners: state.owners
    }
}

export default connect(mapStateToProps, { fetchOwners })(OwnerStatementContainer);