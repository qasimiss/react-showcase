import React, { useState, useEffect } from "react"
import { API_KEY, API_URL } from "../config"
import Preloader from "./Preloader"
import GoodsList from "./GoodsList"

const Shop = () => {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)

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
                console.log(data.featured)
            })
    }, [])

    return (
        <main className="container content">
            {loading ? <Preloader /> : <GoodsList goods={goods} />}
        </main>
    )
}

export default Shop
