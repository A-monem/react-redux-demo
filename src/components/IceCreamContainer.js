import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

const IceCreamContainer = (props) => {
    return (
        <div>
            <h2>Number of icecreams {props.numberOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy an icecream</button>
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        numberOfIceCreams: state.iceCream.numberOfIceCreams
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        buyIceCream: () => dispatch(buyIceCream())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
