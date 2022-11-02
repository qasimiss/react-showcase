import React, { useEffect, useContext } from "react"
import { API_KEY, API_URL } from "../config"
import Preloader from "./Preloader"
import GoodsList from "./GoodsList"
import Cart from "./Cart"
import BasketList from "./BasketList"
import Alert from "./Alert"
import { ShopContext } from "../context"

const Shop = () => {
    const { setGoods, order, isBasketShow, alertName, loading } =
        useContext(ShopContext)

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((responce) => responce.json())
            .then((data) => setGoods(data.featured))
        //eslint-disable-next-line
    }, [])

    return (
        <main className="container content">
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <GoodsList />}
            {isBasketShow && <BasketList />}
            {alertName && <Alert />}
        </main>
    )
}

export default Shop
