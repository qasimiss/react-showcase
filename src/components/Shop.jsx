import React, { useState, useEffect } from "react"
import { API_KEY, API_URL } from "../config"
import Preloader from "./Preloader"
import GoodsList from "./GoodsList"
import Cart from "./Cart"

const Shop = () => {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])

    const addItem = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        )
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    }
                } else {
                    return orderItem
                }
            })
            setOrder(newOrder)
        }
    }

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((responce) => responce.json())
            .then((data) => {
                data.featured && setGoods(data.featured)
                setLoading(false)
            })
    }, [])

    return (
        <main className="container content">
            <Cart quantity={order.length} />
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} addItem={addItem} />
            )}
        </main>
    )
}

export default Shop