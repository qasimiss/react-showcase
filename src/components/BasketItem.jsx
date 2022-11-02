const BasketItem = (props) => {
    const { id, name, price, quantity, removeItem } = props
    return (
        <li className="collection-item">
            {name} x{quantity} = {price * quantity}$
            <span onClick={() => removeItem(id)} class="secondary-content">
                <i class="material-icons basket-delete">close</i>
            </span>
        </li>
    )
}
export default BasketItem
