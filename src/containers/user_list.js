import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class UserList extends Component {
    componentWillMount() {
        this.props.getUsers()
    }

    renderList(user) {
        return (
            <div key={user.id}>
                { user.name }
            <hr />
            </div>
        )
    }
    
    render() {
        console.log(this.props.users)
        return (
            <div>
            <h3>A List of Users</h3>
                { this.props.users.map(this.renderList) }
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