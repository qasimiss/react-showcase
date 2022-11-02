import React, { useEffect } from "react"

export default function Alert(props) {
    const { name = "", closeAlert } = props

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000)
        return () => {
            clearTimeout(timerId)
        }
        // eslint-disable-next-line
    }, [name])
    return (
        <div id="toast-container">
            <div className="toast">{name} has been added to the cart</div>
        </div>
    )
}