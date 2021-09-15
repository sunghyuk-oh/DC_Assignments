import { useEffect } from 'react'
import { connect } from 'react-redux'

function DisplayCart(props) {
    useEffect(() => {
        fetch('http://localhost:8080/api/view-cart')
        .then(response => response.json())
        .then(books => props.onAddCartItems(books))
    }, [])

    const allItems = props.cartItems.map((item, index) => {
        return <div key={index} className="eachCartItem">
                    <img className="bookImg" src={item.imageurl} />
                    <h4>{item.title}</h4>
                    <p><b>Genre: </b>{item.genre}</p>
                    <button>Delete</button>
                </div>
    })

    return (
        <main>
             <div>{allItems}</div>
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
        onAddCartItems: (books) => dispatch({type: "CART_ITEMS", payload: books})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCart)
