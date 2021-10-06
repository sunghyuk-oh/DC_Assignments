import { connect } from 'react-redux'

function Cart(props) {
    console.log(props.cartItems)
    const carts = props.cartItems.map((item, index) => {
        return (
            <div key={index}>
                <img src={item.poster} />
                <h3>{item.title}</h3>
                <p>Year: {item.year}</p>
                <p>Price: ${item.price}</p>
            </div>
        )
    })

    return (
        <section>
           {carts}
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    }
}

export default connect(mapStateToProps)(Cart)