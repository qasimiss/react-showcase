const BasketItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
        removeItem,
        incrementQuantity,
        decrementQuantity,
    } = props
    return (
        <li className="collection-item">
            {name}{" "}
            <i
                className="material-icons basket-quantity"
                onClick={() => decrementQuantity(id)}
            >
                remove
            </i>
            x{quantity}{" "}
            <i
                className="material-icons basket-quantity"
                onClick={() => incrementQuantity(id)}
            >
                add
            </i>{" "}
            = {price * quantity}$
            <span onClick={() => removeItem(id)} className="secondary-content">
                <i className="material-icons basket-delete">close</i>
            </span>
        </li>
    )
}
export default BasketItem
