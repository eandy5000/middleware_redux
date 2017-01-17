import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class UserList extends Component {
    componentWillMount() {
        console.log(" getUsers",this.props.getUsers())
        this.props.getUsers()
    }
    
    render() {
        console.log(this.props.test)
        return (
            <div>UserList</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        test: state.users
    }
}

export default connect(mapStateToProps, actions)(UserList)