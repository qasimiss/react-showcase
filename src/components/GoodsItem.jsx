import { useContext } from "react"
import { ShopContext } from "../context"

const GoodsItem = (props) => {
    const { id, name, description, price, full_background } = props
    const { addItem } = useContext(ShopContext)
    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={full_background} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn blue accent-2"
                    onClick={() =>
                        addItem({
                            id,
                            name,
                            price,
                        })
                    }
                >
                    Buy
                </button>
                <span className="right" style={{ fontSize: "1.8rem" }}>
                    {price}$
                </span>
            </div>
        </div>
    )
}
export default GoodsItem
