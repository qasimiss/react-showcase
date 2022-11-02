import GoodsItem from "./GoodsItem"
const GoodsList = (props) => {
    const { goods = [] } = props

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
