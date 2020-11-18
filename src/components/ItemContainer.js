import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props) {
    const [numberOfItems, setNumberOfItems] = useState(1)
    return (
        <div>
            <h2>Number of cakes {props.numberOfItems}</h2>
            <input value={numberOfItems} onChange={(e) => setNumberOfItems(e.target.value)}/>
            <button onClick={() => props.buyItem(numberOfItems)}>Buy {props.cake ? 'Cake' : 'Ice Cream'}</button>
        </div>
    )
}

function mapStateToProps(state, ownProps) {
    const itemState = ownProps.cake 
        ? state.cake.numberOfCakes
        : state.iceCream.numberOfIceCreams

    return {
        numberOfItems: itemState
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    const itemDispatch = ownProps.cake 
        ? (numberOfItems) => dispatch(buyCake(numberOfItems))
        : (numberOfItems) => dispatch(buyIceCream(numberOfItems))

    return {
        buyItem: itemDispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
