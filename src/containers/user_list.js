import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class UserList extends Component {
    componentWillMount() {
        this.props.getUsers()
    }
    
    render() {
        console.log(this.props.users)
        return (
            <div>
            UserList
            { this.props.users.map( user => {
                return <div key={user.id} >{user.name}</div>
            }) }
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