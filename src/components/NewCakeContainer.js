import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function NewCakeContainer(props) {
    const [payload, setPayLoad] = useState(1)

    return (
        <div>
            <h2>Number of cakes {props.numberOfCakes}</h2>
            <input type='text' value={payload} onChange={(e) => setPayLoad(e.target.value)}/>
            <button onClick={() => props.buyCake(payload)}>Buy a cake</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        buyCake: (payload) => dispatch(buyCake(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
