import BasketItem from "./BasketItem"
import { useContext } from "react"
import { ShopContext } from "../context"

const BasketList = () => {
    const { order, handleBasketShow } = useContext(ShopContext)
    const totalPrice = order.reduce((sum, item) => {
        return sum + item.price * item.quantity
    }, 0)
    return (
        <ul className="collection basket-list">
            <li className="collection-item active  light-blue accent-1 brown-text">
                <b>Cart</b>
            </li>
            {order.length ? (
                order.map((item) => <BasketItem key={item.id} {...item} />)
            ) : (
                <li className="collection-item">The cart is empty</li>
            )}
            <li className="collection-item active  light-blue accent-1 brown-text">
                <b>Total Cost: {totalPrice}$</b>
                <button className="secondary-content btn blue accent-2 btn-small">
                    Order
                </button>
            </li>
            <i
                className="material-icons basket-close"
                onClick={handleBasketShow}
            >
                close
            </i>
        </ul>
    )
}
export default BasketList
