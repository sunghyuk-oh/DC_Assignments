import { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreator from '../stores/creators/actionCreate'
import './css/DisplayCart.css'

function DisplayCart(props) {
    useEffect(() => {
        props.onAddCartItems()
    }, [])

    const handleDeleteCartItem = (cartId) => {
        fetch('http://localhost:8080/api/delete-cart-item', {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ "cartId": cartId })
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                console.log('The book item has been deleted from the cart.')
                props.onAddCartItems()
            }
        })
    }

    const allItems = props.cartItems.map((item, index) => {
        return <div key={index} className="eachCartItem">
                    <img className="bookImage" src={item.imageurl} />
                    <h4>{item.title}</h4>
                    <p><b>Genre: </b>{item.genre}</p>
                    <button onClick={() => handleDeleteCartItem(item.cart_id)}>Delete</button>
                </div>
    })

    return (
        <main>
             <div id="cart-content">{allItems}</div>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCartItems: () => dispatch(actionCreator.fetchCartItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCart)
