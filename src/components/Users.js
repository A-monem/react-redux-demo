import React, { useEffect } from 'react'
import { fetchUsers } from '../redux'
import { connect } from 'react-redux'

function Users(props) {

    useEffect(() => {
        props.fetchUsers()
    }, [])

    return (
        <div>
            {
                props.userData.loading
                ? <h4>Loading ... </h4>
                : (props.userData.users.map((user, i) => (
                    <h4 key={i}>{user.id}-{user.name}</h4>
                    )))
            }
        </div>
    )
}

function mapStateToProps(state){
    return {
        userData: state.users
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)
