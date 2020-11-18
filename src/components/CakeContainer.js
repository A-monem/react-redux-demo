import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes {props.numberOfCakes}</h2>
            <button onClick={props.buyCake}>Buy a cake</button>
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
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
