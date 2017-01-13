import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class UserList extends Component {
    componentWillMount() {
        this.props.getUsers()
    }

    renderUser(user) {
        return (
            <div key={user.name}>
                {user.name}
            </div>
        )
    }

    render() {
        return (
            <div>
            {this.props.users.map(this.renderUser)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, actions)(UserList)