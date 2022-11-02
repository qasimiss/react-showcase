import GoodsItem from "./GoodsItem"
import { useContext } from "react"
import { ShopContext } from "../context"

const GoodsList = () => {
    const { goods = [] } = useContext(ShopContext)
    if (!goods.length) {
        return <h3>Nothing is here</h3>
    }
    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem key={item.id} {...item} />
            ))}
        </div>
    )
}
export default GoodsList
