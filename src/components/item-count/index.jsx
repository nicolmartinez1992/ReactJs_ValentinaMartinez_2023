import React from "react"
import { useState } from "react"
import Button from '@mui/material/Button';
import "./index.css"
import { CartContext } from "../../context/cart-context";

const ItemCount = ({ stock, initial, product, onAdd }) => {
    const { carrito, onAddProduct } = React.useContext(CartContext)
    console.log(carrito)

    const addToCart = (items) => {
        onAdd(items)
    }

    const [items, setItems] = useState(initial)

    const increment = () => {
        if (items < stock) {
            setItems(items + 1)
        }
    }

    const decrement = () => {
        if (items > 1) {
            setItems(items - 1)
        }
    }

    return (
        <div>
            <div className="globalCounter">
                <div className="counterContainer">
                    <button className="button" onClick={decrement}>-</button>
                    <h4 className="quantity" style={{ color: "black" }}>{items}</h4>
                    <button className="button" onClick={increment}>+</button>
                </div>
            </div>
            <div className="addButtonContainer">
                <Button style={{ color: "black", fontWeight: "bold", fontFamily: "unset" }} size="small" onClick={() => { onAddProduct(product, items); addToCart(items) }} disabled={!stock}>Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount